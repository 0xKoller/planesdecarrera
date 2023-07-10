"use client";
import React from "react";
import Table from "antd/es/table";
import Timeline from "antd/es/timeline";
import Card from "antd/es/card";
import Descriptions from "antd/es/descriptions";
import Collapse from "antd/es/collapse";
import desc from "./desc.json";
import matrix from "./matrix.json";
import capa from "./capacities.json";

const columns_desc = [
  {
    title: "Competencia",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Capacidad",
    dataIndex: "capacidad",
    key: "capacidad",
  },
];

const columns_matrix = [
  {
    title:
      "Construye o adapta clases, módulos u otras piezas de software con ayuda de algún JR o SSR.",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Aprendiz",
    dataIndex: "capacidad",
    key: "capacidad",
  },
];

const columns_capa = [
  {
    title: "Link",
    dataIndex: "link",
    key: "link",
    render: (text) => <a href={text}>Link</a>,
  },
  {
    title: "Grupo",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Tema",
    dataIndex: "capacidad",
    key: "capacidad",
  },
];

const items = [
  {
    key: "1",
    label: "Que hace?",
    children: (
      <>
        <Table
          pagination={false}
          dataSource={desc}
          columns={columns_desc}
          size="small"
        />
      </>
    ),
  },
  {
    key: "2",
    label: "Matriz de conocimientos",
    children: (
      <>
        <Table
          dataSource={matrix}
          columns={columns_matrix}
          pagination={false}
          size="small"
        />
      </>
    ),
  },
  {
    key: "3",
    label: "Capacidades a incorporar",
    children: (
      <>
        <Table
          pagination={false}
          dataSource={capa}
          columns={columns_capa}
          size="small"
        />
      </>
    ),
  },
];

export default function Especialista() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Business System Teams</h1>
      <h2>Especialista</h2>
      <div>
        <Timeline
          items={[
            {
              children: (
                <Card title="Dev Trainee">
                  <Descriptions title="Descripcion"></Descriptions>
                  <Collapse items={items} />
                </Card>
              ),
            },
            {
              children: "Solve initial network problems 2015-09-01",
            },
            {
              children: "Technical testing 2015-09-01",
            },
            {
              children: "Network problems being solved 2015-09-01",
            },
          ]}
        />
      </div>
    </main>
  );
}
