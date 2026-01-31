import React from "react";
import { useParams } from "react-router-dom";
import ClickableButton from "../Components/Button";
function UserPage() {
    const {name} = useParams();
    return(
        <>
        <h1> Hi {name}! good to see you</h1>
        <h2> click the below button i will introduce my  employees</h2>
        <ClickableButton/>
        </>
    )
}

export default UserPage;