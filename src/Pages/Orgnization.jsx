// src/Organization.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import BaseUrl from '../api/BaseUrl';

// const Organization = () => {
//   const APIURL = BaseUrl();
//   const [organization, setOrganization] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchOrganization = async () => {
//       try {
//         const response = await axios.get(`${APIURL}/organizations`);
//         console.log(response.data); // Log the API response to debug

//         if (response.data.status) {
//           setOrganization(response.data.data[0]); // Assuming you want the first organization
//         } else {
//           setError('Failed to fetch data');
//         }
//       } catch (err) {
//         setError('Error fetching data');
//       }
//     };

//     fetchOrganization(); // Don't forget to call the function
//   }, [APIURL]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!organization) {
//     console.log('Organization is null or undefined'); // Debug log
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <div>
//         <strong>ID:</strong> {organization.id}
//       </div>
//       <div>
//         <strong>Name:</strong> {organization.name}
//       </div>
//       <div>
//         <strong>Effected Date:</strong> {new Date(organization.effectedDate).toLocaleString()}
//       </div>
//       <div>
//         <strong>Effected By:</strong> {organization.effectedBy}
//       </div>
//       <div>
//         <strong>Username:</strong> {organization.userName}
//       </div>
//     </div>
//   );
// };

// export default Organization;
