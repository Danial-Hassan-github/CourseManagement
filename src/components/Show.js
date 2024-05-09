import { Fragment, useEffect, useState } from "react";
import { Table } from "antd";
import { Button, ListGroup } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import base_url from "./Api_url";
import App from "../App";
import Modal from './Modal'
import { Link, BrowserRouter,Route,Routes } from "react-router-dom";
import Search from "./Search";
import Content from "./content";
const Show = (props) => {
  useEffect(() => {
    document.title = "Show All Courses";
  }, []);
  const [courses, setCourses] = useState([]);
  //get all courses to display
  const getCourses = () => {
    axios.get("http://localhost:8080/courses").then((response) => {
      console.log(response.data);
      setCourses(response.data);
      console.log(courses);
    });
  };
  useEffect(() => {
    getCourses();
  }, []);
  //function for deleting a course by id
  function deleteCourse(id) {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        setCourses(courses.filter((c) => c.course_id != id));
      },
      (error) => {
        alert("Didn't deleted successfully");
      }
    );
  }
  //function to update course details
  function updateCourse(data) {
    axios.put(`${base_url}/courses`, data).then(
      (response) => {
        alert("updated successfully");
      },
      (error) => {
        alert("something went wrong");
      }
    );
  }
  return (
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
          {courses.map((data) => (
            <Fragment>
              <tr>
                <td>{data.course_title}</td>
                <td>{data.course_duration}</td>
                <td>{data.course_description}</td>
                <td>
                <Button
                    onClick={() => updateCourse(data)}
                    type="button"
                    color="warning"
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => deleteCourse(data.course_id)}
                    type="submit"
                    color="danger"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Show;
