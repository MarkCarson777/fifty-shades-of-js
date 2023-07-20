import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

export function useVideos(defaultSearchTerm) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = (term) => {
    return new Promise((resolve, reject) => {
      youtube
        .get("/search", {
          params: {
            q: term,
          },
        })
        .then((response) => {
          setVideos(response.data.items);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  return [videos, search];
}
