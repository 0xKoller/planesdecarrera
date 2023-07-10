"use client";

import Button from "antd/es/button";
import Space from "antd/es/space";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Planes de Carrera</h1>
      <div className="container">
        <Space direction="vertical" style={{ width: "100%" }}>
          <Button
            href="./bst"
            type="primary"
            block
            ghost
            style={{ color: "red", borderColor: "red" }}
          >
            BST
          </Button>
          <Button
            type="primary"
            block
            ghost
            style={{ color: "red", borderColor: "red" }}
          >
            Mallas
          </Button>
        </Space>
      </div>
    </main>
  );
}
