import { useEffect, useState } from 'react'
import Message from './Message'
import Output from './Output'
//import sphere from './sphere-ascii.stl'
//import cube from './cube-ascii.stl'

function Display(props) {
/*     if(props.messages.length * 2 > history.length){
        setHistory([...history, props.messages[props.messages.length-1]])
        props.setGeneratingOutput(true)
        let newCAD = sphere
        if (props.messages[props.messages.length-1] === 'Cube'){
            newCAD = cube
        }
        setHistory([...history, newCAD])
        props.setGeneratingOutput(false)
    }
 */    

    useEffect(
        () => {
            console.log("hello")
            var element = document.getElementById("displayShell");
            console.log(element)
            if(element !== null){
                element.scrollTop = element.scrollHeight;
            }
            
        }, [props.messages]
    );
    return (
      <div className = "displayBackground">
        {props.messages.length > 0 ? 
        <div className='messageList'>
            <h1 className='CADBOT_Title'>CADBOT</h1>
            <div className='displayShell' id = "displayShell">
            
            {props.messages.map((message)=>{
                if (message === "Sphere"){
                    return(
                    <div className='QA_Pairing'>
                    <Message type={"sphere"}/>
                    <Output type={"sphere"}/>
                    </div>)
                }
                else{
                    return(
                    <div className='QA_Pairing'>
                    <Message type={"cube"}/>
                    <Output type={"cube"}/>
                    </div>)
                }
            })}
            </div>
        </div> 
        
        : <h1 className='demo'>Welcome to CADbot Demo Version. Click a button below and generate a corresponding STL file.</h1>}
      </div>
    )
  }
  
  export default Display