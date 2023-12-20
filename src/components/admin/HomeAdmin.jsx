import React, { useState, useEffect } from 'react';
import Nav from '../admin/Nav';

function HomeAdmin({ Toggle }) {
  const [userCount, setUserCount] = useState(0);
  const [activeClassCount, setActiveClassCount] = useState(0);
  const [premiumClassCount, setPremiumClassCount] = useState(0);
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for Active Users
        const activeUserResponse = await fetch('https://mooc.code69.my.id/dashboard-data/activeUser');
        const activeUserData = await activeUserResponse.json();
        setUserCount(activeUserData.length);

        // Fetch data for Active Classes
        const activeClassResponse = await fetch('https://mooc.code69.my.id/dashboard-data/activeClass');
        const activeClassData = await activeClassResponse.json();
        setActiveClassCount(activeClassData.length);

        // Fetch data for Premium Classes
        const premiumClassResponse = await fetch('https://mooc.code69.my.id/dashboard-data/premiumClass');
        const premiumClassData = await premiumClassResponse.json();
        setPremiumClassCount(premiumClassData.length);


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className='px-3'>
      <Nav Toggle={Toggle} />
      <div className='container-fluid'>
        <div className='row g-3 gy-2 my-2'>
          {/* Active Users */}
          <div className="col-6 col-md-4 p-1">
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>{userCount}</h3>
                <p className='fs-5'>Active User</p>
              </div>
              <i className='bi bi-person p-3 fs-1'></i>
            </div>
          </div>

          {/* Active Classes */}
          <div className="col-6 col-md-4 p-1">
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>{activeClassCount}</h3>
                <p className='fs-5'>Active Class</p>
              </div>
              <i className='bi bi-person p-3 fs-1'></i>
            </div>
          </div>

          {/* Premium Classes */}
          <div className="col-6 col-md-4 p-1">
            <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
              <div>
                <h3 className='fs-2'>{premiumClassCount}</h3>
                <p className='fs-5'>Premium Class</p>
              </div>
              <i className='bi bi-person p-3 fs-1'></i>
            </div>
          </div>
        </div>
      </div>
      
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Kategori</th>
            <th scope="col">Kelas Premium</th>
            <th scope="col">Status</th>
            <th scope="col">Metode Pembayaran</th>
            <th scope="col">Tanggal Bayar</th>
          </tr>
        </thead>
        <tbody>
          {paymentData?.map((payment, index) => (
            <tr key={index}>
              <th scope="row">{payment.id}</th>
              <td>{payment.category}</td>
              <td>{payment.premiumClass}</td>
              <td>{payment.status}</td>
              <td>{payment.paymentMethod}</td>
              <td>{payment.paymentDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HomeAdmin;
