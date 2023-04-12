import Layout from "./Layout"
import { useContext, useState } from "react"
import { Context } from "./UserContext"

const Login = () => {
    // You have to pass data to login() function to successful login.
    const { login } = useContext(Context)
    // example of login with button onClick event listerner.
    // <button onClick={() => login({
    //     username: 'mock',
    //     password: 'mock',
    // })}>Text</button>

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        <Layout>
            <div>
                <div>Username</div>
                <input type="text" onChange={handleUsername} placeholder="Username"></input><br/><br/>
                <div>Password</div>
                <input type="password" onChange={handlePassword} placeholder="Password"></input><br/><br/>
                <button onClick={() => login({ username: username, password: password})}>Login</button>
            </div>
        </Layout>
    )
}

export default Login