import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import DocumentTitleHandler from "../Common/DocumentTitleHandler";
import { useEffect } from "react";

const MainLayout = (props) => {
    return(
        <>
            <Navbar page={props.page} />
            {props.children}
            <DocumentTitleHandler pageTitle={props.pageTitle} />
            <Footer />
        </>
    )
}

export default MainLayout;