"use client";

import Button from "antd/es/button";
import Space from "antd/es/space";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-centerx w-full">
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
            className="h-10 flex items-center justify-center text-xl text-neutral-50 bg-red-600 hover:bg-red-50 hover:text-red-600"
          >
            PST
          </Button>
          <Button
            type="primary"
            block
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
