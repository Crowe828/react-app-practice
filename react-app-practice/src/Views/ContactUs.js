import React from "react";

function ContactUs() {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-3">Let's Talk.</h1>
      <p className="mb-1 text-lg">
        If you would like to learn more about me, or work together on a project
        in the future, please reach out.
      </p>
      <ul>
        <li>
          <a
            className="font-bold text-blue-500"
            href="mailto:crowe828@gmail.com"
          >
            Email Me
          </a>
        </li>
        <li>
          <a
            className="font-bold text-blue-500"
            href="https://github.com/Crowe828"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className="font-bold text-blue-500"
            href="https://www.linkedin.com/in/christiantrowe/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ContactUs;
