import React from 'react';

const Complaint = () => {
  return (
    <div className="complaint">
      {/* <h1>Complaints</h1> */}
      <table>
        <thead>
          <tr>
            <th>Icons</th>
            <th>Complaint ID</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="material-symbols-outlined">restaurant</span>
            </td>
            <td>#12345</td>
            <td>234</td>
            <td className="warning">Completed</td>
          </tr>
          <tr>
            <td>
              <span className="material-symbols-outlined">restaurant</span>
            </td>
            <td>#12346</td>
            <td>234</td>
            <td className="warning">Pending</td>
          </tr>
          <tr>
            <td>
              <span className="material-symbols-outlined">restaurant</span>
            </td>
            <td>#12347</td>
            <td>236</td>
            <td className="warning">Completed</td>
          </tr>
          <tr>
            <td>
              <span className="material-symbols-outlined">restaurant</span>
            </td>
            <td>#12348</td>
            <td>1000</td>
            <td className="warning">Completed</td>
          </tr>
          <tr>
            <td>
              <span className="material-symbols-outlined">restaurant</span>
            </td>
            <td>#12348</td>
            <td>500</td>
            <td className="warning">Canceled</td>
          </tr>
          <tr>
            <td>
              <span className="material-symbols-outlined">restaurant</span>
            </td>
            <td>#12350</td>
            <td>2122</td>
            <td className="warning">Canceled</td>
          </tr>
          <tr>
            <td>
              <span className="material-symbols-outlined">restaurant</span>
            </td>
            <td>#12351</td>
            <td>2340</td>
            <td className="warning">Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Complaint;
