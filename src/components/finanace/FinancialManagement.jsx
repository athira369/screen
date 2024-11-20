import React from "react";
import { Layout } from "antd";
import DataTable from "./DataTable";
import TopBar from "./TopBar";
import OverviewCard from "./OverviewCard";
import AnalyticsChart from "./AnalyticsChart";


const { Header, Content } = Layout;

const FinancialManagement = () => {
  const dataOverview = [
    { title: "Revenue", value: "932", change: "+10%", color: "text-green-500" },
    { title: "Expense", value: "754", change: "-0.5%", color: "text-red-500" },
    { title: "Earnings", value: "$123,456", change: "+23%", color: "text-green-500" },
  ];

  const columnsSubscription = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "Type", dataIndex: "type", key: "type" },
  ];

  const dataSubscription = [
    { key: "1", name: "Samantha W.", id: "ID 123456789", type: "Franchisee" },
    { key: "2", name: "Tony Soap", id: "ID 123456789", type: "Service Provider" },
    { key: "3", name: "Jordan Nico", id: "ID 123456789", type: "Service Provider" },
    { key: "4", name: "Karen Hope", id: "ID 123456789", type: "Franchisee" },
  ];

  const columnsExpense = [
    { title: "Expense ID", dataIndex: "id", key: "id" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
  ];

  const dataExpense = [
    { key: "1", id: "#123456789", date: "2 March 2023", amount: "$50,036" },
    { key: "2", id: "#123456789", date: "2 March 2023", amount: "$50,036" },
  ];

  return (
    <Layout className="min-h-screen">
      {/* Sidebar */}
     

      {/* Main Content */}
      <Layout>
        {/* Top Header */}
        <Header>
          <TopBar />
        </Header>

        {/* Content */}
        <Content className="p-4 bg-gray-100">
          {/* Overview Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {dataOverview.map((item, index) => (
              <OverviewCard
                key={index}
                title={item.title}
                value={item.value}
                change={item.change}
                color={item.color}
              />
            ))}
          </div>

          {/* Chart */}
          <AnalyticsChart />

          {/* Tables */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <DataTable
              title="Subscription Laps"
              columns={columnsSubscription}
              data={dataSubscription}
            />
            <DataTable
              title="Expense"
              columns={columnsExpense}
              data={dataExpense}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default FinancialManagement;
