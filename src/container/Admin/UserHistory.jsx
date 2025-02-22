import { useParams } from "react-router"
import AdminNavbar from "../../component/AdminNavbar"
import SideBar from "../../component/SideBar"
import { Link } from "react-router"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUserTestRequest } from "../../store/userTest/userTestAction"

const UserHistory = ()=>{
    const [sideBar , setSideBar] = useState(true)
    const {index , name , email} = useParams()
    const userTest = useSelector((state)=> state.userTest.userTest)
    const dispatch = useDispatch()

    useEffect(()=>{
         dispatch(fetchUserTestRequest())
    },[dispatch])
    const uniqueUserTest = userTest[index]?.tests
    console.log(uniqueUserTest)

    return(
        <>
        <section>
            <AdminNavbar sideBar={sideBar} setSideBar={setSideBar}/>
            <div id="admin-users">
                {sideBar && <SideBar/>}
                <div className="translate-from-top" style={sideBar  ? {marginLeft : '220px'} : {marginLeft : '20px'}}>
                    <h2 style={{fontSize:"24px",color:"#495057"}}>{name} | {userTest[index].email}</h2>
                <table id="users-table">
                    <thead>
                    <tr>
                        <th>Attempt Test</th>
                        <th>Date</th>
                        <th>Score</th>
                        {/* <th>Time Taken</th> */}
                        <th>View Test</th>
                    </tr>
                    </thead>
                    {uniqueUserTest.map((user , index)=>(
                        <tbody key={index}>
                        <tr>
                            <td>Attempt {index+1}</td>
                            <td>{user.date || "Not Attempt"}</td>
                            {/* <td>{user.}</td> */}
                            <td>{user.marks || "Not Attempt"}</td>
                            <td><Link to={`/userTestList/${index}/${name}/${email}`}>View</Link></td>
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
export default UserHistory
