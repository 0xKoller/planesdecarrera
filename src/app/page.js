"use client";

import Button from "antd/es/button";
import Space from "antd/es/space";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-centerx w-full">
      <h1 className="text-3xl  text-red-600">Planes de Carrera</h1>
      {/* La barra de abajo es para debug */}
      {/* <h1 className="text-3xl  text-red-600">Test</h1> */}
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
            href="./pst"
            block
            className="h-10 flex items-center justify-center text-xl text-neutral-50 bg-red-600 hover:bg-red-50 hover:text-red-600"
          >
            PST
          </Button>
          <Button
          href="./sqa"
            block
            className="h-10 flex items-center justify-center text-xl text-neutral-50 bg-red-600 hover:bg-red-50 hover:text-red-600"
          >
            SQA
          </Button>
        </Space>
      </div>
    </main>
  );
}
