import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import useHttp from "../hooks/use-http";
import { getSearchAnime } from "../lib/api";
import { user } from "../slices/animeSlices";

import { useCollection } from "react-firebase-hooks/firestore";

function AninmeDetail() {
  const params = useParams();
  const userEmail = useSelector(user);
  console.log(userEmail);
  const [bookmarkUser, loading] = useCollection(
    userEmail.userEmail &&
      db.collection("user").doc(userEmail.userEmail).collection("bookmark")
  );
  const { id } = params;
  const {
    sendRequest,
    status,
    data: anime,
    error,
  } = useHttp(getSearchAnime, true);
  useEffect(() => {
    sendRequest(`/${id}`);
  }, [sendRequest, id]);
  if (status === "pending") {
    return <div>Loading...</div>;
  }

  function addBookmark() {
    if (anime.bookmarked === false) {
      anime.bookmarked = true;
    }
    db.collection("user").doc(userEmail.userEmail).collection("bookmark").add({
      anime,
    });
  }

  function deleteBookmark() {
    const index = bookmarkUser?.docs.findIndex(doc => doc.data().anime.id.toString() === id)
    console.log(index)
    const indexId = bookmarkUser?.docs[index].id
    console.log(indexId)
    db.collection("user").doc(userEmail.userEmail).collection("bookmark").doc(indexId).delete()
  }
  return (
    <div className="max-h-full h-screen">
      <h1 className="uppercase text-white text-3xl font-bold m-5">
        {anime.titles.en}
      </h1>
      <div className="flex flex-col mx-3">
        <div className="flex gap-4 items-center w-auto max-w-3xl">
          <img
            src={anime.cover_image}
            className="max-h-70 object-fill"
            alt={anime.titles.en}
          />
          <div className="space-y-3 flex flex-col grow ">
            <h1 className=" text-md text-yellow-300 uppercase font-bold ">
              {anime.titles.en}
            </h1>
            <div className="bg-gray-700 space-y-3 p-2">
              <p className="font-bold text-gray-300">
                Trạng thái:{" "}
                <span className="p-1 bg-yellow-500 text-black font-normal rounded-md">
                  {anime.status === 1 ? "Hoàn thành" : "Chưa hoàn thành"}
                </span>
              </p>
              <p className="font-bold text-gray-300">
                Thể loại:{" "}
                <span>{anime.genres.slice(0, 4).map((el) => `${el} `)}</span>
              </p>
              <p className="font-bold text-gray-300">
                Năm sản xuất: <span>{anime.season_year}</span>
              </p>
              <p className="font-bold text-gray-300">
                Score:{" "}
                <span className="p-1 bg-yellow-500 text-black font-normal rounded-md">
                  {anime.score}
                </span>
              </p>
              <p className="font-bold text-gray-300">
                Episoes: <span>{anime.episodes_count}</span>
              </p>
            </div>
            <div className="bg-gray-700 space-x-2 p-2  flex items-center">
              <button className="p-3 bg-red-500 rounded-md">Xem anime</button>
              {bookmarkUser?.docs.some(
                (doc) => doc.data().anime?.id.toString() === id
              ) === false ? (
                <button
                  onClick={addBookmark}
                  className="p-3 bg-green-500 rounded-md"
                >
                  Bookmark
                </button>
              ) : (
                <button
                  onClick={deleteBookmark}
                  className="p-3 bg-green-500 rounded-md"
                >
                  Delete Bookmark
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="bg-gray-700 p-2 max-w-3xl">
          <h1 className="text-xl text-yellow-300 font-bold">Nội dung</h1>
          <p>
            {anime.descriptions.en ? anime.descriptions.en : "Đang cập nhật"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AninmeDetail;
