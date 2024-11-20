import React from "react";
import { Select, Input, DatePicker, Button, Switch } from "antd";

const PayoutForm = ({ onSave, onDelete }) => {
  const { Option } = Select;

  return (
    <form className="bg-white shadow p-4 rounded mb-4">
      <div className="grid grid-cols-2 gap-4">
        <Select placeholder="User Type" className="w-full">
          <Option value="dealer">Dealer</Option>
          <Option value="franchisee">Franchisee</Option>
          <Option value="serviceProvider">Service Provider</Option>
        </Select>
        <Select placeholder="User Name / ID" className="w-full">
          <Option value="user1">User 1</Option>
          <Option value="user2">User 2</Option>
        </Select>
        <Select placeholder="Auto Payout Schedule" className="w-full">
          <Option value="daily">Daily</Option>
          <Option value="weekly">Weekly</Option>
          <Option value="monthly">Monthly</Option>
        </Select>
        <DatePicker placeholder="Manual Payout Schedule" className="w-full" />
        <Input placeholder="Payment Method" />
        <Input placeholder="Account Holder Name" />
        <Input placeholder="Bank Branch" />
        <Input placeholder="Bank Name" />
        <Input placeholder="Account Number" />
        <Input placeholder="IFSC Code" />
      </div>

      <div className="flex justify-between items-center mt-4">
        <div>
          <Switch className="mr-2" /> Auto Payment
        </div>
        <Button type="primary" onClick={onSave}>
          Save
        </Button>
        <Button type="danger" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </form>
  );
};

export default PayoutForm;
