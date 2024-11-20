// // App.js
// import Sidebar from './components/dashboard/Sidebar';
// import RightBar from './components/dashboard/RightBar';
// import MainContent from './components/dashboard/MainContent';
// import UserManagement from './components/users/UserManagement';
// import UserDetails from './components/users/UserDetails';
// import AddNewUsers from './components/users/AddNewUsers';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// const App =()=> {
//   return (
//     <Router>
//     <div className="flex h-screen">
//       {/* Sidebar on the left */}
//       <Sidebar />
//       <Routes>
//             {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//             <Route path="/users" element={<UserManagement />} />
//             <Route path="/userdetails" element={<UserDetails />} /> 
//             <Route path="/addnewusers" element={<AddNewUsers />} />
//             {/* Add other routes as needed */} 
//          </Routes>
//       {/* Main Content in the center */}
//       <div className="flex-1 p-6 overflow-auto">
//         <MainContent />
//       </div>

//       {/* Right Bar positioned on the right */}
//       {/* <div className="fixed right-0 top-0 h-full">
//         <RightBar />
//       </div> */}
//     </div>
//     </Router>
//   );
// }

// export default App;
// App.js
import Sidebar from './components/dashboard/Sidebar';
import UserManagement from './components/users/UserManagement';
import UserDetails from './components/users/UserDetails';
import AddNewUsers from './components/users/AddNewUsers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingDetails from './components/users/BookingDetails';
import EditProfile from './components/profile/EditProfile';
import Franchisees from './components/franchisee/Franchisees';
import RecentServices from './components/users/RecentServices';
import FranchiseeForm from './components/franchisee/FranchiseeForm';
import ServiceHistory from './components/servicehistory/ServiceHistory';
import AdsManagement from './components/adsmanagement/AdsManagement';
import TransactionHistory from './components/transactionhistory/TransactionHistory';
import ServiceType from './components/sevicecategories/ServiceType';
import Categories from './components/servicemanagement/Categories';
import AddCategoryDetails from './components/adcategory/AddCategoryDetails';


const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar with fixed width */}
        <Sidebar className="w-64 h-full bg-gray-800 text-white" />

        {/* Main Content */}
        <div className="flex-1 p-6 ">
          <Routes>
            <Route path="users" element={<UserManagement />} />
            {/* <Route path="userdetails" element={<UserDetails />} /> */}
            <Route path="/users/:userId" element={<UserDetails />} />
            {/* <Route path="addnewusers" element={<AddNewUsers />} /> */}
            <Route path="BookingDetails"element={<BookingDetails />} />
            <Route path="EditProfile"element={<EditProfile/>}/>
            <Route path ="Franchisees" element={<Franchisees/>}/>
            <Route path ="RecentServices" element={<RecentServices/>}/>
            <Route path ="FranchiseeForm" element={<FranchiseeForm/>}/>
            <Route path ="ServiceHistory" element={<ServiceHistory/>}/>
            <Route path ="newuser" element={<AddNewUsers/>}/>
            <Route path ="AdsManagement" element={<AdsManagement/>}/>
            <Route path ="TransactionHistory" element={<TransactionHistory/>}/>
            <Route path ="ServiceType" element={<ServiceType/>}/>
            <Route path ="Categories" element={<Categories/>}/>
            <Route path ="AddCategoryDetails" element={<AddCategoryDetails/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

