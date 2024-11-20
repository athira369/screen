import React from "react";
import { Table } from "antd";

const DataTable = ({ title, columns, data }) => {
  return (
    <div className="shadow p-4 rounded bg-white">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default DataTable;
