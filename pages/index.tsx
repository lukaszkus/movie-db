import { useState } from "react";
import { useFetchMovies } from "@/api/fetchHooks";

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
      <Hero />
      <Grid />
      <Card />
      <Spinner />
    </main>
  );
};

export default Home;
