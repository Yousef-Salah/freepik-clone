import './sponsor-section.css'
import SponsoredByData from '../../../utils/SponsoredByData'
import SponsorCard from './SponsorCard'

const SponsorSection = (props) => {
  return (
    <div className="mt-5" id="sponsored-by-component">
      <div className="container rounded p-5">
        <section className="row">
          {SponsoredByData.map((sponsor) => {
            return <SponsorCard image={sponsor.image} href={sponsor.href} alt={sponsor.alt} />
          })}
        </section>
        <section className="row" id="sponsor-details">
          <span className="pt-3">Sponsored results by</span>
          <a href="www.freepik.com/redirect?url=aHR0cHM6Ly9hZG9iZS5wcmYuaG4vY2xpY2svY2FtcmVmOjExMDBscjJpei9jcmVhdGl2ZXJlZjoxMTAxbDg5NTg0L3B1YnJlZjpHQTEuMi45MTk4MTA2NjYuMTY2NjI1ODgxMS9kZXN0aW5hdGlvbjpodHRwcyUzQSUyRiUyRnN0b2NrLmFkb2JlLmNvbSUyRnByb21vJTJGZmlyc3Rtb250aGZyZWU=&client_id=GA1.2.919810666.1666258811">
            <img
              src="https://freepik.cdnpk.net/img/logos/adobestock.svg"
              className="d-inline"
              alt="adobe-stock"
            />
          </a>
          <span id="ten-free">
            <a
              className="text-decoration-none"
              href="https://stock.adobe.com/promo/firstmonthfree?clickref=1011lwihvE5p&mv=affiliate&mv2=Freepik&as_camptype=&as_channel=affiliate&as_source=partnerize&as_campaign=Freepik&as_content=api&as_audience=srp&sdid=6WTV6YJ5"
            >
              Get 10 free Vevtors
            </a>
          </span>

          <span id="show-more">
            <a href="#" className="text-decoration-none">
              <span>Show more</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </span>
        </section>
      </div>
    </div>
  )
}

export default SponsorSection
