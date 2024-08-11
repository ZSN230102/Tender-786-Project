 ;
import { Link } from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css';

const Contact = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Main Content Area */}
        <div className="col-md-8">
          {/* Breadcrumb Section */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-light p-3 rounded">
              <li className="breadcrumb-item">
                <Link to="/home" className="text-decoration-none text-dark">
                  <i className="bi bi-house-door-fill"></i>Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
            </ol>
          </nav>

          {/* Header Section */}
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold animate_animated animate_fadeInDown">Subscribe to Tenders</h1>
            <p className="lead animate_animated animate_fadeInUp ">Get the latest tender alerts directly to your inbox.</p>
          </div>

          {/* Email Alert Section */}
          <div className="mb-4">
            <p>Email: <a href="mailto:info@tender786.com" className="text-success fw-bold">info@tender786.com</a></p>
          </div>

          {/* Contact Us Section */}
          <div className="mb-4">
            <h2 className="fw-bold">Contact Us</h2>
            <p>We provide tenders based on your category and location through:</p>
            <ul className="list-unstyled mb-4">
              <li><i className="bi bi-envelope me-2 text-primary"></i>Email</li>
              <li><i className="bi bi-whatsapp me-2 text-success"></i>WhatsApp</li>
              <li><i className="bi bi-truck me-2 text-info"></i>Courier</li>
            </ul>
            
            <p className="mb-4">
              <strong>For further information and pricing:</strong>
            </p>
            <div className="contact-info bg-success text-white p-3 rounded shadow-sm d-inline-flex align-items-center">
  <i className="bi bi-whatsapp me-3 fs-4"></i>
  <span>
    Call or WhatsApp:
    <a 
      href="tel:+03254891919" 
      className="text-white fw-bold ms-2 me-3 text-decoration-none contact-link"
    >
      03254891919
    </a> 
    - 
    <a 
      href="tel:+03164484377" 
      className="text-white fw-bold ms-2 text-decoration-none contact-link"
    >
      03164484377
    </a>
  </span>
</div>

            <div className='mt-4'>
              <div className="btn btn-dark d-inline-flex align-items-center iconLink animate_animated animatepulse animate_infinite">
               Get in Touch
              </div>
            </div>
          </div>
          {/* Customer Service Section */}
          <div className="alert alert-success animate_animated animate_fadeIn">
            <h2 className="fw-bold">Open Customer Service</h2>
            <p>
              Our dedicated team is available 7 days a week to assist you with any inquiries or support you may need. Feel free to reach out to us anytime!
            </p>
          </div>
        </div>

        {/* Sidebar Area */}
        <div className="col-md-4 mt-5">
          <div className="p-4 rounded border bg-light shadow-sm">
            <h3 className="fw-bold mb-3">Famous Categories</h3>
            <ul className="list-unstyled">
              <li className="text-dark text-decoration-none d-block mb-2"><i className="bi bi-tag-fill text-success me-2"></i>NHA Pakistan</li>
              <li  className="text-dark text-decoration-none d-block mb-2"><i className="bi bi-tag-fill text-success me-2"></i>Railway Pakistan</li>
              <li  className="text-dark text-decoration-none d-block mb-2"><i className="bi bi-tag-fill text-success me-2"></i>Lesco Pakistan</li>
              <li  className="text-dark text-decoration-none d-block mb-2"><i className="bi bi-tag-fill text-success me-2"></i>Wapda Pakistan</li>
              <li  className="text-dark text-decoration-none d-block mb-2"><i className="bi bi-tag-fill text-success me-2"></i>SNGPL Pakistan</li>
              <li><Link to="./categories" className="text-dark fw-bold"><i className="bi bi-arrow-right-circle-fill me-2"></i>See more...</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;