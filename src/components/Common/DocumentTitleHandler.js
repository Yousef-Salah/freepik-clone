import { useEffect } from "react";

const DocumentTitleHandler = (props) => {

    useEffect(() => {
        document.title = `Seepik | ${props.pageTitle}`;
    }, [])

    return(<></>);
}

export default DocumentTitleHandler;