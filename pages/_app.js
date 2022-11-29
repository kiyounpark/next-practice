import NavBar from "../components/NavBar";

export default function App({ Component }) {
  return (
    <>
      <NavBar></NavBar>
      <Component></Component>
    </>
  );
}
