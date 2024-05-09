import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";
import base_url from "./Api_url";
const Search=()=>{
    useEffect(()=>{
        document.title="Search Course";
    },[])
    const [notFound,setNotFound]=useState();
    const [course,setCourse]=useState({});
    const [id,setId]=useState();
    const searchHandler=(e)=>{
        e.preventDefault();
        searchCourse(id);
    }
    function searchCourse(id){
        axios.get(`${base_url}/courses/${id}`).then(
            (response)=>{
                setCourse(response.data);
            },
            (error)=>{
                setCourse({});
                setNotFound("No Result Found")
            }
        )
    }
    //function for deleting a course by id
  function deleteCourse(id){
    axios.delete(`${base_url}/courses/${id}`).then(
        (response)=>{
            setCourse({});
        },
        (error)=>{
            alert("Didn't deleted successfully")
        }
    )
  }
  //function to update course details
  function updateCourse(data){
    axios.put(`${base_url}/courses`,data).then(
        (response)=>{
            alert("updated successfully")
        },
        (error)=>{
            alert("something went wrong")
        }
    )
  }
  const checkCourse=()=>{
    if (course.course_id!==null) {
        return(
        <Fragment>
        <div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Duration</th>
              <th scope="col">Description</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
          <tr>
                <td >{course.course_title}</td>
                <td >{course.course_duration}</td>
                <td >{course.course_description}</td>
                <td><Button type="submit" color="warning" onClick={()=>updateCourse(course)}>Update</Button></td>
                <td><Button onClick={()=>deleteCourse(course.course_id)} type="submit" color="danger">Delete</Button></td>
            </tr>
          </tbody>
        </table>
        </div>
        </Fragment>
        )
    }else{
        return(
            <Fragment>
                <h1>{notFound}</h1>
            </Fragment>
        )
    }
  }
    return(
        <Fragment>
            <form onSubmit={searchHandler} method='get'>
                <input placeholder="Enter Course title" id="searchId" onChange={(e)=>setId(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
            {
                checkCourse()
            }
        </Fragment>
    )
}
export default Search;