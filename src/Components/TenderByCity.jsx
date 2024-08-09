/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import BaseUrl from '../api/BaseUrl';

export default function TenderByCatagory() {
    const Base_Url = BaseUrl();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCategories = async () => {
        try {
            const response = await axios.get(Base_Url + '/categories');
            setCategories(response.data.data.slice(0, 6)); // Limiting to 6 categories
            setLoading(false);
        } catch (error) {
            console.error('Error fetching categories:', error);
           
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <div>
            <h2 className='text-center fw-bolder'>
                Tender By Categories
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
                        categories.map((category, index) => (
                            <div key={index} className="col-md-3 col-12">
                                <p className="text-center shadow-lg rounded-sm p-3">{category.name.slice(0, 27)}</p>
                            </div>
                        ))
                    )}
                    <div className="text-center">
                        <Link to="/categories" className="btn theme-color btn-outline-success rounded-pill text-decoration-none text-white">
                            View Categories
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
