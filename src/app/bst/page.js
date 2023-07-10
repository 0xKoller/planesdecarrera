"use client";

import Button from "antd/es/button";
import Space from "antd/es/space";

export default function FirstPost() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Business System Teams</h1>
      <div className="container">
        <Space direction="vertical" style={{ width: "100%" }}>
          <Button
            href="./bst/lider"
            type="primary"
            block
            ghost
            style={{ color: "red", borderColor: "red" }}
            disabled
          >
            Lider
          </Button>
          <Button
            type="primary"
            href="./bst/especialista"
            block
            ghost
            style={{ color: "red", borderColor: "red" }}
          >
            Especialista
          </Button>
          <Button
            type="primary"
            block
            ghost
            style={{ color: "red", borderColor: "red" }}
            disabled
          >
            Negocios y gestión
          </Button>
        </Space>
      </div>
    </main>
  );
}
