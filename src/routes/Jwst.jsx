import React from "react";

export const Jwst = () => {
  const baseUrl = "";
  const ApiKey = "409010ba-fe65-4240-847a-ba8b0ef4fe66";

  var myHeaders = new Headers();
  myHeaders.append("X-API-KEY", ApiKey);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://api.jwstapi.com/program/id/2734?page=1&perPage=10",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  return (
    <div className="text-white h-screen mx-10 flex justify-center items-center">
      Jwst
    </div>
  );
};
