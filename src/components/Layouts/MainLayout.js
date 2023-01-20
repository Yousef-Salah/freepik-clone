import Footer from "./Footer/Footer"
import Navbar from "./Navbar/Navbar"

const MainLayout = (props) => {
    return(
        <>
            <Navbar page={props.page} />
            {props.children}
            <Footer />
        </>
    )
}

export default MainLayout;