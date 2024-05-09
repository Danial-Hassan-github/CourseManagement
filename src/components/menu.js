import { ListGroup} from "reactstrap";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Content from "./content";
const Menu = () => {
  return (
    <div className="row">
      <BrowserRouter>
        <div className="col-md-3">
          <ListGroup>
            <Link className="list-group-item list-group-item-action" to="/">
              Home
            </Link>
            <Link className="list-group-item list-group-item-action" to="/search">
              Search Course
            </Link>
            <Link className="list-group-item list-group-item-action" to="/add">
              Add Course
            </Link>
            <Link className="list-group-item list-group-item-action" to="/show">
              show Courses
            </Link>
            <Link className="list-group-item list-group-item-action" to="/about">
              About
            </Link>
          </ListGroup>
        </div>
        <Content/>
      </BrowserRouter>
    </div>
  );
};
export default Menu;
