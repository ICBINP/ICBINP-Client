import { Link } from "react-router-dom"


const Home = (props) => {

    console.log(props)

    return (
        <div>
            <h2>{`Welcome Back, ${props.user.userName}`}</h2>
        <Link to="/home/showcharacters">View My Characters</Link>
        </div>
    )

 
}

export default Home