var sqlite = require('sqlite');
var db = new sqlite.Database('data.db')

startingID = {
  events,
  organizations,
  users
}

db.serialize().then(() => {
  db.run(`CREATE TABLE events (
      id TEXT NOT NULL,
      title TEXT,
      description TEXT,
      date NUMERIC,
      organization INT NOT NULL
    );`)
  db.run(`CREATE TABLE organizations (
    id TEXT NOT NULL,
    username TEXT NOT NULL
    name TEXT NOT NULL,
    description TEXT,
    dateCreated NUMERIC,
    tags STRING
  );`)
  db.run(`CREATE TABLE users (
    id TEXT NOT NULL,
    username TEXT,
    interests TEXT,
    plannedEvents TEXT,
    dateCreated NUMERIC
  );`)
  db.get('SELECT MAX(id) from events;').then((id) => {
    if(typeof id === 'undefined') return;
    startingID.events = rows[0] + 1;
  });
  db.get('SELECT MAX(id) from organizations;').then((id) => {
    if (typeof id === 'undefined') return;
    startingID.organizations = rows[0] + 1;
  })
  db.get('SELECT MAX(id) from users').then((id) => {
    if (typeof id === 'undefined') return;
    startingID.users = rows[0] + 1;
  })
})

function* idGen(start) {
  var nextID = start;
  while(true) {
    yield nextID;
    nextID++;
  }
}

var orgID = idGen(startingID.organizations);
var eventID = idGen(startingID.events);
var userID = idGen(startingID.users);

function createOrganization(data) {
  data.id = orgID.next();
  data.dateCreated = Date.now();
  var params = {};
  for (let [key, data] of data.entries()) {
    // changes key into $key so that they can be used as params
    params['$' + key] = data;
  }
  db.run(`INSERT INTO organizations (id,username,name,description,dateCreated,tags)
  VALUES (
    $id,
    $username,
    $name,
    $description,
    $dateCreated,
    $tags
  );`, params);
}

function createUser(data) {
  data.id = userID.next();
  data.dateCreated = Date.now();
  var params = {};
  for (let [key, data] of data.entries()) {
    // changes key into $key so that they can be used as params
    params['$' + key] = data;
  }
  db.run(`INSERT INTO users (id,username,interests,plannedEvents,dateCreated)
  VALUES (
    $id,
    $username,
    $interests,
    $plannedEvents,
    $dateCreated
  );`, params);
}

function createEvent(data) {
  data.id = eventID.next();
  data.dateCreated = Date.now();
  var params = {};
  for (let [key, data] of data.entries()) {
    // changes key into $key so that they can be used as params
    params['$' + key] = data;
  }
  db.run(`INSERT INTO events (id,title,description,date,organization)
  VALUES (
    $id,
    $title,
    $description,
    $date,
    $organization
  );`, params);
}

function searchOrganizations(query) {
  return db.all('SELECT (id, name) FROM organizations LIKE $search', {
    $search: query + '?'
  })
}

function getEventsByOrganization(orgID, next) {
  return db.all('SELECT id FROM events WHERE organization=?;', orgID)
  .then(formatEvents)
}

function formatEvents(ids) {
  // takes in array of event ids
  // outputs object 
  var events = [];
  for (let id of ids) {
    events.push(getEvent(id))
  }
  Promise.all(events)
  .then((events) => {
    var orgIDS = [];
    for (let event of events) {
      // get the organization ids in the events
      if (!orgIDS.includes(event.organization)) {
        orgIDS.push(event.organization);
      }
    }
    var orgs = {};
    var orgPromises
    for (let id of orgIDS) {
      orgPromises.push(getOrganization(id))
    }
    Promise.all(orgPromises).then((orgObjects) =>{
      for (let org of orgObjects) {
        orgs[org.id] = org;
      }
      for (let event of events) {
        event.organization = org[events.organization]
      }
      return events;
    })
  })
}

function getEvent(id) {
  return db.get('SELECT (id, title, description, date, organization) FROM events WHERE id=?', id);
}

function getOrganization(id) {
  return db.get(`SELECT (
    id, username, name, description, dateCreated, tags
    ) FROM organizations WHERE id=?`, id);
}

function getUser(id) {
  return db.get(`SELECT (
    id, username, interests, plannedEvents, dateCreated
    ) FROM users WHERE id=?`, id)
}