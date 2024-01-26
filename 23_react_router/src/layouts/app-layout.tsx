import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar"

export const AppLayout = () => {
    return <>
        <Navbar/>
        <Outlet/>
    </>
}