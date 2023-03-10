import React from "react";
import { Link } from "react-router-dom";

export const NoMatch = () => {
  return (
    <div>
      <h2 className="text-black dark:text-white">Nothing to see here!</h2>
      <p className="text-black dark:text-white">
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
};
