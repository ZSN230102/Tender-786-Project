 ;

const GetALatestTender = () => {
  return (
    <>
      <div className="container-fluid mt-5 py-5">
        <div>
          <h1 className='text-success text-center'>Get In Touch</h1>
        </div>
        <form>
          <div className="form-group p-3 mt-5">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-6">
                <input type="text" className="form-control" placeholder="Name" />
              </div>
              <div className="col-md-6 col-lg-6 col-6">
                <input type="email" className="form-control" placeholder="Phone Number" />
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-6 col-lg-6 col-6">
                <input type="text" className="form-control" placeholder="E-Mail" />
              </div>
              <div className="col-md-6 col-lg-6 col-6">
                <input type="text" className="form-control" placeholder="Company Name" />
              </div>
            </div>
          </div>

          <div className="row mt-3 p-3">
            <div className="col-md-6 col-lg-6 col-6">
              <select className="form-control">
                <option value="">Select Category</option>
                <option value="AGRICULTURE/SEEDS_PLANTS">AGRICULTURE / SEEDS & PLANTS</option>
                <option value="AIR_CONDITIONING_HVAC">AIR CONDITIONING ALL TYPES & HVAC</option>
                <option value="ADVERTISING_MEDIA_PRODUCTION">ADVERTISING / MEDIA PRODUCTION / SOCIAL MEDIA</option>
                <option value="PROPERTY_AUCTION_PROPERTY_SALE">PROPERTY AUCTION / PROPERTY PURCHASE / PROPERTY SALE / PROPERTY RENT / PROPERTY LEASE</option>
                <option value="AUDIO_VISUAL">AUDIO VISUAL</option>
                <option value="BANK_AUCTIONS">BANK AUCTIONS</option>
                <option value="CABLES_CONDUCTOR_TERMINATION">CABLES/CONDUCTOR/TERMINATION & JOINT KITS/INSULATORS SURGE ARRESTERS/TRANSMISSION LINE HT/LT</option>
                <option value="CONSTRUCTION_CIVIL_WORK_BUILDING">CONSTRUCTION/CIVIL WORK/BUILDING/REPAIR & MAINTENANCE/ROADS/BRIDGES</option>
                <option value="AGRICULTURE_MACHINERY">AGRICULTURE MACHINERY</option>
                <option value="AGRICULTURE/SEEDS_PLANTS">AGRICULTURE / SEEDS & PLANTS</option>
                <option value="AIR_CONDITIONING_HVAC">AIR CONDITIONING ALL TYPES & HVAC</option>
                <option value="ADVERTISING_MEDIA_PRODUCTION">ADVERTISING / MEDIA PRODUCTION / SOCIAL MEDIA</option>
                <option value="PROPERTY_AUCTION_PROPERTY_SALE">PROPERTY AUCTION / PROPERTY PURCHASE / PROPERTY SALE / PROPERTY RENT / PROPERTY LEASE</option>
                <option value="AUDIO_VISUAL">AUDIO VISUAL</option>
                <option value="BANK_AUCTIONS">BANK AUCTIONS</option>
                <option value="CABLES_CONDUCTOR_TERMINATION">CABLES/CONDUCTOR/TERMINATION & JOINT KITS/INSULATORS SURGE ARRESTERS/TRANSMISSION LINE HT/LT</option>
                <option value="CONSTRUCTION_CIVIL_WORK_BUILDING">CONSTRUCTION/CIVIL WORK/BUILDING/REPAIR & MAINTENANCE/ROADS/BRIDGES</option>
                <option value="AGRICULTURE_MACHINERY">AGRICULTURE MACHINERY</option>
                <option value="AGRICULTURE/SEEDS_PLANTS">AGRICULTURE / SEEDS & PLANTS</option>
                <option value="AIR_CONDITIONING_HVAC">AIR CONDITIONING ALL TYPES & HVAC</option>
                <option value="ADVERTISING_MEDIA_PRODUCTION">ADVERTISING / MEDIA PRODUCTION / SOCIAL MEDIA</option>
                <option value="PROPERTY_AUCTION_PROPERTY_SALE">PROPERTY AUCTION / PROPERTY PURCHASE / PROPERTY SALE / PROPERTY RENT / PROPERTY LEASE</option>
                <option value="AUDIO_VISUAL">AUDIO VISUAL</option>
                <option value="BANK_AUCTIONS">BANK AUCTIONS</option>
                <option value="CABLES_CONDUCTOR_TERMINATION">CABLES/CONDUCTOR/TERMINATION & JOINT KITS/INSULATORS SURGE ARRESTERS/TRANSMISSION LINE HT/LT</option>
                <option value="CONSTRUCTION_CIVIL_WORK_BUILDING">CONSTRUCTION/CIVIL WORK/BUILDING/REPAIR & MAINTENANCE/ROADS/BRIDGES</option>
                <option value="AGRICULTURE_MACHINERY">AGRICULTURE MACHINERY</option>
                <option value="AGRICULTURE/SEEDS_PLANTS">AGRICULTURE / SEEDS & PLANTS</option>
                <option value="AIR_CONDITIONING_HVAC">AIR CONDITIONING ALL TYPES & HVAC</option>
                <option value="ADVERTISING_MEDIA_PRODUCTION">ADVERTISING / MEDIA PRODUCTION / SOCIAL MEDIA</option>
                <option value="PROPERTY_AUCTION_PROPERTY_SALE">PROPERTY AUCTION / PROPERTY PURCHASE / PROPERTY SALE / PROPERTY RENT / PROPERTY LEASE</option>
                <option value="AUDIO_VISUAL">AUDIO VISUAL</option>
                <option value="BANK_AUCTIONS">BANK AUCTIONS</option>
                <option value="CABLES_CONDUCTOR_TERMINATION">CABLES/CONDUCTOR/TERMINATION & JOINT KITS/INSULATORS SURGE ARRESTERS/TRANSMISSION LINE HT/LT</option>
                <option value="CONSTRUCTION_CIVIL_WORK_BUILDING">CONSTRUCTION/CIVIL WORK/BUILDING/REPAIR & MAINTENANCE/ROADS/BRIDGES</option>
                <option value="AGRICULTURE_MACHINERY">AGRICULTURE MACHINERY</option>
                <option value="AGRICULTURE/SEEDS_PLANTS">AGRICULTURE / SEEDS & PLANTS</option>
                <option value="AIR_CONDITIONING_HVAC">AIR CONDITIONING ALL TYPES & HVAC</option>
                <option value="ADVERTISING_MEDIA_PRODUCTION">ADVERTISING / MEDIA PRODUCTION / SOCIAL MEDIA</option>
                <option value="PROPERTY_AUCTION_PROPERTY_SALE">PROPERTY AUCTION / PROPERTY PURCHASE / PROPERTY SALE / PROPERTY RENT / PROPERTY LEASE</option>
                <option value="AUDIO_VISUAL">AUDIO VISUAL</option>
                <option value="BANK_AUCTIONS">BANK AUCTIONS</option>
                <option value="CABLES_CONDUCTOR_TERMINATION">CABLES/CONDUCTOR/TERMINATION & JOINT KITS/INSULATORS SURGE ARRESTERS/TRANSMISSION LINE HT/LT</option>
                <option value="CONSTRUCTION_CIVIL_WORK_BUILDING">CONSTRUCTION/CIVIL WORK/BUILDING/REPAIR & MAINTENANCE/ROADS/BRIDGES</option>
                <option value="AGRICULTURE_MACHINERY">AGRICULTURE MACHINERY</option>
                <option value="AGRICULTURE/SEEDS_PLANTS">AGRICULTURE / SEEDS & PLANTS</option>
                <option value="AIR_CONDITIONING_HVAC">AIR CONDITIONING ALL TYPES & HVAC</option>
                <option value="ADVERTISING_MEDIA_PRODUCTION">ADVERTISING / MEDIA PRODUCTION / SOCIAL MEDIA</option>
                <option value="PROPERTY_AUCTION_PROPERTY_SALE">PROPERTY AUCTION / PROPERTY PURCHASE / PROPERTY SALE / PROPERTY RENT / PROPERTY LEASE</option>
                <option value="AUDIO_VISUAL">AUDIO VISUAL</option>
                <option value="BANK_AUCTIONS">BANK AUCTIONS</option>
                <option value="CABLES_CONDUCTOR_TERMINATION">CABLES/CONDUCTOR/TERMINATION & JOINT KITS/INSULATORS SURGE ARRESTERS/TRANSMISSION LINE HT/LT</option>
                <option value="CONSTRUCTION_CIVIL_WORK_BUILDING">CONSTRUCTION/CIVIL WORK/BUILDING/REPAIR & MAINTENANCE/ROADS/BRIDGES</option>
                <option value="AGRICULTURE_MACHINERY">AGRICULTURE MACHINERY</option>
                <option value="AGRICULTURE/SEEDS_PLANTS">AGRICULTURE / SEEDS & PLANTS</option>
                <option value="AIR_CONDITIONING_HVAC">AIR CONDITIONING ALL TYPES & HVAC</option>
                <option value="ADVERTISING_MEDIA_PRODUCTION">ADVERTISING / MEDIA PRODUCTION / SOCIAL MEDIA</option>
                <option value="PROPERTY_AUCTION_PROPERTY_SALE">PROPERTY AUCTION / PROPERTY PURCHASE / PROPERTY SALE / PROPERTY RENT / PROPERTY LEASE</option>
                <option value="AUDIO_VISUAL">AUDIO VISUAL</option>
                <option value="BANK_AUCTIONS">BANK AUCTIONS</option>
                <option value="CABLES_CONDUCTOR_TERMINATION">CABLES/CONDUCTOR/TERMINATION & JOINT KITS/INSULATORS SURGE ARRESTERS/TRANSMISSION LINE HT/LT</option>
                <option value="CONSTRUCTION_CIVIL_WORK_BUILDING">CONSTRUCTION/CIVIL WORK/BUILDING/REPAIR & MAINTENANCE/ROADS/BRIDGES</option>
                <option value="AGRICULTURE_MACHINERY">AGRICULTURE MACHINERY</option>
                <option value="AGRICULTURE/SEEDS_PLANTS">AGRICULTURE / SEEDS & PLANTS</option>
                <option value="AIR_CONDITIONING_HVAC">AIR CONDITIONING ALL TYPES & HVAC</option>
                <option value="ADVERTISING_MEDIA_PRODUCTION">ADVERTISING / MEDIA PRODUCTION / SOCIAL MEDIA</option>
                <option value="PROPERTY_AUCTION_PROPERTY_SALE">PROPERTY AUCTION / PROPERTY PURCHASE / PROPERTY SALE / PROPERTY RENT / PROPERTY LEASE</option>
                <option value="AUDIO_VISUAL">AUDIO VISUAL</option>
                <option value="BANK_AUCTIONS">BANK AUCTIONS</option>
                <option value="CABLES_CONDUCTOR_TERMINATION">CABLES/CONDUCTOR/TERMINATION & JOINT KITS/INSULATORS SURGE ARRESTERS/TRANSMISSION LINE HT/LT</option>
                <option value="CONSTRUCTION_CIVIL_WORK_BUILDING">CONSTRUCTION/CIVIL WORK/BUILDING/REPAIR & MAINTENANCE/ROADS/BRIDGES</option>
                <option value="AGRICULTURE_MACHINERY">AGRICULTURE MACHINERY</option>
                <option value="AGRICULTURE/SEEDS_PLANTS">AGRICULTURE / SEEDS & PLANTS</option>
                <option value="AIR_CONDITIONING_HVAC">AIR CONDITIONING ALL TYPES & HVAC</option>
                <option value="ADVERTISING_MEDIA_PRODUCTION">ADVERTISING / MEDIA PRODUCTION / SOCIAL MEDIA</option>
                <option value="PROPERTY_AUCTION_PROPERTY_SALE">PROPERTY AUCTION / PROPERTY PURCHASE / PROPERTY SALE / PROPERTY RENT / PROPERTY LEASE</option>
                <option value="AUDIO_VISUAL">AUDIO VISUAL</option>
                <option value="BANK_AUCTIONS">BANK AUCTIONS</option>
                <option value="CABLES_CONDUCTOR_TERMINATION">CABLES/CONDUCTOR/TERMINATION & JOINT KITS/INSULATORS SURGE ARRESTERS/TRANSMISSION LINE HT/LT</option>
                <option value="CONSTRUCTION_CIVIL_WORK_BUILDING">CONSTRUCTION/CIVIL WORK/BUILDING/REPAIR & MAINTENANCE/ROADS/BRIDGES</option>
                <option value="AGRICULTURE_MACHINERY">AGRICULTURE MACHINERY</option>
                <option value="AGRICULTURE/SEEDS_PLANTS">AGRICULTURE / SEEDS & PLANTS</option>
                <option value="AIR_CONDITIONING_HVAC">AIR CONDITIONING ALL TYPES & HVAC</option>
                <option value="ADVERTISING_MEDIA_PRODUCTION">ADVERTISING / MEDIA PRODUCTION / SOCIAL MEDIA</option>
                <option value="PROPERTY_AUCTION_PROPERTY_SALE">PROPERTY AUCTION / PROPERTY PURCHASE / PROPERTY SALE / PROPERTY RENT / PROPERTY LEASE</option>
                <option value="AUDIO_VISUAL">AUDIO VISUAL</option>
                <option value="BANK_AUCTIONS">BANK AUCTIONS</option>
                <option value="CABLES_CONDUCTOR_TERMINATION">CABLES/CONDUCTOR/TERMINATION & JOINT KITS/INSULATORS SURGE ARRESTERS/TRANSMISSION LINE HT/LT</option>
                <option value="CONSTRUCTION_CIVIL_WORK_BUILDING">CONSTRUCTION/CIVIL WORK/BUILDING/REPAIR & MAINTENANCE/ROADS/BRIDGES</option>
                <option value="AGRICULTURE_MACHINERY">AGRICULTURE MACHINERY</option>
                <option value="AGRICULTURE/SEEDS_PLANTS">AGRICULTURE / SEEDS & PLANTS</option>
                <option value="AIR_CONDITIONING_HVAC">AIR CONDITIONING ALL TYPES & HVAC</option>
                <option value="ADVERTISING_MEDIA_PRODUCTION">ADVERTISING / MEDIA PRODUCTION / SOCIAL MEDIA</option>
                <option value="PROPERTY_AUCTION_PROPERTY_SALE">PROPERTY AUCTION / PROPERTY PURCHASE / PROPERTY SALE / PROPERTY RENT / PROPERTY LEASE</option>
                <option value="AUDIO_VISUAL">AUDIO VISUAL</option>
                <option value="BANK_AUCTIONS">BANK AUCTIONS</option>
                <option value="CABLES_CONDUCTOR_TERMINATION">CABLES/CONDUCTOR/TERMINATION & JOINT KITS/INSULATORS SURGE ARRESTERS/TRANSMISSION LINE HT/LT</option>
                <option value="CONSTRUCTION_CIVIL_WORK_BUILDING">CONSTRUCTION/CIVIL WORK/BUILDING/REPAIR & MAINTENANCE/ROADS/BRIDGES</option>
                <option value="AGRICULTURE_MACHINERY">AGRICULTURE MACHINERY</option>
                <option value="AGRICULTURE/SEEDS_PLANTS">AGRICULTURE / SEEDS & PLANTS</option>
                <option value="AIR_CONDITIONING_HVAC">AIR CONDITIONING ALL TYPES & HVAC</option>
                <option value="ADVERTISING_MEDIA_PRODUCTION">ADVERTISING / MEDIA PRODUCTION / SOCIAL MEDIA</option>
                <option value="PROPERTY_AUCTION_PROPERTY_SALE">PROPERTY AUCTION / PROPERTY PURCHASE / PROPERTY SALE / PROPERTY RENT / PROPERTY LEASE</option>
                <option value="AUDIO_VISUAL">AUDIO VISUAL</option>
                <option value="BANK_AUCTIONS">BANK AUCTIONS</option>
                <option value="CABLES_CONDUCTOR_TERMINATION">CABLES/CONDUCTOR/TERMINATION & JOINT KITS/INSULATORS SURGE ARRESTERS/TRANSMISSION LINE HT/LT</option>
                <option value="CONSTRUCTION_CIVIL_WORK_BUILDING">CONSTRUCTION/CIVIL WORK/BUILDING/REPAIR & MAINTENANCE/ROADS/BRIDGES</option>
                <option value="AGRICULTURE_MACHINERY">AGRICULTURE MACHINERY</option>
                
              </select>
            </div>
          </div>
        </form>
        <div className='p-3 mt-2'>
          <button className='btn btn-success'>Submit</button>
        </div>
      </div>
    </>
  );
}

export default GetALatestTender;
