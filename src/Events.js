import React, { Component } from "react";
import "./Events.css";
import User from "./User";
import EventOrg from "./EventOrg";


class Events extends Component {
  render() {
    return (
      <div>
          <EventsPage/>
      </div>
    );
  }
}

function EventsPage() {
    return (
        <div className={"home"}>
            <User user={user} />
            <EventOrg orgs={orgs}/>
        </div>
    );
}


const user = {
    name: "Damian Barrous",
    image: "/profile.jpg",
    bio: "Hey I'm Damian, I'm cool!",
    interests: ["swimming", "dancing", "coding", "breathing", "laughing"],
    skills: ["html", "html2", "Assembly", "memes"]
};


const orgs = [{
    companyImage: "http://familycontinuity.org/images/dev/images/FC-Logo-2.png",
    companyName: "Night Shift Brewing",
    missionStatement: "04/21/2019 6:00 pm to 10:00 pm",

    donate: "http://familycontinuity.org/support-us/donate-now",
    location: "360 Merrimack Street, Bldg. 9, 3rd Floor, Lawrence, MA",
},{
    companyImage: "https://www.fshsociety.org/wp-content/uploads/2017/04/cropped-logo@2x.png",
    companyName: "Beacons of Light: The 2019 Icon Awards Dinner and Ceremony",
    missionStatement: "04/25/2019 6:00 pm to 10:00 pm",
    neededSkills: ["hand", "money","tech"],
    donate: "https://www.fshsociety.org/wp-content/uploads/2017/04/cropped-logo@2x.png",
    location: "Courtyard Marriott Downtown Boston",

},{
    companyImage: "http://www.found-in-translation.org/uploads/8/3/7/2/8372343/1348029368.png",
    companyName: "Found-in-Translation",
    missionStatement: "04/30/2019 6:00 pm to 10:00 pm",
    neededSkills: ["tech","hand"],
    donate: "https://secure.givelively.org/donate/found-in-translation-inc",
    location: "1532B Dorchester Ave. Dorchester, MA",
    bestFormOfContact:{
        form: "email",
        link: "abigail@found-in-translation.org"
    }
},{
    companyImage: "https://theliteracylab.org/wp-content/uploads/2016/04/the_literacy_lab_logos_for_export-01-300x183.png",
    companyName: "The Literacy Lab",
    missionStatement: "05/01/2019 7:00 pm to 10:00 pm",
    neededSkills: ["general","tech"],
    donate: "https://theliteracylab.org/donate",
    location: "Springfield, MA; Holyoke, MA",
    bestFormOfContact:{
        form: "phone",
        link: "202-643-5685"
    }
},{
    companyImage: "http://massnonprofitnet.org/wp-content/uploads/job_listings/BW-Logo.jpg",
    companyName: "Craftsman technology group",
    missionStatement: "05/02/2019 7:00 pm to 10:00 pm",
    neededSkills: ["tech","hand","money","general"],
    donate: "https://www.wcrf.org/int/donate",
    location: "192 South Street, Boston, MA 02111",
    bestFormOfContact:{
        form: "email",
        link: "info@craftsmantech.com"
    }
},{
    companyImage: "https://www.claconnect.com/-/media/cla-image-repository/logos/cliftonlarsonallen.png",
    companyName: "Clifton Larson Allen",
    missionStatement: "05/05/2019 7:00 pm to 10:00 pm",
    neededSkills: ["money","general"],
    donate: "https://www.wcrf.org/int/donate",
    location: "Boston, Ma",
    bestFormOfContact:{
        form: "phone",
        link: "1-888-529-2648."
    }
},{
    companyImage: "https://www.rosiesplace.org/site/images/logo_rosiesplace.png",
    companyName: "Rosie's Place",
    missionStatement: "05/10/2019 7:00 pm to 10:00 pm",
    neededSkills: ["tech","hand","general"],
    donate: "https://secure2.convio.net/rsp/site/Donation2;jsessionid=00000000.app212a?1400.donation=form1&df_id=1400&NONCE_TOKEN=0024BF735F7F3D7174AA650687E9F25E",
    location: "889 Harrison Ave, Boston, MA",
    bestFormOfContact:{
        form: "email",
        link: "webmaster@rosiesplace.org"
    }
},{
    companyImage: "https://www.childrenacrossamerica.org/wp-content/uploads/small-logo-transparent.png",
    companyName: "Children Across America",
    missionStatement: "05/21/2019 7:00 pm to 10:00 pm",
    neededSkills: ["hand","money","general"],
    donate: "https://www.childrenacrossamerica.org/how-you-can-help/donate/",
    location: "23 Pine Street, Milford, MA",
    bestFormOfContact:{
        form: "email",
        link: "info@childrenacrossamerica.org"
    }
},{
    companyImage: "https://remineralize.org/wp-content/themes/trades/img/rte_logo_dark2-byline.png",
    companyName: "Remineralize the Earth",
    missionStatement: "05/30/2019 7:00 pm to 10:00 pm",
    neededSkills: ["money","general"],
    donate: "https://www.kindest.com/campaign/10",
    location: "152 South Street, Northampton, MA",
    bestFormOfContact:{
        form: "email",
        link: "jcampe@remineralize.org"
    }
},{
    companyImage: "http://anikefoundation.org/wp-content/uploads/2014/09/cropped-cropped-anikefoundation_logo02_test2.jpg",
    companyName: "Anike foundation",
    missionStatement: "06/01/2019 7:00 pm to 10:00 pm",
    neededSkills: ["tech","general"],
    donate: "http://anikefoundation.org/index.php/ways-to-give/",
    location: "435 West Boylston, MA",
    bestFormOfContact:{
        form: "email",
        link: "contact@anikefoundation.org"
    }
},{
    companyImage: "https://cdn0.handsonconnect.org/0005/images/Boston%20Cares%20color%20high%20res%20JPG%20(002).jpg",
    companyName: "Align Your Mission to Your Nonprofit Programming",
    missionStatement: "06/05/2019 7:00 pm to 10:00 pm",
    neededSkills: ["tech","general","hand"],
    donate: "https://www.bostoncares.org/waystogive",
    location: "90 Canal St #610, Boston, MA 02114",
    bestFormOfContact:{
        form: "email",
        link: "volunteers@bostoncares.org"
    }
},{
    companyImage: "https://static.wixstatic.com/media/b5d1a8_e2950181580844e7a73a6b9ecbd8dfc6~mv2.png/v1/fill/w_364,h_78,al_c,q_80,usm_0.66_1.00_0.01/b5d1a8_e2950181580844e7a73a6b9ecbd8dfc6~mv2.webp",
    companyName: "Boston rescure image",
    missionStatement: "06/10/2019 7:00 pm to 10:00 pm",
    neededSkills: ["tech","hand","money","general"],
    donate: "https://www.servicenetwork.com/olg/bostonrm/Donate.aspx?FormId=21708209-8c40-4933-b92d-c153be995535",
    location: "39 Kingston St, Boston, MA 02111",
    bestFormOfContact:{
        form: "phone",
        link: "(617) 338-9000"
    }
}
];

export default Events;
