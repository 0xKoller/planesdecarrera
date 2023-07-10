"use client";

import Button from "antd/es/button";
import Space from "antd/es/space";
import Logo from "./logo.webp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Image className="m-2" width={500} src={Logo} alt="Logo de TSOFT" />
      <h1 className="text-3xl  text-red-600">Planes de Carrera</h1>
      <div className="container">
        <Space direction="vertical" style={{ width: "100%" }}>
          <Button
            href="./bst"
            block
            className="h-10 flex items-center justify-center text-xl text-neutral-50 bg-red-600 hover:bg-red-50 hover:text-red-600"
          >
            BST
          </Button>
          <Button
            type="primary"
            block
            ghost
            disabled
            className="h-10 flex items-center justify-center text-xl text-neutral-50 bg-red-600 hover:bg-red-50 hover:text-red-600"
          >
            PST
          </Button>
          <Button
            type="primary"
            block
            ghost
            disabled
            className="h-10 flex items-center justify-center text-xl text-neutral-50 bg-red-600 hover:bg-red-50 hover:text-red-600"
          >
            SQA
          </Button>
          <Button
            type="primary"
            block
            ghost
            disabled
            className="h-10 flex items-center justify-center text-xl text-neutral-50 bg-red-600 hover:bg-red-50 hover:text-red-600"
          >
            PST
          </Button>
        </Space>
      </div>
    </main>
  );
}
