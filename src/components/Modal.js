import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
const modal = (props) => {
  return (
    <Fragment>
        <form>
            <input>props.title</input>
            <input>props.duration</input>
            <input>props.description</input>
        </form>
    </Fragment>
  );
};
export default modal;