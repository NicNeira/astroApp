import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const MarsRover = () => {
  const [dataMars, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const baseUrl =
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=m1zSSTJGpDyZhN9YLdIb4N5UxKdUMrZcfiGqwmwR";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(baseUrl);
        const dataApi = await response.json();
        setData(dataApi);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []); // Sólo se ejecuta una vez, al montar el componente

  console.log("dataMars", dataMars.photos);

  return (
    dataMars && (
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
        {dataMars.photos.map((e) => {
          // console.log("e", e);
          return (
            <div className="" key={e.id}>
              <img src={e.img_src} alt={e.id} />
            </div>
          );
        })}
      </div>
    )
  );
};
