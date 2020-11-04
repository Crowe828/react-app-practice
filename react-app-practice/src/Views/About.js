import React from "react";

function About() {
  return (
    <div>
      <h1 className="font-bold text-2xl">About this App</h1>
      <p>
        This app was created using Quentin Watt's tutorial. You can find the
        tutorial
        <a
          className="font-bold text-blue-500"
          href="https://youtu.be/mACw_G-okPE"
        >
          {" "}
          here.
        </a>
      </p>
    </div>
  );
}

export default About;
