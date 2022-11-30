import NavBar from "../components/NavBar";
import Head from "next/head";
import Seo from "../components/Seo";
import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "948fbf80d7d0ef0ef8495a969ddf0a6b";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((결과) => {
        console.log(결과.data.results);
        setMovies(결과.data.results);
      })
      .catch(() => {
        console.log("실패함");
      });
  }, []);
  return (
    <div>
      <Seo title="Home" />
      <article className="grid">
        {movies.map((e, index) => {
          return (
            <div key={index}>
              <img
                width={"100%"}
                src={`https://image.tmdb.org/t/p/w500/${e.poster_path}`}
              ></img>
              <h4>{e.original_title}</h4>
            </div>
          );
        })}
      </article>
      <style jsx>
        {`
          .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          .grid img {
            border-radius: 12px;
          }
          .grid img:hover {
            transform: scale(1.05) translateY(-10px);
          }
          .grid h4 {
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}
