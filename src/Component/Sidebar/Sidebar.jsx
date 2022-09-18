import Profile from "../Profile/Profile"
import { Link } from "react-router-dom"
import "./Sidebar.css"

export default function Sidebar () {
    return (
        <div id="sidebar">
            <div className="d-flex justify-content-center fixed">
                <div className="my-5 ">
                <Profile/>
                <div className="my-5">
                    <Link to="Home" style={{textDecoration : 'none', color : "white"}}><div className="nav-item py-2 ">Home</div></Link>
                    <Link to="About" style={{textDecoration : 'none', color : "white"}}><div className="nav-item py-2">About</div></Link>
                    <Link to="Experience" style={{textDecoration : 'none', color : "white"}}><div className="nav-item py-2">Experience</div></Link>
                    <Link to="Skill" style={{textDecoration : 'none', color : "white"}}><div className="nav-item py-2">Skill</div></Link>
                    <Link to="Interest" style={{textDecoration : 'none', color : "white"}}><div className="nav-item py-2">Interest</div></Link>
                    <Link to="Awards" style={{textDecoration : 'none', color : "white"}}><div className="nav-item py-2">Awards</div></Link>
                </div>
                </div>
            </div>
        </div>
    )
}