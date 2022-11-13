import "./SponsoredBy.css";
import SponsoredByData from "../../../Data/SponsoredByData"
import Sponsor from "./Sponsor";

const SponsoredBy = (props) => {
  return (
    <div className="mt-5" id="sponsored-by-component">
      <div className="container rounded p-5">
        <section className="row bg-image">
          <article className="col-3 overflow-hidden">
            <a href="https://stock.adobe.com/images/id/539813006?get_facets=1&order=relevance&safe_search=1&filters%5Bcontent_type%3Azip_vector%5D=1&clickref=1101lwhJdesG&mv=affiliate&mv2=Freepik&as_camptype=&as_channel=affiliate&as_source=partnerize&as_campaign=Freepik&as_content=api&as_audience=srp&sdid=6WTV6YJ5&asset_id=539813006" image-link="https://t4.ftcdn.net/jpg/05/37/89/69/240_F_537896903_CnboBEBXJ4FFbUeXJOnFAFVMTQaycQGI.jpg">
            </a>
          </article>
          <article className="col-3 overflow-hidden">
            <a href="https://stock.adobe.com/images/id/539813006?get_facets=1&order=relevance&safe_search=1&filters%5Bcontent_type%3Azip_vector%5D=1&clickref=1101lwhJdesG&mv=affiliate&mv2=Freepik&as_camptype=&as_channel=affiliate&as_source=partnerize&as_campaign=Freepik&as_content=api&as_audience=srp&sdid=6WTV6YJ5&asset_id=539813006">
              {/* <img
                src="https://t4.ftcdn.net/jpg/05/37/89/69/240_F_537896903_CnboBEBXJ4FFbUeXJOnFAFVMTQaycQGI.jpg"
                alt=""
              /> */}
            </a>
          </article>
          <article className="col-3 overflow-hidden">
            <a href="https://stock.adobe.com/images/id/539813006?get_facets=1&order=relevance&safe_search=1&filters%5Bcontent_type%3Azip_vector%5D=1&clickref=1101lwhJdesG&mv=affiliate&mv2=Freepik&as_camptype=&as_channel=affiliate&as_source=partnerize&as_campaign=Freepik&as_content=api&as_audience=srp&sdid=6WTV6YJ5&asset_id=539813006">
              {/* <img
                src="https://t3.ftcdn.net/jpg/05/40/06/16/240_F_540061602_IlVgsws0IqhHcpxlpOghqsEh6LO0fCx1.jpg"
                alt=""
              /> */}
            </a>
          </article>
          <article className="col-3 overflow-hidden">
            <a href="https://stock.adobe.com/images/id/539813006?get_facets=1&order=relevance&safe_search=1&filters%5Bcontent_type%3Azip_vector%5D=1&clickref=1101lwhJdesG&mv=affiliate&mv2=Freepik&as_camptype=&as_channel=affiliate&as_source=partnerize&as_campaign=Freepik&as_content=api&as_audience=srp&sdid=6WTV6YJ5&asset_id=539813006">
              {/* <img
                src="https://t4.ftcdn.net/jpg/05/36/81/01/240_F_536810188_O6akZ1GmtxWx0jySH7dXq9BVnQmYNjVq.jpg"
                alt=""
              /> */}
            </a>
          </article>
        </section>
        <section className="row" id="sponsor-details">
          <span className="pt-3">
            Sponsored results by
          </span>
          <a href="www.freepik.com/redirect?url=aHR0cHM6Ly9hZG9iZS5wcmYuaG4vY2xpY2svY2FtcmVmOjExMDBscjJpei9jcmVhdGl2ZXJlZjoxMTAxbDg5NTg0L3B1YnJlZjpHQTEuMi45MTk4MTA2NjYuMTY2NjI1ODgxMS9kZXN0aW5hdGlvbjpodHRwcyUzQSUyRiUyRnN0b2NrLmFkb2JlLmNvbSUyRnByb21vJTJGZmlyc3Rtb250aGZyZWU=&client_id=GA1.2.919810666.1666258811">
            <img src="https://freepik.cdnpk.net/img/logos/adobestock.svg" className="d-inline" alt="adobe-stock" />
          </a>
          <span className="text-decoration-c" id="ten-free">
            <a href="https://stock.adobe.com/promo/firstmonthfree?clickref=1011lwihvE5p&mv=affiliate&mv2=Freepik&as_camptype=&as_channel=affiliate&as_source=partnerize&as_campaign=Freepik&as_content=api&as_audience=srp&sdid=6WTV6YJ5">
              Get 10 free Vevtors
            </a>
          </span>
        </section>
      </div>
    </div>
  );
};

export default SponsoredBy;
