import { useNavigate } from "react-router-dom";
function Home(props) {
    let navigate = useNavigate(); 
    const routeSignup = () =>{ 
        let path = '/cadbot'; 
        navigate(path);
    }
    return (

      <div className="homeBody">
        <h1 className="homeBodyTitle">From Thoughts to STL Files, in Seconds</h1>
        {
        (props.loggedIn === false) ? 
            <button className="homeBodyButton" onClick={routeSignup}>
                Log In or Sign Up to Start
            </button>
            :
            <button className="homeBodyButton" onClick={routeSignup}>
                Generate Files
            </button>
        }
      </div>
      
    )
  }
  
  export default Home