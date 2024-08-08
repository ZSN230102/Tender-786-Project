/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BaseUrl from '../api/BaseUrl';

export default function TenderByOrganization() {
    const Base_Url = BaseUrl();
    const [organization, setOrganization] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchOrganization = async () => {
        try {
            const response = await axios.get(Base_Url + '/organizations');
            setOrganization(response.data.data.slice(0, 6)); // Limiting to 6 organizations
            setLoading(false);
        } catch (error) {
            console.error('Error fetching organizations:', error);
        }
    }

    useEffect(() => {
        fetchOrganization();
    }, []);

    return (
        <div>
            <h2 className='text-center fw-bolder'>
                Tender By Organizations
            </h2>
            <div className='container-fluid pt-5 pb-5 pl-0 pr-0'>
                <div className="row d-flex justify-content-center align-items-center gap-3 tenderByRows">
                    {loading ? (
                        Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="col-md-3 col-12">
                                <p className="text-center shadow-lg rounded-sm p-3 placeholder-glow">
                                    <span className="placeholder col-12"></span>
                                </p>
                            </div>
                        ))
                    ) : (
                        organization.map((org, index) => (
                            <div key={index} className="col-md-3 col-12">
                                <p className="text-center shadow-lg rounded-sm p-3">{org.name.slice(0, 25)}</p>
                            </div>
                        ))
                    )}
                    <div className="text-center">
                        <Link to="/organization" className="btn theme-color btn-outline-success rounded-pill text-decoration-none text-white">
                            View Organizations
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
