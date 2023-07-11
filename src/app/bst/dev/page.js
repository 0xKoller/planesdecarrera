"use client";

import Button from "antd/es/button";
import Space from "antd/es/space";

export default function FirstPost() {
  return (
    <main className="flex flex-col items-center justify-center p-8 w-full">
      <h1 className="text-xl text-red-600">Business System Teams</h1>
      <div className="container">
        <Space direction="vertical" style={{ width: "100%" }}>
          <Button
            type="primary"
            block
            ghost
            disabled
            className="h-10 flex items-center justify-center text-xl text-neutral-50 bg-red-600 hover:bg-red-50 hover:text-red-600"
          >
            Lider
          </Button>
          <Button
            href="./bst/especialista"
            block
            className="h-10 flex items-center justify-center text-xl text-neutral-50 bg-red-600 hover:bg-red-50 hover:text-red-600"
          >
            Especialista
          </Button>
          <Button
            type="primary"
            block
            ghost
            disabled
            className="h-10 flex items-center justify-center text-xl text-neutral-50 bg-red-600 hover:bg-red-50 hover:text-red-600"
          >
            Negocios y gestión
          </Button>
        </Space>
      </div>
    </main>
  );
}
