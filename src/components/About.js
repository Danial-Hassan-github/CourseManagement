import { useEffect } from "react";

const About=()=>{
    useEffect(()=>{
        document.title="About us";
    },[])
    return(
        <h1>This is about page</h1>
    )
}
export default About;