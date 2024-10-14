import { useNavigate } from "react-router-dom";
function Header(props) {
  const navigate = useNavigate(); 
  const routeSignup = () =>{ 
      const path = '/cadbot'; 
      navigate(path);
  }
  const logOut = ()=>{
      props.setLoggedIn(false)
      props.setCurUser(null)
  }
  const routeAbout = () =>{ 
    console.log("Into about")  
    const path = '/about';
    console.log(path)
    navigate(path);
  }
  const routeHome = () =>{ 
      const path = '/'; 
      navigate(path);
  }
  return (
    <div className = "Header">
      <button className="HeaderButtons"  onClick={routeHome} id = "Logo">
        CADBot v1
      </button>

      <div className="headerRight">
      <button className="HeaderButtons" onClick={routeSignup}>
        Generate Files
      </button>
      <button className="HeaderButtons" onClick={routeAbout}>
        About   
      </button>

      {
      (props.loggedIn === false) ? 
          <button className="HeaderButtons" onClick={routeSignup}>
              Sign Up/Log In
          </button>
          :
          <button className="HeaderButtons" onClick = {logOut}>
              Log Out
          </button>
      }
      </div>
    </div>
  )
}
  
  export default Header