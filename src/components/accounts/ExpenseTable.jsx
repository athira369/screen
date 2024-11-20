import React from "react";
import { Table, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const ExpenseTable = ({ data }) => {
  const columns = [
    { title: "S.No", dataIndex: "slNo", key: "slNo" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Invoice No", dataIndex: "invoiceNo", key: "invoiceNo" },
    { title: "Description / Remarks", dataIndex: "description", key: "description" },
    { title: "DR", dataIndex: "dr", key: "dr" },
    { title: "CR", dataIndex: "cr", key: "cr" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button icon={<EditOutlined />} />
          <Button icon={<DeleteOutlined />} danger />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white shadow p-4 rounded">
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default ExpenseTable;
