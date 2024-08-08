/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import './TenderList.css'; // Import your CSS file for styling
import BaseUrl from '../api/BaseUrl';
import moment from 'moment';

const TenderTable = () => {
  const BASE_URL = BaseUrl();
  const [tenders, setTenders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const limit = 25; // Items per page

  useEffect(() => {
    fetchTenders(currentPage);
  }, [currentPage]);

  const fetchTenders = async (page) => {
    try {
      const response = await axios.get(`${BASE_URL}/tender?page=${page}&limit=${limit}`);
      const data = response.data.data;
      setTenders(data.data);
      setCurrentPage(data.current_page);
      setTotalPages(data.last_page);
      setTotalItems(data.total);
      setLoading(true);
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

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTenders = tenders.filter(tender => 
    (tender.organizationName && tender.organizationName.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (tender.cityName && tender.cityName.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (tender.date && tender.date.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div>
      <h1 className='text-center'>Tenders Record</h1>
      <div className='d-flex justify-content-center align-items-center g-3'>
        <input
          type="text"
          placeholder="Search by organization, city, or date"
          value={searchQuery}
          onChange={handleSearch}
          className='mb-3 p-2 w-50 rounded-lg shadow-sm form-control'
        />
      </div>
      {loading ? (
        <div className='p-3 container shadow-lg d-flex justify-content-center flex-column table-data'>
          <table className="table table-responsive">
            <thead>
              <tr>
                <th>Organization</th>
                <th>NewsPaper</th>
                <th>City</th>
                <th>Date</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody className='theme-color'>
              {/* Placeholder rows */}
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td colSpan="5" className="placeholder-glow">
                    <span className="placeholder col-12"></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className='p-3 container shadow-lg d-flex justify-content-center flex-column table-data'>
          <table className="table table-responsive">
            <thead>
              <tr>
                <th>Organization</th>
                <th>NewsPaper</th>
                <th>City</th>
                <th>Date</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody className='theme-color'>
              {filteredTenders.map((tender) => (
                <tr key={tender.id}>
                  <td>{tender.organizationName}</td>
                  <td>{tender.newPaperName}</td>
                  <td>{tender.cityName}</td>
                  <td>{moment(tender.publishDate).format('ll')}</td>
                  <td>
                    <button className='details-btn'>
                      <Link className='text-decoration-none' to={`/tender/${tender.id}`}>Detail</Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination-controls d-flex justify-content-center gap-5 align-self-center">
            <button className='details-btn text-center' onClick={handlePrevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              {`Records= ${limit} || Pages= ${(currentPage - 1) * limit + 1}-${Math.min(currentPage * limit, totalItems)} || Total Tenders= ${totalItems}`}
            </span>
            <button className='details-btn ' onClick={handleNextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TenderTable;
