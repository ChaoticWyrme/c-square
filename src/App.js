import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Events from "./Events";
import Volunteer from "./Volunteer";
import User from "./User";
import Orgs from "./Orgs";

class App extends Component {

  render() {
    return (
      <Router>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/events" component={Events} />
        <Route path="/volunteer" component={Volunteer} />
      </Router>
    );
  }
}

function Navigation() {
  return (
    <div class="Navigation">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/volunteer">Volunteer</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Home() {
  return (
    <div className={"home"}>
      <User user={user} />
      <Orgs orgs={orgs}/>
    </div>
  );
}

const user = {
  name: "Damian Barrous",
  image: "https://via.placeholder.com/150",
  bio: "Hey I'm Damian, I'm cool!",
  interests: ["swimming", "dancing", "coding", "breathing", "laughing"],
  skills: ["html", "html2", "Assembly", "memes"]
};


const orgs = [{
    companyImage: "https://cdn0.handsonconnect.org/0005/images/Boston%20Cares%20color%20high%20res%20JPG%20(002).jpg",
    companyName: "Boston Cares",
    missionStatement: "Boston Cares mobilizes and trains individual and corporate volunteers who strengthen communities and improve the lives of people in need.  We partner with schools and nonprofits with needs that can be filled by volunteer teams; then we recruit, train & lead reliable groups of volunteers who get the job done.",
    neededSkills: ["Management","data systems(sql)","leadership"],
    donate: "https://www.bostoncares.org/waystogive",
    location: "90 Canal St #610, Boston, MA 02114",
    bestFormOfContact:{
        form: "email",
        link: "volunteers@bostoncares.org"
    }
},{
    companyImage: "https://theliteracylab.org/wp-content/uploads/2016/04/the_literacy_lab_logos_for_export-01-300x183.png",
    companyName: "The Literacy Lab",
    missionStatement: "We believe that all children deserve to learn how to read and that literacy is a human right.  We are persistent in pursuit of our mission. We devote energy to what works, and we constantly problem solve to improve our results. We believe a solution is within our reach, and we communicate optimism in our work.",
    neededSkills: ["Community building skills","heart for children","willingness to work long hours"],
    donate: "https://theliteracylab.org/donate",
    location: "Springfield, MA; Holyoke, MA",
    bestFormOfContact:{
        form: "phone",
        link: "202-643-5685"
    }
},{
    companyImage: "https://www.fshsociety.org/wp-content/uploads/2017/04/cropped-logo@2x.png",
    companyName: "The FSH society",
    missionStatement: "Find treatments and a cure for FSHD while empowering our families. Accelerate the development of treatments and a cure for FSHD Increase, engage, and empower our stakeholders. Aggressively leverage and expand resources to support our Mission",
    neededSkills: ["conduct development meetings","database managing","sql","self-motivated"],
    donate: "https://www.fshsociety.org/wp-content/uploads/2017/04/cropped-logo@2x.png",
    location: "Lexinton, Ma",
    bestFormOfContact:{
        form: "phone",
        link: "(781) 301-6060"
    }
},{
    companyImage: "http://www.found-in-translation.org/uploads/8/3/7/2/8372343/1348029368.png",
    companyName: "Found-in-Translation",
    missionStatement: "To help homeless and low-income multilingual women to achieve economic security through the use of their language skills.  To reduce ethnic, racial, and linguistic disparities in health care by unleashing bilingual talent into the workforce",
    neededSkills: ["Passion for our mission, Counseling, management"],
    donate: "https://secure.givelively.org/donate/found-in-translation-inc",
    location: "1532B Dorchester Ave. Dorchester, MA",
    bestFormOfContact:{
        form: "email",
        link: "abigail@found-in-translation.org"
    }
},{
    companyImage: "http://familycontinuity.org/images/dev/images/FC-Logo-2.png",
    companyName: "Family Continuity",
    missionStatement: "Building on our treatment philosophy that positive change is always possible, ourTherapeutic Day Service Clinician provides clinical treatment and direct care to individuals, their families, and support systems. The position is responsible for providing clinical oversight of staff who work in the program, perform intakes for all new families and youth referred to the program that is inclusive of individuals and families with varying developmental stages, inclusive of all ethnic backgrounds, religions, sexual orientation, genders, and ages.",
    neededSkills: ["Masters in social work, Expierience counseling teens, worked with mental health sector"],
    donate: "http://familycontinuity.org/support-us/donate-now",
    location: "360 Merrimack Street, Bldg. 9, 3rd Floor, Lawrence, MA",
    bestFormOfContact:{
        form: "phone",
        link: "978-687-1617"
    }
},{
    companyImage: "http://massnonprofitnet.org/wp-content/uploads/job_listings/BW-Logo.jpg",
    companyName: "Craftsman technology group",
    missionStatement: "Engaging the non-profit sector. We conduct ourselves with integrity. We value the client’s needs above all else. We strive for quality in everything we do. We support those organizations that support our community. Every day we strive to be: transparent and good, independant and objective, and ultimatly good",
    neededSkills: ["commitment to non-profits, salesforce, experience with clients,technical skills"],
    donate: "https://www.wcrf.org/int/donate",
    location: "192 South Street, Boston, MA 02111",
    bestFormOfContact:{
        form: "email",
        link: "info@craftsmantech.com"
    }
},{
    companyImage: "https://www.rosiesplace.org/site/images/logo_rosiesplace.png",
    companyName: "Rosie's Place",
    missionStatement: "To reach out to poor and homeless women who hide in plain sight, trying every day to understand the right way to encourage and engage them.",
    neededSkills: ["Human services, adaptable, bilingual, work in urban communities"],
    donate: "https://secure2.convio.net/rsp/site/Donation2;jsessionid=00000000.app212a?1400.donation=form1&df_id=1400&NONCE_TOKEN=0024BF735F7F3D7174AA650687E9F25E",
    location: "889 Harrison Ave, Boston, MA",
    bestFormOfContact:{
        form: "email",
        link: "webmaster@rosiesplace.org"
    }
},{
    companyImage: "https://www.claconnect.com/-/media/cla-image-repository/logos/cliftonlarsonallen.png",
    companyName: "Clifton Larson Allen",
    missionStatement: "CLA exists to create opportunities for our clients, our people, and our communities through industry-focused wealth advisory, outsourcing, audit, tax, and consulting services.",
    neededSkills: ["financial management, budget forcasting, people skills"],
    donate: "https://www.wcrf.org/int/donate",
    location: "Boston, Ma",
    bestFormOfContact:{
        form: "phone",
        link: "1-888-529-2648."
    }
},{
    companyImage: "https://www.childrenacrossamerica.org/wp-content/uploads/small-logo-transparent.png",
    companyName: "Children Across America",
    missionStatement: "We provide a free alternative program to underserved families with students in grades K-5, who can’t afford a private tutor, or professional tutoring services such as Kaplan or Kumon.",
    neededSkills: ["Teaching, heart for children, knowledgeble in academic feild"],
    donate: "https://www.childrenacrossamerica.org/how-you-can-help/donate/",
    location: "23 Pine Street, Milford, MA",
    bestFormOfContact:{
        form: "email",
        link: "info@childrenacrossamerica.org"
    }
},{
    companyImage: "https://remineralize.org/wp-content/themes/trades/img/rte_logo_dark2-byline.png",
    companyName: "Remineralize the Earth",
    missionStatement: "Remineralize the Earth (RTE) promotes the use of natural land and sea-based minerals to restore soils and forests, produce more nutritious food, and remove excess CO2 from the atmosphere.",
    neededSkills: ["Communication, management, people skills"],
    donate: "https://www.kindest.com/campaign/10",
    location: "152 South Street, Northampton, MA",
    bestFormOfContact:{
        form: "email",
        link: "jcampe@remineralize.org"
    }
},{
    companyImage: "http://anikefoundation.org/wp-content/uploads/2014/09/cropped-cropped-anikefoundation_logo02_test2.jpg",
    companyName: "Anike foundation",
    missionStatement: "We are a community of people that share a common belief that improving education in Africa will eventually reduce poverty and improve the quality of life and living conditions of Africans. Volunteering with us will enable you to build your resume and gain invaluable experience in an environment of supportive people that are always willing to help you.",
    neededSkills: ["legal advice for african imigrants, heart for Africa, degree in law"],
    donate: "http://anikefoundation.org/index.php/ways-to-give/",
    location: "435 West Boylston, MA",
    bestFormOfContact:{
        form: "email",
        link: "contact@anikefoundation.org"
    }
},{
    companyImage: "https://static.wixstatic.com/media/b5d1a8_e2950181580844e7a73a6b9ecbd8dfc6~mv2.png/v1/fill/w_364,h_78,al_c,q_80,usm_0.66_1.00_0.01/b5d1a8_e2950181580844e7a73a6b9ecbd8dfc6~mv2.webp",
    companyName: "Boston rescure image",
    missionStatement: "The Boston Rescue Mission transforms lives by empowering people who are homeless or at risk of becoming homeless to become more self-sufficient. We provide emergency overnight shelter with hot meals, toiletries, and bathroom and shower facilities to those in need. ",
    neededSkills: ["Can manage volunteers, heart for homeless, management, flexible"],
    donate: "https://www.servicenetwork.com/olg/bostonrm/Donate.aspx?FormId=21708209-8c40-4933-b92d-c153be995535",
    location: "39 Kingston St, Boston, MA 02111",
    bestFormOfContact:{
        form: "phone",
        link: "(617) 338-9000"
    }
}
];
export default App;
