import { Outlet } from "react-router-dom"
import Footer_Client from "../Client/Footer_Client"
import Header_Client from "../Client/Header_Client"
import '../styles/Client/Home/Home.scss'


const Client = () => {
    return (<>
        <Header_Client />
        <Outlet />
        <Footer_Client />
    </>)
}

export default Client