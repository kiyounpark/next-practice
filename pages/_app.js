import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component }) {
  return (
    <>
      <NavBar></NavBar>
      <Component></Component>
    </>
  );
}
