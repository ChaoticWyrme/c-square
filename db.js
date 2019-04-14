module.exports = (db) => {

function errorHandler(error) {
  throw error;
}

startingID = {
  events: 0,
  organizations: 0,
  users: 0
};
(async () => {
  try {
    await db.run(`CREATE TABLE events (
        id TEXT NOT NULL,
        title TEXT,
        description TEXT,
        date NUMERIC,
        organization INT NOT NULL
      );`);

    await db.run(`CREATE TABLE organizations (
      id TEXT NOT NULL,
      username TEXT NOT NULL,
      name TEXT NOT NULL,
      description TEXT,
      dateCreated NUMERIC,
      tags STRING
    );`);

    await db.run(`CREATE TABLE users (
      id TEXT NOT NULL,
      username TEXT,
      interests TEXT,
      plannedEvents TEXT,
      dateCreated NUMERIC
    );`);

    await db.get('SELECT MAX(id) from events;').then(id => {
      if (typeof id === 'undefined') return;
      startingID.events = id;
    })
    
    await db.get('SELECT MAX(id) from organizations;').then(id => {
      if (typeof id === 'undefined') return;
      startingID.organizations = id;
    })
    
    await db.get('SELECT MAX(id) from users').then(id => {
      if (typeof id === 'undefined') return;
      startingID.users = id;
    })
  } catch(err) {
    return;
  }
})()

function* idGen(start) {
  var nextID = start;
  while (true) {
    yield nextID;
    nextID++;
  }
}

var orgID = idGen(startingID.organizations);
var eventID = idGen(startingID.events);
var userID = idGen(startingID.users);

async function createOrganization(data) {
  data.id = orgID.next().value;
  data.dateCreated = Date.now();
  console.log(data);
  var params = {};
  for (let [key, prop] of Object.entries(data)) {
    // changes key into $key so that they can be used as params
    params['$' + key] = prop;
  }
  var duplicate = await db.get(`SELECT 1 FROM organizations WHERE
    id=$id OR username=$username OR name=$name`, {
    $id: data.id,
    $username: data.username,
    $name: data.name
  })

  if (duplicate) {
    throw new Error('User already exists')
  }
  await db.run(
    `INSERT INTO organizations (id,username,name,description,dateCreated,tags)
  VALUES (
    $id,
    $username,
    $name,
    $description,
    $dateCreated,
    $tags
  );`, params);
  return data.id;
}

function createUser(data) {
  data.id = userID.next().value;
  data.dateCreated = Date.now();
  var params = {};
  for (let [key, data] of data.entries()) {
    // changes key into $key so that they can be used as params
    params['$' + key] = data;
  }
  db.run(
    `INSERT INTO users (id,username,interests,plannedEvents,dateCreated)
  VALUES (
    $id,
    $username,
    $interests,
    $plannedEvents,
    $dateCreated
  );`,
    params
  ).catch(errorHandler);
}

function createEvent(data) {
  data.id = eventID.next().value();
  data.dateCreated = Date.now();
  var params = {};
  for (let [key, data] of data.entries()) {
    // changes key into $key so that they can be used as params
    params['$' + key] = data;
  }
  db.run(
    `INSERT INTO events (id,title,description,date,organization)
  VALUES (
    $id,
    $title,
    $description,
    $date,
    $organization
  );`,
    params
  ).catch(errorHandler);
}

function searchOrganizations(query) {
  return db.all('SELECT id, name FROM organizations LIKE $search;', {
    $search: query + '?'
  }).catch(errorHandler);
}

function getEventsByOrganization(orgID, next) {
  return db
    .all('SELECT id FROM events WHERE organization=?;', orgID)
    .then(formatEvents).catch((err) => {
      console.error(err);
    }).catch(errorHandler);
}

async function formatEvents(ids) {
  // takes in array of event ids
  // outputs object
  var events = [];
  for (let id of ids) {
    events.push(getEvent(id));
  }
  var events = await Promise.all(events)
  var orgIDS = [];
  for (let event of events) {
    // get the organization ids in the events
    if (!orgIDS.includes(event.organization)) {
      orgIDS.push(event.organization);
    }
  }
  var orgs = {};
  var orgPromises;
  for (let id of orgIDS) {
    orgPromises.push(getOrganization(id));
  }
  var orgObjects = await Promise.all(orgPromises)
  for (let org of orgObjects) {
    orgs[org.id] = org;
  }
  for (let event of events) {
    event.organization = org[events.organization];
  }
  return events;
}

function getEvent(id) {
  return db.get(
    'SELECT * FROM events WHERE id=?',
    id
  ).catch(errorHandler);
}

function getOrganization(id) {
  return db.get(`SELECT * FROM organizations WHERE id=?`, id).catch(errorHandler);
}

function getUser(id) {
  return db.get(
    `SELECT * FROM users WHERE id=?;`,
    id
  ).catch(errorHandler)
}

return {
  createEvent,
  createOrganization,
  createUser,
  getEvent,
  getEventsByOrganization,
  getOrganization,
  getUser,
  searchOrganizations
}}