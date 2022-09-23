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
                    <Link to="Home" style={{textDecoration : 'none', color : "white"}}><div className="nav-item py-2 fw-semibold">Home</div></Link>
                    <Link to="About" style={{textDecoration : 'none', color : "white"}}><div className="nav-item py-2 fw-semibold">About</div></Link>
                    <Link to="Experience" style={{textDecoration : 'none', color : "white"}}><div className="nav-item py-2 fw-semibold">Experience</div></Link>
                    <Link to="Skill" style={{textDecoration : 'none', color : "white"}}><div className="nav-item py-2 fw-semibold">Skill</div></Link>
                    <Link to="Interest" style={{textDecoration : 'none', color : "white"}}><div className="nav-item py-2 fw-semibold">Interest</div></Link>
                    <Link to="Awards" style={{textDecoration : 'none', color : "white"}}><div className="nav-item py-2 fw-semibold">Awards</div></Link>
                </div>
                </div>
            </div>
        </div>
    )
}