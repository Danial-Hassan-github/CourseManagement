import { Button, } from 'reactstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import base_url from './Api_url';
const Add=()=>{
    useEffect(()=>{
        document.title="Add New Course";
    },[])
    const [course,setCourse]=useState();
    const formHandler=(e)=>{
        e.preventDefault()
        submitData(course)
        console.log(course)
    }
    const submitData=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response.data)
                alert("data added successfully")
            },
            (error)=>{
                console.log(error)
                alert("An error occurred")
            }
        )
    }
    return(
        <div>
            <form onSubmit={formHandler} method='post'>
            <input className="form-control mb-2" placeholder="Enter Course Title" required="required" id='course_title' name='course_title' onChange={(e)=>setCourse({...course,course_title:e.target.value})} />
            <textarea className="mb-2 form-control" rows='5' placeholder="Enter Course Description" id='course_description' name='course_description' onChange={(e)=>setCourse({...course,course_description:e.target.value})} />
            <input className="form-control mb-2" placeholder="Enter Course Duration" required="required" id='course_duration' name='course_duration' onChange={(e)=>setCourse({...course,course_duration:e.target.value})} />
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}
export default Add;