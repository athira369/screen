// import React from 'react'
// import Sidebar from '../dashboard/Sidebar'
// import { useParams } from "react-router-dom";
// const UserDetails = () => {
//   const { userId } = useParams();
//     return(
//       // <div>user details</div>
//     // <div className="flex h-screen">
//     // {/* Sidebar */}
//     // <Sidebar />
//     //  Main Content

//     <div className="flex-1 p-8 bg-gray-100 overflow-y-auto">
//       <h2 className="text-3xl font-bold mb-6">User Details</h2>
//       <p className="mt-4">User ID: {userId}</p>

//       {/* User Profile Card */}
//       <div className="bg-white p-6 rounded-lg shadow mb-6">
//         <div className="flex items-center space-x-4">
//           <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
//           <div>
//             <h3 className="text-xl font-semibold">Karen Hope</h3>
//             <p>User</p>
//             <div className="flex space-x-4 mt-2 text-sm text-gray-600">
//               <span>Location: Jakarta, Indonesia</span>
//               <span>Address: Jakarta, Indonesia</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* <div className="bg-white p-6 rounded-lg shadow mb-6">
//          <h3 className="font-semibold text-lg">Payment History</h3>
//          <div className="grid gap-y-3 mt-4">
//           </div>
//           </div> */}
//           <div className="bg-white p-6 rounded-lg shadow mb-6">
//           <div className="flex items-center justify-between">
//           <h3 className="font-semibold text-lg">Payment History</h3>
          
//             <div>#123456789</div>
//             <div>2 March 2021, 13:45 PM</div>
//            <div>$50,036</div>
//             <div className="text-green-500">Complete</div>
//           </div>
//           </div>
//           </div>

 


// )

// }
// export default UserDetails;
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch user data using userId
    fetch(`/api/users/${userId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">User Details</h2>
       <p className="mt-4">User ID: {user.id}</p>
       <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h3 className="text-xl font-semibold">{user.name}</h3>
        <p>Status: {user.status}</p>
        <p>Location: {user.location}</p>
        <p>Date: {user.date}</p>
      </div>
    </div> 
  );
};

export default UserDetails;

