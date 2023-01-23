import { Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Loader } from "../Loader";

import "./epic.css";

export const NasaEpic = () => {
  // set data
  const [dataEpic, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // imgstates
  const [imgLoading, setImgLoading] = useState(true);
  const [fullLoad, setFullLoad] = useState(true);

  const baseUrl =
    "https://api.nasa.gov/EPIC/api/natural?api_key=m1zSSTJGpDyZhN9YLdIb4N5UxKdUMrZcfiGqwmwR";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(baseUrl);
        const dataEpic = await response.json();
        setData(dataEpic);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []); // Sólo se ejecuta una vez, al montar el componente

  console.log(dataEpic);
  console.log(loading);

  // crear un array vacio
  const imageArr = [];
  // Sacar el año, mes y dia por separado de los datos como la siguiente URL
  // https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/epic_1b_20151031074844.png

  let year;
  let month;
  let day;

  if (!loading) {
    const apiFecha = new Date(dataEpic[0].date);
    console.log("apiFecha", apiFecha);

    year = apiFecha.getFullYear();
    console.log("year", year);
    month = ("0" + (apiFecha.getMonth() + 1)).slice(-2);
    console.log("month", month);
    day = ("0" + apiFecha.getDate()).slice(-2);
    console.log("day", day);

    // sacar el nombre de la imagen

    // mapear los datos de la dataEpic y sacar el nombre de la imagen.
    // por cada elemento recorrido, generar la url de la imagen y pushearla al arreglo
    dataEpic.map((e) => {
      imageArr.push(
        `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${e.image}.png`
      );
    });
    // datos de las imagenes del arreglo
    console.log("imageArr", imageArr);
  }

  const counter = [];

  const onLoad = () => {
    console.log("loaded");
    counter.push("loaded");
    console.log(counter);
    if (counter.length >= 6) {
      setFullLoad(false);
      console.log("fullLoad", fullLoad);
    }
  };

  // console.log(day, month, year);

  // renderizar las imagenes
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {/* tittle */}
        <div className="mx-36 ">
          <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-extrabold sm:text-4xl  text-center py-5">
            Earth Polychromatic Imaging Camera (EPIC) instrument.
          </h1>
        </div>
        {/* spinner for loader */}
        <Loader fullLoad={fullLoad} />
        <div
          className={`w-5/6 flex flex-col justify-center items-center xl:flex-row   ${
            fullLoad ? "hidden" : ""
          }`}
        >
          <div className="flex flex-col justify-center items-center">
            <div className={`custom-dinamyc-size `}>
              {/* Flowbite-react carousel component */}
              <Carousel>
                {imageArr.map((e) => {
                  return (
                    <img
                      src={e}
                      onLoad={onLoad}
                      className="w-auto"
                      alt="..."
                      key={e}
                    />
                  );
                })}
              </Carousel>
            </div>
            {/* Image take */}
            <div className="p-5">
              <p className="text-white mx-auto max-w-5xl text-center px-10 mb-5">
                This image was taken by NASA's EPIC camera onboard the NOAA
                DSCOVR spacecraft
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            {/* <div className="">
            <img
              src="src\assets\img\satellite-3d-illustration-png.webp"
              className="h-96"
              alt=""
              />
            </div> */}
            <div className="w-5/6 text-center bg-white bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg">
              <div className="dark:text-white mx-auto max-w-5xl text-center px-10 my-5">
                {/* image date */}
                <p>{`Image date ${month}/${day}/${year}`}</p>
              </div>
              <div>
                {/* descripcion */}
                <p className="dark:text-white mx-auto max-w-5xl text-center px-10 mb-5 text-xs sm:text-base">
                  The EPIC API provides information on the daily imagery
                  collected by DSCOVR's Earth Polychromatic Imaging Camera
                  (EPIC) instrument. Uniquely positioned at the Earth-Sun
                  Lagrange point, EPIC provides full disc imagery of the Earth
                  and captures unique perspectives of certain astronomical
                  events such as lunar transits using a 2048x2048 pixel CCD
                  (Charge Coupled Device) detector coupled to a 30-cm aperture
                  Cassegrain telescope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
