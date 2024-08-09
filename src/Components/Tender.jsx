import React from 'react';
import TenderTable from './TenderTable';
const Tender = () => {
  return (
    <>
    
    <div className="container-fluid mt-5 p-3">     
          <h1 className='fw-bold text-center'>Tender in Pakistan</h1>
          <h5 className='text-center'>State Departments, Provinces, Municipalities and State Companies</h5>
          <p>Below are all the current State Tender Notices on the site. These include tenders issued by various State Departments, Provincial Government Departments, Municipalities and State Owned Companies. Use the Search fields on the right to filter the database contents or enter any keyword in the search field to search the database.</p>
          <h6 className='fw-bold text-danger text-center'>واٹس ایپ یا ای میل پر ٹینڈر نوٹس حاصل کرنے کے لیے ابھی سبسکرائب کریں ۔ WhatsApp Now : 03254891919 - 03164484377</h6>
        
        <div className="row">
          <div className="col-lg-8 col-md-12 col-12">
          <TenderTable/>
          </div>
          <div className="col-lg-4 col-md-12 col-12">
            <div className=" d-flex justify-content-start flex-column mt-3">
       
              <div className="row">
            <div className="border-bottom border-top mt-3 mb-3 p-3 blinkingEffectOfTenderAlert">
              <div className="row">
                <div className="col-12 tenderAlerts">
                  <h1 className="text-center fs-1 fw-bolder p-3 tenderAlerts">Tender Alert</h1>
                </div>
              </div>


              <div className=" table-responsive-lg ">
                <table className="table  table-borderless ">
                  <tbody className="d-flex flex-column">
                    <tr className="d-flex justify-content-center justify-content-md-center ">
                      <td className="text-primary fst-italic fw-semibold">E-mail and WhatsApp alerts for advertisement tenders</td>
                    </tr>

                    <tr className="d-flex justify-content-center  align-items-center">

                      <td className="text-danger border-bottom fst-italic fw-semibold">For Call - 0325-4891919</td>
                    </tr>
                  </tbody>
                </table>
              </div>


              <div className="row">
                <div className="col-12">
                  <h1 className="text-center fs-1 text-dark fw-bolder p-3 tenderAlerts">ٹینڈر الرٹ</h1>
                </div>
              </div>
              <table className="table table-responsive table-borderless">
                <tbody className="d-flex flex-column">
                  <tr className="d-flex justify-content-center  ">
                    <td className="text-primary fst-italic fw-semibold " >اشتہاری ٹینڈرز کے لیے ای میل اور واٹس ایپ الرٹس</td>
                  </tr>

                  <tr className="d-flex justify-content-center  align-items-center">
                    <td className="text-danger fst-italic fw-semibold ">0325-4891919 - کال کے لیے </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-12">
                  <div className="p-3 d-flex flex-row Newspapers gap-1 flex-wrap">
                    <img src={'https://tender786.com/static/media/news%201.f03f37b4d68f3a86b179.png'} className="img-fluid rounded" alt="mini posters" />
                    <img src={'https://tender786.com/static/media/news%201.f03f37b4d68f3a86b179.png'} className="img-fluid rounded" alt="mini posters" />
                    <img src={'https://tender786.com/static/media/news%202.3438a188b9669a655e26.png'} className="img-fluid rounded" alt="mini posters" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="p-3 d-flex flex-row Newspapers gap-1 flex-wrap">
                    <img src={'https://tender786.com/static/media/news%201.f03f37b4d68f3a86b179.png'} className="img-fluid rounded" alt="mini posters" />
                    <img src={'https://tender786.com/static/media/news%201.f03f37b4d68f3a86b179.png'} className="img-fluid rounded" alt="mini posters" />
                    <img src={'https://tender786.com/static/media/news%202.3438a188b9669a655e26.png'} className="img-fluid rounded" alt="mini posters" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="p-3 d-flex flex-row Newspapers gap-1 flex-wrap">
                    <img src={'https://tender786.com/static/media/news%201.f03f37b4d68f3a86b179.png'} className="img-fluid rounded" alt="mini posters" />
                    <img src={'https://tender786.com/static/media/news%201.f03f37b4d68f3a86b179.png'} className="img-fluid rounded" alt="mini posters" />
                    <img src={'https://tender786.com/static/media/news%202.3438a188b9669a655e26.png'} className="img-fluid rounded" alt="mini posters" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        </div>  
    </>
  );
};

export default Tender;