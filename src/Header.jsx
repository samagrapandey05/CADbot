import { useNavigate } from "react-router-dom";
function Header(props) {
  let navigate = useNavigate(); 
  const routeSignup = () =>{ 
      let path = '/cadbot'; 
      navigate(path);
  }
  const logOut = ()=>{
      props.setLoggedIn(false)
      props.setCurUser(null)
  }
  const routeAbout = () =>{ 
      let path = '/about'; 
      navigate(path);
  }
  const routeHome = () =>{ 
      let path = '/'; 
      navigate(path);
  }
  return (
    <div className = "Header" onClick={routeHome}>
      <button className="HeaderButtons">
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