import { Link } from "react-router-dom"


const Home = (props) => {

    console.log(props)

    return (
        <div>
            Home
        <Link to="/home/showcharacters">Hello Pineapple</Link>
        </div>
    )

 
}

export default Home