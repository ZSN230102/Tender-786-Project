import TenderByCatagory from './TenderByCatagory'
import { Link } from 'react-router-dom'

const Categories = () => {
  return (
    <>
      <div className="container-fluid mt-5 p-3">
        <div className='m-4'>
          <Link className="text-decoration-none text-dark icon-link-hover link-underline icon-link" to="/home">
            <span className=" fw-lighter text-dark colorHover">
              <span className='link-underline p-3'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill text-" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                </svg>
              </span>
              Home /</span>
          </Link>
          <span className="text-dark  fs-6 "> Contact us  </span>
        </div>
        <div>
          <h1 className='fw-bold'>Tender by Category</h1>
          <h6>Explore the Latest Tenders Category: Private and Government Opportunities in Pakistan Discover a wealth of opportunities on BismillahTender.com – Your Gateway to Success!</h6>
          <h6 className='fw-bold text-danger'>واٹس ایپ یا ای میل پر ٹینڈر نوٹس حاصل کرنے کے لیے ابھی سبسکرائب کریں ۔ WhatsApp Now : 03254891919 - 03164484377</h6>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-12 col-12">

            <TenderByCatagory/>

          </div>
          <div className="col-lg-4 col-md-12 col-12">
            <div className=" d-flex justify-content-start flex-column mt-3">
              <h5 className="fw-bolder ">Tender By Newspapers</h5>
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

          </div>
        </div>





      </div>





    </>
  )
}

export default Categories