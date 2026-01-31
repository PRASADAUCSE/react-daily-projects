import React from "react";

function EmployeeDetails({name, role, image, department}){  
    return(
        <>
        <h2>name: {name}</h2>
        <h3>Role: {role}</h3>
        
        <h2>Department: {department}</h2>
        <img src = {image} alt= {name}/>
        
        
        </>
    )
}
export default EmployeeDetails