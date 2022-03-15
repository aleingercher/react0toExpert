import ReactDOM from "react-dom";
import Documented from "./components/Documented";
import { GifExpertApp } from "./GifExpertApp";
import "./index.css";

ReactDOM.render(
  <>
    <GifExpertApp />,
    <Documented size={4}/>,
  </>,
  document.getElementById("root")
);
