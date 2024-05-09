import { useEffect } from "react";

const Home=()=>{
    useEffect(()=>{
        document.title="Home";
    },[])
    return(
        <h1>This is home page</h1>
    )
}
export default Home;