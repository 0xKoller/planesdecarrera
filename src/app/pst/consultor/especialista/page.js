"use client";
import React from "react";

// ANTD
import Table from "antd/es/table";
import Timeline from "antd/es/timeline";
import Card from "antd/es/card";
import Descriptions from "antd/es/descriptions";
import Collapse from "antd/es/collapse";

// DATA
import descJr from "./jr/desc.json";
import matrixJr from "./jr/matrix.json";
import capaJr from "./jr/capacities.json";
import descSsr from "./ssr/desc.json";
import matrixSsr from "./ssr/matrix.json";
import capaSsr from "./ssr/capacities.json";
import descSr from "./sr/desc.json";
import matrixSr from "./sr/matrix.json";
import capaSr from "./sr/capacities.json";
import descLeader from "./leader/desc.json";
import matrixLeader from "./leader/matrix.json";
import capaLeader from "./leader/capacities.json";

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



const itemsJr = [
  {
    key: "1",
    label: "Que hace?",
    children: (
      <>
        <Table
          pagination={false}
          dataSource={descJr}
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
          pagination={false}
          dataSource={matrixJr}
          columns={columns_desc}
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
          dataSource={capaJr}
          columns={columns_desc}
          size="small"
        />
      </>
    ),
  },
];

const itemsSsr = [
  {
    key: "1",
    label: "Que hace?",
    children: (
      <>
        <Table
          pagination={false}
          dataSource={descSsr}
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
          pagination={false}
          dataSource={matrixSsr}
          columns={columns_desc}
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
          dataSource={capaSsr}
          columns={columns_desc}
          size="small"
        />
      </>
    ),
  },
];

const itemsSr = [
  {
    key: "1",
    label: "Que hace?",
    children: (
      <>
        <Table
          pagination={false}
          dataSource={descSr}
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
          pagination={false}
          dataSource={matrixSr}
          columns={columns_desc}
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
          dataSource={capaSr}
          columns={columns_desc}
          size="small"
        />
      </>
    ),
  },
];

const itemsLeader = [
  {
    key: "1",
    label: "Que hace?",
    children: (
      <>
        <Table
          pagination={false}
          dataSource={descLeader}
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
          pagination={false}
          dataSource={matrixLeader}
          columns={columns_desc}
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
          dataSource={capaLeader}
          columns={columns_desc}
          size="small"
        />
      </>
    ),
  },
];

export default function Especialista() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center justify-center m-4">
        <h1 className="text-xl text-red-600">Business System Teams</h1>
        <h2 className="transition ease-in-out delay-100 text-red-500/50 hover:text-red-500">
          Especialista
        </h2>
      </div>
      <div className="p-2">
        <Timeline
          items={[
            {
              children: (
                <Card title="Dev Jr">
                  <Descriptions title="Descripcion" />
                  <Collapse items={itemsJr} />
                </Card>
              ),
            },
            {
              children: (
                <Card title="Dev SSR">
                  <Descriptions title="Descripcion" />
                  <Collapse items={itemsSsr} />
                </Card>
              ),
            },
            {
              children: (
                <Card title="Dev SR">
                  <Descriptions title="Descripcion" />
                  <Collapse items={itemsSr} />
                </Card>
              ),
            },
            {
              children: (
                <Card title="Dev Lider">
                  <Descriptions title="Descripcion" />
                  <Collapse items={itemsLeader} />
                </Card>
              ),
            },
          ]}
        />
      </div>
    </main>
  );
}
