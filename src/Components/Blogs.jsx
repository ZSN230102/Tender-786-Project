import React from 'react';
import Imag01Logo from './image01.jpg';
import image02Logo from './image02.png';
import image03Logo from './image03.png';
import image04Logo from './image04.png';
import image05Logo from './image05.png';
import BackgroundImage from './BgImage.png'
import Homelogo from './Home.png';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (
    <>
           <div className="position-relative text-center text-white" style={{ height: '100vh' }} >
        <img
          src={BackgroundImage}
          alt="BgImage"
          className="position-absolute w-100 h-100 object-fit-cover"
          style={{ top: '0', left: '0', filter: 'brightness(90%)'  }} 
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1>Bismillah Tenders Blog</h1>
        </div>
      </div>
      <div className='m-4'>
      
      <Link class="text-decoration-none text-dark icon-link-hover link-underline icon-link" to ="/home">
      <span class=" fw-lighter text-dark colorHover">
      <span className='link-underline p-3'>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill text-" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
</svg>
      </span>
       Home / </span>
      </Link>
      <span class="text-dark fw-bolder fs-6 "> Blogs</span>
      <h6 className='p-3'>Blog Articles</h6>
      </div>

      <div className="container" style={{ marginTop: '100px' }}>
        <div className="row justify-content-center">
          <div className="col-md-6 mb-4">
            <div className="card shadow-lg h-100 hover-zoom">
              <div
                className="card-img-top"
                style={{
                  backgroundImage: `url(${Imag01Logo})`,
                  height: '200px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="card-body">
                <h5 className="card-title">How Tender Works</h5>
                <p className="card-text">
                  The process begins with the publication of a tender notice. Government departments and organizations
                  seeking goods, services, or construction work will publish tender notices in newspapers, on their
                  websites, and sometimes in dedicated publications. Interested bidders can obtain the tender documents
                  from the issuing authority. These documents contain detailed information about the project, technical
                  specifications, terms and conditions, eligibility criteria, and instructions for submitting bids.
                </p>
                <a href="#" className="btn btn-success">Read More</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card shadow-lg h-100 hover-zoom">
              <div
                className="card-img-top"
                style={{
                  backgroundImage: `url(${image02Logo})`,
                  height: '200px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="card-body">
                <h5 className="card-title">Renewable Energy Project: [Solar/Wind/Hydro] Power Plant</h5>
                <p className="card-text">
                  The process begins with the publication of a tender notice. Government departments and organizations
                  seeking goods, services, or construction work will publish tender notices in newspapers, on their
                  websites, and sometimes in dedicated publications. Interested bidders can obtain the tender documents
                  from the issuing authority. These documents contain detailed information about the project, technical
                  specifications, terms and conditions, eligibility criteria, and instructions for submitting bids.
                </p>
                <a href="#" className="btn btn-success">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg h-100 hover-zoom">
              <div
                className="card-img-top"
                style={{
                  backgroundImage: `url(${image03Logo})`,
                  height: '200px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="card-body">
                <h5 className="card-title">Printing and Distribution Services for Daily Newspaper</h5>
                <p className="card-text">
                  The process begins with the publication of a tender notice. Government departments and organizations
                  seeking goods, services, or construction work will publish tender notices in newspapers, on their
                  websites, and sometimes in dedicated publications. Interested bidders can obtain the tender documents
                  from the issuing authority. These documents contain detailed information about the project, technical
                  specifications, terms and conditions, eligibility criteria, and instructions for submitting bids.
                </p>
                <a href="#" className="btn btn-success">Read More</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow-lg h-100 hover-zoom">
              <div
                className="card-img-top"
                style={{
                  backgroundImage: `url(${image04Logo})`,
                  height: '200px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="card-body">
                <h5 className="card-title">Comprehensive Newspaper Printing, Distribution, and Management Services</h5>
                <p className="card-text">
                  The process begins with the publication of a tender notice. Government departments and organizations
                  seeking goods, services, or construction work will publish tender notices in newspapers, on their
                  websites, and sometimes in dedicated publications. Interested bidders can obtain the tender documents
                  from the issuing authority. These documents contain detailed information about the project, technical
                  specifications, terms and conditions, eligibility criteria, and instructions for submitting bids.
                </p>
                <a href="#" className="btn btn-success">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg h-100 hover-zoom">
              <div
                className="card-img-top"
                style={{
                  backgroundImage: `url(${image05Logo})`,
                  height: '200px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <div className="card-body">
                <h5 className="card-title">Enhancement of Electricity Infrastructure and Grid Expansion Project</h5>
                <p className="card-text">
                  The process begins with the publication of a tender notice. Government departments and organizations
                  seeking goods, services, or construction work will publish tender notices in newspapers, on their
                  websites, and sometimes in dedicated publications. Interested bidders can obtain the tender documents
                  from the issuing authority. These documents contain detailed information about the project, technical
                  specifications, terms and conditions, eligibility criteria, and instructions for submitting bids.
                </p>
                <a href="#" className="btn btn-success">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
