import { useState } from "react";

import Seo from "../components/Seo";

export default function About() {
  const [conuter, setCounter] = useState(0);
  console.log("sex");
  return (
    <div>
      <Seo title="About" />
      <h1>hello</h1>

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
