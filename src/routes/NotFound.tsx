import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center fixed top-0 left-0">
      <h1>NotFound</h1>
      <Link to="/" className="btn">
        {" "}
        홈으로 돌아가기
      </Link>
    </div>
  );
};

export default NotFound;
