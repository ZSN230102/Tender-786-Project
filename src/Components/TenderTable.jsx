import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import './TenderList.css'; // Import your CSS file for styling
import BaseUrl from '../api/BaseUrl';
const TenderTable = () => {
    const BASE_URL=BaseUrl()
  const [tenders, setTenders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const limit = 25; // Items per page

  useEffect(() => {
    fetchTenders(currentPage);
  }, [currentPage]);

  const fetchTenders = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL+`/tender?page=${page}&limit=${limit}`);
      const data = response.data.data;
      setTenders(data.data);
      setCurrentPage(data.current_page);
      setTotalPages(data.last_page);
      setTotalItems(data.total);
    } catch (error) {
      console.error('Error fetching tenders:', error);
    }
    setLoading(false);
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div>
      <h1>Tenders</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='table-width'>
          <table className="tender-table table-responsive">
            <thead>
              <tr>
                <th>Organization</th>
                <th>NewsPaper</th>
                <th>City</th>
                <th>Date</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {tenders.map((tender) => (
                <tr key={tender.id}>
                  <td>{tender.organizationName}</td>
                  <td>{tender.newPaperName}</td>
                  <td>{tender.cityName}</td>
                  <td>{tender.date}</td>
                  <td><button><Link className='text-decoration-none' to="/tender/id">Detail</Link></button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination-controls">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            {/* <span>
              {`Rows per page: ${limit} `}
              {${(currentPage - 1) * limit + 1}-${Math.min(currentPage * limit, totalItems)} of ${totalItems}} 
            </span> */}
             <span>
              {`Rows per page: ${limit} ${(currentPage - 1) * limit + 1}-${Math.min(currentPage * limit, totalItems)} of ${totalItems}`}
            </span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TenderTable;