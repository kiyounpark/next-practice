import { useState } from "react";

import Seo from "../components/Seo";

export default function About() {
  const [conuter, setCounter] = useState(0);

  return (
    <div>
      <Seo title="About" />
      <h1>hello</h1>
    </div>
  );
}
