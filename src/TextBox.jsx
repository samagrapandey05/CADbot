function TextBox(props) {
    const handleCubeClick = ()=>{
        if(props.generatingOutput === false){
            props.setMessages([...props.messages, "Cube"])
        }
    }
    const handleSphereClick = ()=>{
        if(props.generatingOutput === false){
            props.setMessages([...props.messages, "Sphere"])
        }
    }
    return (
      <div className = "textBox">
        <button onClick={handleSphereClick}>Generate a solid sphere.</button>
        <button onClick={handleCubeClick}>Generate a solid cube</button>
      </div>
    )
  }
  
  export default TextBox