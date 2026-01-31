import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Hook1(){
    const[countLikes, setCountLikes] = useState(10);
    useEffect(() => {
        console.log("component rendered");
    }, [])
    useEffect(() => {
        console.log("Likes Updated");
    }, [countLikes])

    const[videoreview, setVideoReview] = useState("");
    return(
        <>
        <h1>This is usestate hook</h1>
        <h2>Likes Count: {countLikes}</h2>
        <button onClick = {() => setCountLikes(countLikes+1)}>Like</button>
        {
            countLikes<=40?<h2>your reels are okok</h2>:
        <h2>your reels are super</h2>
        }

        <form action="">
        <input type = "text" id = "review" value = {videoreview}
        onChange = {(e) =>{
            console.log(e);
            console.log(e.target.value);
            setVideoReview(e.target.value);
        }}/>
        <label htmlFor= "review"> write the review</label>
        
        </form>
        
            
        
        
        
        
        </>
    );
}
export default Hook1;