import React from "react";
import { Input, Avatar } from "antd";
import { SearchOutlined, BellOutlined } from "@ant-design/icons";

const TopBar = () => {
  return (
    <div className="bg-white shadow flex justify-between items-center px-4">
      <Input
        prefix={<SearchOutlined />}
        placeholder="Search here..."
        className="w-1/3"
      />
      <div className="flex items-center gap-4">
        <BellOutlined className="text-xl" />
        <Avatar>NA</Avatar>
      </div>
    </div>
  );
};

export default TopBar;
