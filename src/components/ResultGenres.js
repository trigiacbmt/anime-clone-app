import React, { useEffect } from "react";
import useHttp from "../hooks/use-http";
import { getSearchAnime } from "../lib/api";
import Card from "../utilis/Card";

function ResultGenres(props) {

  const {
    sendRequest,
    status,
    data: anime,
    error,
  } = useHttp(getSearchAnime, true);
  useEffect(() => {
    sendRequest(props.params);
  }, [sendRequest, props.params]);

  let content;

  if (status === "pending") {
    content = <div>Loading</div>;
  }

  if (error) {
    content = <div>{error}</div>;
  }

  if (status === "completed") {
    content = anime.documents?.slice(0, 16)
      ?.map((ani) => (
        <Card
          src={ani.cover_image}
          description={ani.titles.en || ani.titles.jp || ani.titles.it}
          name={ani.titles.en}
          id={ani.id}
          score={ani.score}
          year={ani.season_year}
          key={ani.id}
        />
      ));
  }
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="flex flex-col">
        <h1 className=" text-yellow-300 w-fit border border-gray-900 rounded-md p-2 text-center my-3 mx-4">
          {props.genres}
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">{content}</div>
      </div>
    </div>
  );
}

export default ResultGenres;
