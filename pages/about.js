import { useState } from "react";
import NavBar from "../components/NavBar";

export default function About() {
  const [conuter, setCounter] = useState(0);
  console.log("sex");
  return (
    <div>
      <h1>hello</h1>
      <NavBar></NavBar>
      <style jsx>{`
        .noneUnderLine {
          text-decoration: none;
          color: black;
        }
        .active {
          color: blue;
        }
      `}</style>
    </div>
  );
}
