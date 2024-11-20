             import React from 'react';
             import "../../styles/IncompleteBooking.css";
          const IncompleteBookings = () => {
            // Sample data (ideally, this would be passed in as props or fetched from an API)
            const bookings = [
              { id: 123454, name: 'William Samantha', price: '$50,036' },
              { id: 123458, name: 'Jordan Nico', price: '$50,036' },
              { id: 123459, name: 'Karen Hope', price: '$50,036' },
              { id: 123457, name: 'Nadila Adja', price: '$50,036' },
              { id: 12346, name: 'Tony Soap', price: '$50,036' },
            ];
          
            return (
              <div className="IncompleteBookings">
                <h1>Incomplete Bookings</h1>
                <table>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr key={booking.id}>
                        <td>
                          <div className="profile_photo">
                            <div className="profile-img"></div>
                          </div>
                        </td>
                        <td>{booking.name}</td>
                        <td>
                          <span className="material-symbols-outlined">person</span>
                        </td>
                        <td>User Name</td>
                        <td>ID#{booking.id}</td>
                        <td>{booking.price}</td>
                        <td className="icons">
                          <span className="material-symbols-outlined">more_horiz</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          };
          
          export default IncompleteBookings;
          