import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex p-2 items-center justify-evenly">
      <Link
        className="hover:text-red-600 transition ease-in-out delay-150"
        href="https://www.linkedin.com/company/tsoft/"
      >
        LinkedIn
      </Link>

      <Link
        className="hover:text-red-600 transition ease-in-out delay-150"
        href="https://www.instagram.com/tsoftglobal/"
      >
        Instagram
      </Link>
      <Link
        className="hover:text-red-600 transition ease-in-out delay-150"
        href="https://www.facebook.com/tsoftglobal"
      >
        Facebook
      </Link>
    </div>
  );
};
