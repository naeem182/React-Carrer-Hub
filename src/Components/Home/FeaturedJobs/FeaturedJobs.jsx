import { useEffect } from "react"
import { useState } from "react"
import Job from "./Job"


const FeaturedJobs = () => {
    const [job, setjob] = useState([])
    const [datalength, setdatalength] = useState(4)
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setjob(data))


    }, [])

    return (
        <div>
            <div className=" text-center">
                <h2 className=" text-5xl ">Featured Jobs:{job.length}</h2>
                <p >Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-4 container mx-auto">
                {
                    job.slice(0, datalength).map((job) => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={datalength === job.length ? "hidden" : "text-center"} >
                <button onClick={() => setdatalength(job.length)} className="btn btn-primary mt-2 text-center" >Show All Jobs</button>
            </div>
        </div>
    )
}

export default FeaturedJobs
