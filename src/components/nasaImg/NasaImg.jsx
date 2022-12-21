import React, { useEffect, useState } from "react";

export const NasaImg = () => {
  const [dataApi, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const baseUrl =
    "https://api.nasa.gov/planetary/apod?api_key=m1zSSTJGpDyZhN9YLdIb4N5UxKdUMrZcfiGqwmwR";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []); // Sólo se ejecuta una vez, al montar el componente

  console.log(dataApi);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="">
      <h1 className="dark:text-white text-4xl text-center pt-5">
        {dataApi.title}
      </h1>
      {/* imagen */}
      <div className="w-2/3 mx-auto">
        <img
          className="mx-auto max-w-full h-auto rounded-lg mt-5"
          src={dataApi.url}
        />
      </div>
      <div className="mx-auto max-w-5xl flex justify-center p-1 mb-5 ">
        {/* Date */}
        <p className="dark:text-white mr-3">{dataApi.date}</p>
        {/* copyright */}
        <p className="dark:text-white mr-3">{dataApi.copyright}</p>
      </div>
      {/* Descripcion */}
      <p className="dark:text-white mx-auto max-w-5xl text-center px-10 mb-5">
        {dataApi.explanation}
      </p>
    </div>
  );
};