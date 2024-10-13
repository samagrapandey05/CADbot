import { useState } from 'react'

function SignUp(props) {
    const [username, setusername] = useState("")
    const [pwd, setPwd] = useState("")

    const handleUserSubmit = (e) => {
        e.preventDefault()
        props.setCurUser(username)
    }
    const handlePwdSubmit = (e) => {
        e.preventDefault()
        props.setLoggedIn(true)
    }
    const cancelUsername = () => {
        setusername("")
        props.setCurUser(null)
    }
    return (
        <div className="SignUpBody">
            <h1 className="SignUpBodyTitle">Login or Sign up by entering username and password below</h1>
          
            { (props.curUser == null) ?
            <form onSubmit={handleUserSubmit} className='loginForm'>
                <label className='loginLabel'> Username: 
                    <input type = "text" value={username} onChange={(e)=>setusername(e.target.value)} className='textbox'/>
                </label>
                <input type='submit' className='loginSubmit'/>
            </form>
            :
            <div className='divLoginPwd'>
                <form onSubmit={handlePwdSubmit} className='loginForm'>
                    <label className='loginLabel'> Password:
                        <input type = "text" value = {pwd} onChange={(e)=>setPwd(e.target.value)} className='textbox'/>
                    </label>
                    <input type='submit' className='loginSubmit'/>
                </form>
                <button onClick={cancelUsername} className='loginCancel'>Cancel</button>
            </div>
            }
        </div>
        
    )
  }
  
  export default SignUp