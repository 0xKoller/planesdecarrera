import Link from "next/link";
import React from "react";

import Logo from "./logo.webp";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex p-2 items-center justify-center ">
      <Link href="/">
        <Image width={300} src={Logo} alt="Logo de TSOFT" />
      </Link>
    </div>
  );
};
