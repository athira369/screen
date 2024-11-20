import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import UserHeader from "./UserHeader";

const UserManagement = () => {
  // State for search term
  const [searchTerm, setSearchTerm] = useState("");
   const navigate = useNavigate();
  // Sample user data
  const users = [
    {
      name: "Samantha William",
      id: "123456789",
      date: "March 25, 2021",
      services: 2,
      location: "Jakarta",
      status: "Not Active",
    },
    {
      name: "Tony Soap",
      id: "123456790",
      date: "March 25, 2021",
      services: 8,
      location: "Jakarta",
      status: "Active",
    },
    {
      name: "Karen Hope",
      id: "123456792",
      date: "March 25, 2021",
      services: 10,
      location: "Jakarta",
      status: "Active",
    },
    {
      name: "Jordan Nico",
      id: "123456794",
      date: "March 25, 2021",
      services: 0,
      location: "Jakarta",
      status: "Active",
    },
    {
      name: "Nadila Adja",
      id: "123456795",
      date: "March 25, 2021",
      services: 1,
      location: "Jakarta",
      status: "Not Active",
    },
    {
      name: "Johnny Ahmad",
      id: "123456796",
      date: "March 25, 2021",
      services: 3,
      location: "Jakarta",
      status: "Active",
    },
  ];

  // Filter users based on search term
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen  p-6 text-gray-800">
      <UserHeader />

      {/* Stats Section */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        {[
          {
            icon: "edit_document",
            label: "Total Users",
            count: "24K",
            iconColor: "bg-[#6F4FF2]",
          },
          {
            icon: "edit_document",
            label: "Online",
            count: "82K",
            iconColor: "bg-[#50BB25]",
          },
          {
            icon: "edit_document",
            label: "Service Request",
            count: "200",
            iconColor: "bg-[#F9D62C]",
          },
          {
            icon: "edit_document",
            label: "Lead Request",
            count: "89",
            iconColor: "bg-[#28B5E1]",
          },
          {
            icon: "edit_document",
            label: "Active Service",
            count: "89",
            iconColor: "bg-[#167F71]",
          },
          {
            icon: "edit_document",
            label: "Complaints",
            count: "89",
            iconColor: "bg-[#DC3546]",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-white shadow-sm flex items-center space-x-4"
          >
            {/* Icon Section */}
            <div
              className={`${stat.iconColor} p-3 rounded-full flex items-center justify-center`}
            >
              <span className="material-symbols-outlined text-white text-2xl">
                {stat.icon}
              </span>
            </div>
            {/* Stat Details */}
            <div>
              <span className="block text-lg font-semibold">{stat.count}</span>
              <span className="block text-sm text-gray-500">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Button Section */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by Name, ID or Location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Handle search input change
          className="w-1/3 p-2 border rounded-lg"
        />
        <div className="flex items-center space-x-4">
          <select className="text-white bg-[#4D44B5] border border- bg-[#4D44B5] p-2 rounded-lg">
            <option>Newest</option>
            <option>Oldest</option>
            <option>middle</option>
          </select>
          <Link
            to={"/newuser"}
            className="bg-purple-600 text-white py-2 px-4 rounded-lg"
          >
            + New User
          </Link>
        </div>
      </div>

      {/* User Table */}
      <table className="w-full bg-white rounded-lg shadow-lg">
  <thead>
    <tr className="text-left border-b whitespace-nowrap">
      {/* <th className="p-4 w-12">
        <input type="checkbox" className="mr-2" />
      </th> */}
      {[
        "Name",
        "ID",
        "Date",
        "Total Completed Services",
        "Location",
        "Contact",
        "Status",
        "Action",
      ].map((header, index) => (
        <th key={index} className="p-4 text-gray-600">{header}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {filteredUsers.length > 0 ? (
      filteredUsers.map((user) => (
      <tr
        key={user.id} // Use user.id for the key
        className="cursor-pointer border-b hover:bg-gray-50"
        onClick={() => navigate(`/users/${user.id}`)} // Navigate to dynamic route
      >
        {/* <tr key={index} className="border-b hover:bg-gray-50"></tr> */}
        <td className="p-4  flex">
          <input type="checkbox" className="mr-2" />
          <div className="w-12 h-12 rounded-full bg-[#C1BBEB] flex items-center justify-center overflow-hidden">
            <img
              src={user.profilePicture || "path/to/default-image.jpg"}
              alt={user.name}
              className="w-10 h-10 object-cover rounded-full"
            />
          </div>
          <span className="font-medium whitespace-nowrap">{user.name}</span>
        </td>
        <td className="p-4 text-purple-600">{user.id}</td>
        <td className="p-4 whitespace-nowrap">{user.date}</td>
        <td className="p-4 flex items-center justify-center">{user.services}</td>
        <td className="p-4">{user.location}</td>
        <td className="p-4 flex space-x-2">
          <button className="material-symbols-outlined text-black bg-[#C1BBEB]">phone</button>
          <button className="material-symbols-outlined text-black bg-[#C1BBEB]">mail</button>
        </td>
        <td className="p-4">
          <span
            className={`whitespace-nowrap px-3 py-1 rounded-full text-white ${
              user.status === "Active" ? "bg-[#64FC3E]" : "bg-[#FB7D5B]"
            }`}
          >
            {user.status}
          </span>
        </td>
        <td className="p-4 text-gray-500">•••</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="8" className="p-4 text-center text-gray-500">
        No results found
      </td>
    </tr>
  )}
</tbody>
</table>
      
     





      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <span>Showing 1-5 from 100 data</span>
        <div className="flex items-center space-x-2">
          <button className="text-gray-500">◀️</button>
          <button className="bg-purple-600 text-white px-3 py-1 rounded">
            1
          </button>
          <button className="text-gray-500">2</button>
          <button className="text-gray-500">3</button>
          <button className="text-gray-500">▶️</button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
