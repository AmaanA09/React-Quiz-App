import { useEffect, useState } from "react"
import AdminNavbar from "../../component/AdminNavbar"
import SideBar from "../../component/SideBar"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserTestRequest } from "../../store/userTest/userTestAction"
import { Link } from "react-router"

const Users = ()=>{
    const [sideBar , setSideBar] = useState(true)
    const userTest = useSelector((state)=>state.userTest.userTest)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchUserTestRequest())
    },[dispatch])

    return(
        <>
        <section>
            <AdminNavbar sideBar={sideBar} setSideBar={setSideBar}/>
            <div id="admin-users">
                {sideBar && <SideBar/>}
                <div className="translate-from-top" style={sideBar  ? {marginLeft : '220px'} : {marginLeft : '20px'}}>
                <table id="users-table">
                    <thead>
                    <tr>
                        <th>Sr.No</th>
                        <th>Users Name</th>
                        <th>Users Email</th>
                        <th>No.Of Test Given</th>
                        <th>Scores</th>
                        <th>View Test List</th>
                    </tr>
                    </thead>
                    {userTest?.map((user , index)=>(
                        <tbody key={index}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.tests.length}</td>
                            <td>{user.score}</td>
                            {/* <td><Link to={`/usertestlist?name=${user.name}&email=${user.email}&index${index}`}>View</Link></td> */}
                            <td><Link to={`/userHistory/${index}/${user.name}/${user.email}`}>View</Link></td>
                        </tr>
                    </tbody>
                    ))}
                </table>
                </div>
            </div>
        </section>
        </>
    )
}
export default Users