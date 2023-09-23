// "id": 1,
// "logo": "https://i.ibb.co/PzrbTxh/google-1-1-1.png",
// "job_title": "Technical Database Engineer",
// "company_name": "Google LLC",
// "remote_or_onsite": "Remote",
// "location": "Dhaka, Bangladesh",
// "job_type": "Full Time",
// "salary": "100k-150k",
// "job_description": " A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.",
// "job_responsibility": "Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.",
// "educational_requirements": "Bachelor degree to complete any reputational university.",
// "experiences": "2-3 Years in this field.",
// "contact_information": {
//   "phone": "01750-00 00 00",
//   "email": "info@gmail.com",
//   "address": "Dhanmondi 32, Sukrabad Dhaka, Bangladesh"

import { IoLocationOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, salary, job_type } = job
    return (
        <div className=" p-4 card card-compact  bg-base-100 shadow-xl">
            <figure><img className=" p-4" src={logo} alt="logo" /></figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div>
                    <button className="px-4 py-2 text-[#7E90FE] border-[#7E90FE] border rounded font-extrabold mr-2">{remote_or_onsite}</button>
                    <button className="px-4 py-2 text-[#7E90FE] border-[#7E90FE] border rounded font-extrabold">{job_type}</button>
                </div>
                <div className=" flex my-2">
                    <h2 className=" text-2xl flex"><IoLocationOutline className=" mr-2 pt-2"></IoLocationOutline> {location}</h2>
                    <h2 className=" text-2xl flex ml-4"><BsCurrencyDollar className=" mr-1 pt-2"></BsCurrencyDollar> {salary}</h2>
                </div>
                <div className="card-actions ">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    )
}

export default Job
