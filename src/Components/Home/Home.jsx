import CategoryList from "../../CategoryList/CategoryList"
import AppliedJobs from "../AppliedJobs/AppliedJobs"
import Banner from "../Banner/Banner"
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs"


const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    )
}

export default Home
