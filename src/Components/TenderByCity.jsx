/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BaseUrl from '../api/BaseUrl';

export default function TenderByCity() {
    const Base_Url = BaseUrl();
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCities = async () => {
        try {
            const response = await axios.get(Base_Url + '/cities');
            setCities(response.data.data.slice(0, 6)); // Limiting to 6 cities

            setLoading(false);
        } catch (error) {
            console.error('Error fetching cities:', error);
        }
    }

    useEffect(() => {
        fetchCities();
    }, []);

    return (
        <div>
            <h2 className='text-center fw-bolder'>
                Tender By Cities
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
                        cities.map((city, index) => (
                            <div key={index} className="col-md-3 col-12">
                                <p className="text-center shadow-lg rounded-sm p-3">{city.name}</p>
                            </div>
                        ))
                    )}
                    <div className="text-center">
                        <Link to="/cities" className="btn theme-color btn-outline-success rounded-pill text-decoration-none text-white">
                            View Cities
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
