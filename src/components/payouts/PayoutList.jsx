import React from "react";
import { List, Button, Avatar } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const PayoutList = ({ schedules, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow p-4 rounded mb-4">
      <List
        itemLayout="horizontal"
        dataSource={schedules}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                type="link"
                icon={<EditOutlined />}
                onClick={() => onEdit(item.id)}
              />,
              <Button
                type="link"
                icon={<DeleteOutlined />}
                danger
                onClick={() => onDelete(item.id)}
              />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.icon} />}
              title={item.title}
              description={item.schedule}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default PayoutList;
