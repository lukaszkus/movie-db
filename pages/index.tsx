import { useState } from "react";
//Fetch hook
import { useFetchMovies } from "@/api/fetchHooks";
//Config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "@/config";
//Components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import Spinner from "@/components/Spinner";

const Home = () => {
  const [query, setQuery] = useState("");

  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);

  console.log(data);

  return (
    <main className="relative h-screen overflow-y-scroll">
      <Header setQuery={setQuery} />
      {!query && data && data.pages ? (
        <Hero
          imgUrl={
            data?.pages[0].results[0]?.backdrop_path
              ? IMAGE_BASE_URL +
                BACKDROP_SIZE +
                data?.pages[0].results[0]?.backdrop_path
              : "/no-img.jpg"
          }
          title={data?.pages[0].results[0].title}
          text={data?.pages[0].results[0].overview}
        />
      ) : null}

      <Grid />
      <Card />
      <Spinner />
    </main>
  );
};

export default Home;
