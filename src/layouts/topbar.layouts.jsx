import React, { useEffect, useLayoutEffect, useState } from "react";

const TopbarLayout = () => {
  const [title, setTitle] = useState("A CARTA");

  useLayoutEffect(() => {
    document.title = "A CARTA";
  });

  useEffect(() => {
    setTitle(document.title);
  }, [document.title]);
  return (
    <div className="topbar">
      <div className="topbar__left">
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className="topbar__center">
        <h1 className="topbar__title">{title}</h1>
      </div>
      <div className="topbar__right">
        <div className="topbar__profile">
          <img
            src={require("../../public/assets/default.jpg")}
            alt="User profile"
            className="topbar__profile-photo"
          />
        </div>
      </div>
    </div>
  );
};

export default TopbarLayout;
