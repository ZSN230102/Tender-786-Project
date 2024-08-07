import { Link } from "react-router-dom"

const DetailHero = () => {
    return (
        <>
            <div className="container-fluid p-3">
                
                {/* Route row */}
                <div className="row g-0">
                    <div className="col-12 d-flex gap-1 align-items-center">
                        <Link className="text-decoration-none text-dark">
                            <svg xmlns="http//www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-border-outer" viewBox="0 0 16 16">
                                <path d="M7.5 1.906v.938h1v-.938zm0 1.875v.938h1V3.78h-1zm0 1.875v.938h1v-.938zM1.906 8.5h.938v-1h-.938zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938zm2.813 0v-.031H8.5V7.53h-.031V7.5H7.53v.031H7.5v.938h.031V8.5zm.937 0h.938v-1h-.938zm1.875 0h.938v-1h-.938zm1.875 0h.938v-1h-.938zM7.5 9.406v.938h1v-.938zm0 1.875v.938h1v-.938zm0 1.875v.938h1v-.938z" />
                                <path d="M0 0v16h16V0zm1 1h14v14H1z" />
                            </svg>
                            <span className=" fw-lighter text-dark"> tender/ </span>
                        </Link>
                        <span className="text-dark fw-bolder fs-6"> Detail Page </span>
                    </div>
                </div>
                
                {/*Advertisement row  */}
                <div className="row g-0 mt-3">
                    <div className="col-12 d-flex justify-content-center">
                        <p className="text-danger  fs-6 "> واٹس ایپ یا ای میل پر ٹینڈر نوٹس حاصل کرنے کے لیے ابھی سبسکرائب کریں ۔ WhatsApp Now : 03254891919 - 03164484377 </p>
                    </div>
                </div>

                {/* Tender  Detail Container  */}
                <div className=" shadow-lg border rounded mt-3 w-lg-100 w-md-75">
                    
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-center fs-1 text-dark fw-bolder p-3">Tender Detail</h1>
                        </div>
                    </div>

                    <table class="table table-responsive table-borderless">
                        <tbody className="d-flex flex-column flex-wrap bg-transparent">
                            <tr className="d-flex justify-content-lg-center justify-content-md-center justify-content-sm-start flex-wrap">
                                <th scope="row" >Tender Name :</th>
                                <td className="d-flex justify-content-lg-center justify-content-md-center justify-content-sm-center flex-wrap">NATIONAL ACCOUNTABILITY BUREAU ISLAMABAD TENDER</td>
                            </tr>

                            <tr className="d-flex justify-content-lg-center justify-content-md-center justify-content-sm-start flex-wrap  align-items-center">
                                <th scope="row">Organization :</th>
                                <td>NAB TENDERS</td>
                            </tr>

                            <tr className="d-flex justify-content-lg-center justify-content-md-center justify-content-sm-start flex-wrap  align-items-center">
                                <th scope="row">Tender City :</th>
                                <td>ISLAMABAD</td>
                            </tr>

                            <tr className="d-flex justify-content-lg-center justify-content-md-center justify-content-sm-start flex-wrap  align-items-center">
                                <th scope="row">News Paper :</th>
                                <td>NEWS LAHORE</td>
                            </tr>

                            <tr className="d-flex justify-content-start flex-wrap">
                                <th scope="row" className="fs-5">Categories :</th>
                            </tr>

                            <tr className="d-flex justify-content-start flex-wrap">
                                <tr>
                                    AUTO SPARE PARTS & SERVICES / BULLET PROOFINGFURNITURE/STEEL FURNITURE/PLASTIC FURNITUREMACHINERY / TOOLS / MACHINE & PLANT / NUT BOLTUPSAIR CONDITIONING ALL TYPES & HVACELECTRONICSFANSELECTRICALSTATIONARY / TONERS / PRINTING / BOOKS / SHIELD & TROPHY / ART & DRAWING / METAL CRAFTLIGHT / LED LIGHT / INTERNAL & EXTERNAL ELECTRIFICATIONCOMPUTER/HARDWARE & ACCESSORIES/SERVERS/ICT EQUIPMENT/PRINTERS /IT/OFFICE EQUIPMENTNETWORKING/FIREWALL
                                </tr>
                            </tr>

                            <tr className="d-flex justify-content-start flex-wrap">
                                <th scope="row" className="">Publish Date :</th>
                                <tr className=""> 07 August, 2024   </tr>
                            </tr>
                            
                            <tr className="d-flex justify-content-start justify-content-sm-center  fex-wrap align-items-center">
                                <div className="text-center">
                                    <Link className="btn theme-color btn-outline-success rounded-pill text-decoration-none text-white"> 
                                      
                                      <div className="row d-flex align-items-center justify-content-center m-0 p-0 gap-1 g-0" >
                                        
                                        <div className="col-lg-12  ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-cloud-arrow-down m-0 mb-1 p-0" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M7.646 10.854a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 9.293V5.5a.5.5 0 0 0-1 0v3.793L6.354 8.146a.5.5 0 1 0-.708.708z"/>
                                                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                                            </svg>
                                            <span className="m-0 mt-1 p-0 fw-semibold "> Download Tender</span>

                                        </div>
                                        
                                       
                                      </div>

                                    </Link>
                                </div>                                
                            </tr>

                        </tbody>
                    </table>
                </div>

                {/* Tender poster */}
                <div className="container-fluid m-1 mt-5">
                    <div className="row">
                        <div className="col-lg-12  d-flex justify-content-center">
                            <img src={'https://online.tender786.com/uploads/tender786-1722952598385-5dt016j3.jpg'} className="img-fluid" alt="Poster" />
                        </div>
                    </div>
                </div>

                {/* tender Alert msg */}
                <div className="border-bottom border-top mt-3 mb-3 p-3 blinkingEffectOfTenderAlert">
                <div className="row">
                        <div className="col-12 tenderAlerts">
                            <h1 className="text-center fs-1 fw-bolder p-3 tenderAlerts">Tender Alert</h1>
                        </div>
                </div>
                <table class="table table-responsive table-borderless ">
                        <tbody className="d-flex flex-column">
                            <tr className="d-flex justify-content-center justify-content-md-center ">
                                <td  className="text-primary fst-italic fw-semibold">E-mail and WhatsApp alerts for advertisement tenders</td>
                            </tr>

                            <tr className="d-flex justify-content-center  align-items-center">
                                
                                <td className="text-danger border-bottom fst-italic fw-semibold">For Call - 0325-4891919</td>
                            </tr>
                        </tbody>
                </table>
               


                <div className="row">
                        <div className="col-12">
                            <h1 className="text-center fs-1 text-dark fw-bolder p-3 tenderAlerts">ٹینڈر الرٹ</h1>
                        </div>
                </div>
                <table class="table table-responsive table-borderless">
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

                {/* More Newspaper Row */}
                <div className=" d-flex justify-content-start flex-column mt-3">
                    <h5 className="fw-bolder ">More Newspapers</h5>
                    <div className="p-3 d-flex flex-row moreNewspapers gap-1 flex-wrap">
                    <img src={'https://tender786.com/static/media/news%201.f03f37b4d68f3a86b179.png'} className="img-fluid rounded" alt="mini posters" />
                    <img src={'https://tender786.com/static/media/news%201.f03f37b4d68f3a86b179.png'} className="img-fluid rounded" alt="mini posters" />
                    <img src={'https://tender786.com/static/media/news%202.3438a188b9669a655e26.png'} className="img-fluid rounded" alt="mini posters" />
                    <img src={'https://tender786.com/static/media/news%201.f03f37b4d68f3a86b179.png'} className="img-fluid rounded" alt="mini posters" />
                    <img src={'https://tender786.com/static/media/news%201.f03f37b4d68f3a86b179.png'} className="img-fluid rounded" alt="mini posters" />
                    <img src={'https://tender786.com/static/media/news%201.f03f37b4d68f3a86b179.png'} className="img-fluid rounded" alt="mini posters" />
                    <img src={'https://tender786.com/static/media/news%201.f03f37b4d68f3a86b179.png'} className="img-fluid rounded" alt="mini posters" />
                    <img src={'https://tender786.com/static/media/news%201.f03f37b4d68f3a86b179.png'} className="img-fluid rounded" alt="mini posters" />
                    <img src={'https://tender786.com/static/media/news%201.f03f37b4d68f3a86b179.png'} className="img-fluid rounded" alt="mini posters" />
                    <img src={'https://tender786.com/static/media/news%201.f03f37b4d68f3a86b179.png'} className="img-fluid rounded" alt="mini posters" />
                    </div>
                </div>

                

            </div>
        </>
    )
}

export default DetailHero