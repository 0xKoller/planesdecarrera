import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex p-2 items-center justify-evenly">
      <Link href="https://www.linkedin.com/company/tsoft/">Linkedin</Link>
      <Link href="https://www.instagram.com/tsoftglobal/">Instagram</Link>
      <Link href="https://www.facebook.com/tsoftglobal">Facebook</Link>
    </div>
  );
};
