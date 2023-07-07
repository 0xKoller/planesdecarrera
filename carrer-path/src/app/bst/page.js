"use client";
import { Button, Space } from "antd";

export default function FirstPost() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Business System Teams</h1>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Button
          href="./bst/lider"
          type="primary"
          block
          ghost
          style={{ color: "red", borderColor: "red" }}
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
        >
          Negocios y gestión
        </Button>
      </Space>
    </main>
  );
}
