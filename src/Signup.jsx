import Layout from "./Layout"
import { Context } from "./UserContext"
import { useContext, useState } from "react"

const Signup = () => {
    // You have to pass data to signup() function to successful registration.
    const { signup } = useContext(Context)
    // example of signup with button onClick event listerner.
    // <button onClick={() => signup({
    //     username: 'mock',
    //     password: 'mock',
    //     fullname: 'mock',
    //     organization: 'mock'
    // })}>Text</button>

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [fullname, setFullname] = useState();
    const [organization, setOrganization] = useState();

    return (
        <Layout>
            <div>
                <form>
                    <div>Username</div>
                    <input type="text" onChange={event => setUsername(event.target.value)} placeholder="Username"></input><br/><br/>
                    <div>Password</div>
                    <input type="password" onChange={event => setPassword(event.target.value)} placeholder="Password"></input><br/><br/>
                    <div>Fullname</div>
                    <input type="text" onChange={event => setFullname(event.target.value)} placeholder="Fullname"></input><br/><br/>
                    <div>Organization</div>
                    <input type="text" onChange={event => setOrganization(event.target.value)} placeholder="Organization"></input><br/><br/>
                    <button onClick={() => signup({ username: username, password: password, fullname: fullname, organization: organization })}>Save</button>
                </form>
            </div>
        </Layout>
    )
}

export default Signup