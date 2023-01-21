import { Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";

export const NasaEpic = () => {
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

  if (!loading) {
    const apiFecha = new Date(dataEpic[0].date);
    console.log("apiFecha", apiFecha);

    const year = apiFecha.getFullYear();
    console.log("year", year);
    const month = ("0" + (apiFecha.getMonth() + 1)).slice(-2);
    console.log("month", month);
    const day = ("0" + apiFecha.getDate()).slice(-2);
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
    setImgLoading(false);
    console.log("loaded");
    counter.push("loaded");
    console.log(counter);
    if (counter.length >= 6) {
      setFullLoad(false);
      console.log("fullLoad", fullLoad);
    }
  };

  // renderizar las imagenes
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Titulo */}
      <h1 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 font-extrabold sm:text-4xl  text-center py-5">
        This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR
        spacecraft
      </h1>

      {fullLoad ? (
        <div class="h-96 py-64 text-center">
          <div role="status">
            <svg
              aria-hidden="true"
              class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        ""
      )}

      <div
        id="default-carousel"
        className={`relative ${fullLoad ? "hidden" : ""}`}
        data-carousel="static"
      >
        {/* <!-- Carousel wrapper --> */}
        <div
          className="relative overflow-hidden rounded-lg"
          style={{ width: "900px", height: "900px" }}
        >
          {/* {imageArr.map((e) => {
            return (
              <div className="duration-700 ease-in-out" data-carousel-item>
                <img src={e} className="w-full" alt="..." />
              </div>
            );
          })} */}
          {/* <!-- Item 1 --> */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img
              src={imageArr[0]}
              onLoad={onLoad}
              className="w-full"
              alt="..."
            />
          </div>
          {/* <!-- Item 2 --> */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img
              src={imageArr[1]}
              onLoad={onLoad}
              className="w-full"
              alt="..."
            />
          </div>
          {/* <!-- Item 3 --> */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img
              src={imageArr[2]}
              onLoad={onLoad}
              className="w-full"
              alt="..."
            />
          </div>
          {/* <!-- Item 4 --> */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img
              src={imageArr[3]}
              onLoad={onLoad}
              className="w-full"
              alt="..."
            />
          </div>
          {/* <!-- Item 5 --> */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img
              src={imageArr[4]}
              onLoad={onLoad}
              className="w-full"
              alt="..."
            />
          </div>
          {/* <!-- Item 6 --> */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img
              src={imageArr[5]}
              onLoad={onLoad}
              className="w-full"
              alt="..."
            />
          </div>
          {/* <!-- Item 7 --> */}
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img
              src={imageArr[6]}
              onLoad={onLoad}
              className="w-full"
              alt="..."
            />
          </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 6"
            data-carousel-slide-to="5"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 7"
            data-carousel-slide-to="6"
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* mapear el arreglo de url con imagenes y mostrarlas */}
      {/* <div className="grid grid-flow-col grid-rows-1 grid-cols-1"> */}
      {/* <div className="flex flex-col justify-center items-center w-4/6">
        <Carousel className={`${imgLoading && "hidden"}`} slideInterval={5000}>
          {imageArr.map((e) => {
            console.log(e);
            return (
              // Ajustar visualmente con tailwinds
              <img src={e} onLoad={onLoad} class="w-full" alt={e} key={e} />
            );
          })}
        </Carousel>
      </div> */}
      {/* </div> */}

      {/* Mostrar solo 1 imagen de momento */}
      {/* <div className="w-3/6">
        {imgLoading ? (
          <div class="h-96 py-64 text-center">
            <div role="status">
              <svg
                aria-hidden="true"
                class="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          ""
        )}

        <img
          src={imageArr[0]}
          alt={imageArr[0]}
          onLoad={onLoad}
          className={`${imgLoading ? "hidden" : ""} rounded-lg mb-5`}
        />
      </div> */}

      {/* descripcion */}
      <p className="dark:text-white mx-auto max-w-5xl text-center px-10 mb-5">
        The EPIC API provides information on the daily imagery collected by
        DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument. Uniquely
        positioned at the Earth-Sun Lagrange point, EPIC provides full disc
        imagery of the Earth and captures unique perspectives of certain
        astronomical events such as lunar transits using a 2048x2048 pixel CCD
        (Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain
        telescope.
      </p>
    </div>
  );
};
// {
//   imageArr.map((e) => {
//     console.log(e);
//     return (
//       // Ajustar visualmente con tailwinds

//       <img
//         src={e}
//         class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//         alt={e}
//       />
//     );
//   });
// }
