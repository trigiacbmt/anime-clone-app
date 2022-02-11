import React from "react";
import Card from "../utilis/Card";
import {useCollection} from "react-firebase-hooks/firestore"
import { useSelector } from "react-redux";
import { user } from "../slices/animeSlices";
import { db } from "../firebase";

function MyCollections() {
  const userEmail = useSelector(user);
  console.log(userEmail);
  const [bookmarkUser, loading] = useCollection(
    userEmail.userEmail &&
      db.collection("user").doc(userEmail.userEmail).collection("bookmark")
  );
  return (
    <div className="flex h-screen">
      {bookmarkUser?.docs.map((doc) => {
        const anime = doc.data().anime;
        return (
          <Card
            src={anime?.cover_image}
            description={anime?.titles.en || anime?.titles.jp || anime?.titles.it}
            name={anime?.titles.en}
            id={anime?.id}
            score={anime?.score}
            year={anime?.season_year}
            key={doc.id}
          />
        );
      })}
    </div>
  );
}

export default MyCollections;
