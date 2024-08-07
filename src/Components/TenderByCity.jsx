import React from 'react'
import { Link } from 'react-router-dom'

export default function TenderByCity() {
  return (
    <div>
        <h2 className='text-center fw-bolder'>
        Tender By Cities
        </h2>
        <div className='container-fluid pt-5 pb-5 pl-0 pr-0'>
        <div className="row d-flex justify-content-center align-items-center gap-3 tenderByRows">
            <div className="col-md-3 col-12 ">
                <p className="text-center shadow-lg rounded-sm p-3 ">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="col-md-3 col-12">
                <p className="text-center shadow-lg rounded-sm p-3">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="col-md-3 col-12">
                <p className="text-center shadow-lg rounded-sm p-3">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="col-md-3 col-12">
                <p className="text-center shadow-lg rounded-sm p-3">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="col-md-3 col-12">
                <p className="text-center shadow-lg rounded-sm p-3">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="col-md-3 col-12">
                <p className="text-center shadow-lg rounded-sm p-3">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="col-md-3 col-12">
                <p className="text-center shadow-lg rounded-sm p-3">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="col-md-3 col-12">
                <p className="text-center shadow-lg rounded-sm p-3">Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="col-md-3 col-12">
                <p className="text-center shadow-lg rounded-sm p-3">Lorem ipsum dolor sit amet consectetur.</p>
            </div>  
            <div className="text-center">
                <Link className="btn theme-color btn-outline-success rounded-pill text-decoration-none text-white ">View Cities</Link>
            </div>
        </div>
        </div>
    </div>
  )
}
