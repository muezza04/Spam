import React, { useState, useEffect } from 'react';
import Nav from '../admin/Nav';


function KelolaKelasAdmin({ Toggle }) {
  const [userCount, setUserCount] = useState(0);
  const [activeClassCount, setActiveClassCount] = useState(0);
  const [premiumClassCount, setPremiumClassCount] = useState(0);
  const [courseItems, setCourseItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for Active Users
        const activeUserResponse = await fetch('https://mooc.code69.my.id/dashboard-data');
        const activeUserData = await activeUserResponse.json();
        setUserCount(activeUserData.length);

        // Fetch data for Active Classes
        const activeClassResponse = await fetch('https://mooc.code69.my.id/dashboard-data');
        const activeClassData = await activeClassResponse.json();
        setActiveClassCount(activeClassData.length);

        // Fetch data for Premium Classes
        const premiumClassResponse = await fetch('https://mooc.code69.my.id/dashboard-data');
        const premiumClassData = await premiumClassResponse.json();
        setPremiumClassCount(premiumClassData.length);

        const classesResponse = await fetch ('https://mooc.code69.my.id/course', {
            method: 'GET',
        })

        const classesData = await classesResponse.json();
        setCourseItems(classesData);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  const deleteClass = async (courseId) => {
    try {
      await fetch(`https://mooc.code69.my.id/dashboard-data/course/${courseId}`, {
        method: 'DELETE',
      });

      // Fetch updated data after deletion
      const classesResponse = await fetch('https://mooc.code69.my.id/course');
      const classesData = await classesResponse.json();
      setCourseItems(classesData);

    } catch (error) {
      console.error('Error deleting class:', error);
    }
  };

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
            <th scope="col">Kode Kelas</th>
            <th scope="col">Kategori</th>
            <th scope="col">Nama Kelas</th>
            <th scope="col">Tipe Kelas</th>
            <th scope="col">Level</th>
            <th scope="col">Harga Kelas</th>
            <th scope="col">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(courseItems) &&
          courseItems.map((courseItems) => (
            <tr key={course.id}>
              <td>{courseItems.kodeKelas}</td>
              <td>{courseItems.kategori}</td>
              <td>{courseItems.namaKelas}</td>
              <td>{courseItems.tipeKelas}</td>
              <td>{courseItems.level}</td>
              <td>{courseItems.hargaKelas}</td>
              <td>
                <button className="btn btn-warning">Edit</button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteClass(course.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default KelolaKelasAdmin;
