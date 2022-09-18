import { Outlet } from "react-router-dom"
import Sidebar from "../Component/Sidebar/Sidebar"

export default function LandingPage () {
    return (
        <>
        <div className="">
            <div className="d-flex">
                <div><Sidebar/></div>
                <div className="ms-5 pt-5"><Outlet/></div>
            </div>
        </div>
        </>
    )
}