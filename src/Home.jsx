import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import opencascade from "../node_modules/opencascade.js/dist/opencascade.full.js"
import opencascadeWasm from "../node_modules/opencascade.js/dist/opencascade.full.wasm?url"
import { visualizeShapes } from "./visualize.js"; 

function Home(props) {
    const [modelURL, setModelURL] = useState(null)
    useEffect(()=>{
        opencascade({locateFile: () => opencascadeWasm,}).then((oc)=>{
            const box = new oc.BRepPrimAPI_MakeBox_2(5, 5, 5).Shape();
            //const torus = new oc.BRepPrimAPI_MakeTorus_1(5, 3).Shape();
            //const cone = new oc.BRepPrimAPI_MakeCone_1(radius, null, height).Shape();
            const res = visualizeShapes(oc, box);
            setModelURL(res);
            console.log(res)
        })
    }, [])
    const handleMouseMove = (e) => {
        const mouse = [e.clientX, e.clientY];
		const modelViewer = document.getElementById("homeViewer")
		modelViewer.cameraOrbit = `${mouse[0]}deg ` + `${mouse[1] + 45}deg ` + `"110%"`
    }
    const navigateHome = useNavigate(); 
    const routeSignup = () =>{ 
        const pathCadbot = '/cadbot'; 
        navigateHome(pathCadbot);
    }
    return (
      <div className="homeBody">
        <div className="homeCAD">
            <model-viewer src={modelURL} camera-controls enable-pan id="homeViewer"/>
        </div>
        <h1 className="homeBodyTitle">From Thoughts to CAD Files, in Seconds</h1>
      {/*<div className="homeBody">
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
    </div>*/}
      </div>
    )
  }
  
  export default Home