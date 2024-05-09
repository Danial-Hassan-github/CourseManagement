import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import Home from "./Home";
import Show from "./Show";
import Add from "./Add";
import Search from "./Search";
import About from "./About";
import modal from "./Modal";
const Content=()=>{
    return(
            <div className="col-md-9 text-center" >
            <Routes>
            <Route path='/' element={< Home />} exact></Route>
	        <Route path='/add' element={<Add/>} exact></Route>
            <Route path='/show' element={<Show/>} exact></Route>
	        <Route path='/search' element={< Search />} exact></Route>
            <Route path='/about' element={< About />} exact></Route>
            </Routes>
        </div>
    )
}
export default Content;