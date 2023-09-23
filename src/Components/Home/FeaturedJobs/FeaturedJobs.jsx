import { useEffect } from "react"
import { useState } from "react"
import Job from "./Job"


const FeaturedJobs = () => {
    const [job, setjob] = useState([])
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
            <div className="grid grid-cols-2 gap-4">
                {
                    job.map((job) => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    )
}

export default FeaturedJobs
