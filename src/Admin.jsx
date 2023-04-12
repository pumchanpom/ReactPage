import { useContext, useState } from "react"
import { Context } from "./UserContext"


const Admin = () => {
    // You have to get all user from fetchData() and display as table html.
    const { fetchData } = useContext(Context)
    // example of fetchData() usage
    // const data = fetchData()
    // data will return array of user object, otherwise empty array
    // example of user Object show below
    // {
    //     id: 0, 
    //     username: 'example',
    //     fullname: 'example',
    //     organization: 'example'
    // }

    const data = fetchData()

    const tableData = data.map(item => 
        (<tr>
            <td>{item.id}</td>
            <td>{item.fullname}</td>
            <td>{item.organization}</td>
        </tr>)
    )
    
    return (
        <div>
            {/* this is example of mapping array of object to html. */}
            <h1>Members</h1>
            <table style={{textAlign: 'left'}}>
                <tr>
                    <th>Id</th>
                    <th>Full Name</th>
                    <th>Organization</th>
                </tr>
                {tableData}
            </table>
        </div>
    )
}

export default Admin