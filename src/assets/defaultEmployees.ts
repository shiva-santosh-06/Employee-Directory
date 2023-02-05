import { Employee } from "../contexts/EmployeeListContext";
import angela from './images/angela.jpg';
import anthony from './images/anthony.jpg';
import franklin from './images/franklin.jpg';
import helen from './images/helen.jpg';
import jonathon from './images/jonathon.jpg';
import olivia from './images/olivia.jpg';
import robert from './images/robert.jpg';
import tami from './images/tami.jpg';

export const defaultEmployees: Employee[] = [
  {
    first_name: "Anthony",
    last_name: "Morris",
    preferred_name: "Anthony Morris",
    email: "anthony.m@egmail.com",
    job_title: "SharePoint Practice Head",
    office: "Seattle",
    department: "IT Department",
    phone_number: "9123443219",
    skype_id: "anthony_morris",
    image: anthony
  },
  {
    first_name: "Helen",
    last_name: "Zimmerman",
    preferred_name: "Helen Zimmerman",
    email: "helen.z@egmail.com",
    job_title: "Operations Manager",
    office: "Sydney",
    department: "IT Department",
    phone_number: "1813443219",
    skype_id: "helen_zim",
    image: helen
  },
  {
    first_name: "Jonathon",
    last_name: "Smith",
    preferred_name: "Jonathon Smith",
    email: "jonny_smith@egmail.com",
    job_title: "Product Manager",
    office: "Singapore",
    department: "IT Department",
    phone_number: "2113643219",
    skype_id: "jonny_smith",
    image: jonathon
  },
  {
    first_name: "Tami",
    last_name: "Hopkins",
    preferred_name: "Tami Hopkins",
    email: "tami.h@egmail.com",
    job_title: "Lead Engineer - Dot Net",
    office: "Singapore",
    department: "IT Department",
    phone_number: "2263643218",
    skype_id: "tami_hopkins",
    image: tami
  },
  {
    first_name: "Franklin",
    last_name: "Humark",
    preferred_name: "Franklin Humark",
    email: "franklin.h@egmail.com",
    job_title: "Network Engineer",
    office: "Sydney",
    department: "IT Department",
    phone_number: "7145643218",
    skype_id: "franky_humark",
    image: franklin
  },
  {
    first_name: "Angela",
    last_name: "Bailey",
    preferred_name: "Angela Bailey",
    email: "angela@egmail.com",
    job_title: "Talent Manager Jr.",
    office: "Hyderabad",
    department: "HR Department",
    phone_number: "6169143214",
    skype_id: "angela_bailey",
    image: angela
  },
  {
    first_name: "Robert",
    last_name: "Mitchell",
    preferred_name: "Robert Mitchell",
    email: "robert.m@egmail.com",
    job_title: "Software Engineer",
    office: "Seattle",
    department: "IT Department",
    phone_number: "2345143211",
    skype_id: "robert_mitchell",
    image: robert
  },
  {
    first_name: "Olivia",
    last_name: "Watson",
    preferred_name: "Olivia Watson",
    email: "olivia.w@egmail.com",
    job_title: "UI Designer",
    office: "Hyderabad",
    department: "UX Department",
    phone_number: "9876567812",
    skype_id: "olivia_watson",
    image: olivia
  }
]