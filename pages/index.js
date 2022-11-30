import NavBar from "../components/NavBar";
import Head from "next/head";
import Seo from "../components/Seo";
import { useEffect, useState } from "react";

const API_KEY = "948fbf80d7d0ef0ef8495a969ddf0a6b";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async () => {
      const data = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY})`
        )
      ).json();
      console.log(data);
    };
  }, []);
  return (
    <div>
      <Seo title="Home" />
      <h1>home</h1>
    </div>
  );
}
