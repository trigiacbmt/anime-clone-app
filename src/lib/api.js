import { db } from "../firebase";
import {useCollection} from "react-firebase-hooks/firestore"

const DOMAIN_URL = "https://api.aniapi.com/v1/";
const DOMAIN_GENRES = "https://api.aniapi.com/v1/resources/1.0/0";

export async function getAllGenres() {
  const res = await fetch(`${DOMAIN_GENRES}`, {
    method: "GET",
    headers: {
      "Authorization":
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzMiIsIm5iZiI6MTYzOTQwNzMyNSwiZXhwIjoxNjQxOTk5MzI1LCJpYXQiOjE2Mzk0MDczMjV9.X13fJJioOWhfph2UOhDrtSzi5j8hSenStky65sEdtOs",
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }

  const allGenres = data.data.genres;

  const transformedData = [...allGenres];
  
  

  return transformedData;
}

export async function getRandomAnime() {
    const res = await fetch(`${DOMAIN_URL}random/anime/10/true`, {
        method: "GET",
    headers: {
      "Authorization":
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzMiIsIm5iZiI6MTYzOTQwNzMyNSwiZXhwIjoxNjQxOTk5MzI1LCJpYXQiOjE2Mzk0MDczMjV9.X13fJJioOWhfph2UOhDrtSzi5j8hSenStky65sEdtOs",
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    });
    const data = await res.json();
    if(!res.ok){
        throw new Error(data.message);
    }
    const randomAnime = data.data;
    
    
    return randomAnime
}

export async function getSearchAnime(params) {
    const res = await fetch(`${DOMAIN_URL}anime${params}`,{
        method: "GET",
        headers: {
          "Authorization":
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgzMiIsIm5iZiI6MTYzOTQwNzMyNSwiZXhwIjoxNjQxOTk5MzI1LCJpYXQiOjE2Mzk0MDczMjV9.X13fJJioOWhfph2UOhDrtSzi5j8hSenStky65sEdtOs",
          "Content-Type": "application/json",
          "Accept": "application/json",
        }
    })

    const data = await res.json();
    if(!res.ok) {
        throw new Error(data.message)
    }

    const anime = data.data
    

    return anime
}

