function Message(props) {
    return (
    <div className="shell">
      <div className = "messageContainer">
        {props.type === "sphere" ? <div className="messageText">Create a sphere.</div>: <div className="messageText">Create a cube.</div>}
      </div>
      </div>
    )
  }
  
  export default Message