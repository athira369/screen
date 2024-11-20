import React from "react";
import { FaCalendarAlt, FaRegClock, FaCog, FaBell } from "react-icons/fa";

const RecentActivities = () => {
  const activities = [
    {
      id: 1,
      title: "Top Repair",
      name: "Keshavan",
      status: "Booked",
      date: "March 20, 2021",
      time: "09:00 - 10:00 AM",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Drain Blockage",
      name: "Keshavan",
      status: "Complaint",
      date: "March 20, 2021",
      time: "09:00 - 10:00 AM",
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Light Change",
      name: "Keshavan",
      status: "Completed",
      date: "March 20, 2021",
      time: "09:00 - 10:00 AM",
      color: "bg-purple-500",
    },
    {
      id: 4,
      title: "Fan Repair",
      name: "Thomas",
      status: "Completed",
      date: "March 20, 2021",
      time: "09:00 - 10:00 AM",
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="bg-white text-black p-4 flex flex-col space-y-6">
      {/* Top Row: Settings, Notification, Profile Picture, and Name */}
      <div className="flex items-center space-x-4 justify-between">
        <FaCog className="text-2xl cursor-pointer hover:text-gray-400" />
        <FaBell className="text-2xl cursor-pointer hover:text-gray-400" />

        {/* Profile Picture and Name */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/30"
            alt="Admin"
            className="rounded-full w-8 h-8"
          />
          <div>
            <p className="font-semibold">Admin Name</p>
          </div>
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="container mx-auto p-6">
        <div className="flex flex-col items-end mb-6">
          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          </div>

          {/* Card Section for Details (Vertically Aligned and Right Aligned) */}
          <div className="flex flex-col gap-6 ml-auto">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="relative flex flex-col items-start bg-white rounded-lg shadow-lg overflow-hidden"
              >
                {/* Colored Vertical Strip with Oval Edges */}
                <div
                  className={`absolute left-[-8px] top-0 h-full w-8 ${activity.color} rounded-r-full`}
                ></div>
                <div className="p-6 pl-16">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {activity.title}
                  </h2>
                  <div className="flex items-center p-6">
                    <img
                      className="w-16 h-16 rounded-full border-4 border-blue-500 object-cover"
                      src="https://via.placeholder.com/150"
                      alt="Profile"
                    />
                    <div className="ml-4">
                      <h2 className="text-xl font-semibold text-gray-800">
                        {activity.name}
                      </h2>
                      <h1 className="text-xl font-semibold text-gray-800">
                        {activity.status}
                      </h1>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <FaCalendarAlt className="mr-2" />
                        <span>{activity.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <FaRegClock className="mr-2" />
                        <span>Time: {activity.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div> // Close the main div here
  );
};

export default RecentActivities;
