import { Link } from "react-router-dom";
import "./SponsoredBy.css";
//* This component is used to display the sponsored images in the search page
//* It is a child component in the Search.js page
//? give me about 7-9 images, and I will make it work
const SponsoredBy = ({ images }) => {
  console.log(images);
  return (
    <div id="sponsored-by-component">
      <div className="sections-wrapper rounded">
        <section className="bg-image">
          {images.map((img) => (
            <article className="sponsor-image">
              {/* <a href="https://stock.adobe.com/images/id/539813006?get_facets=1&order=relevance&safe_search=1&filters%5Bcontent_type%3Azip_vector%5D=1&clickref=1101lwhJdesG&mv=affiliate&mv2=Freepik&as_camptype=&as_channel=affiliate&as_source=partnerize&as_campaign=Freepik&as_content=api&as_audience=srp&sdid=6WTV6YJ5&asset_id=539813006"></a> */}
              <img
                src={"/assets/images/thumb_images/" + img.img_path}
                alt={img.title}
              />
            </article>
          ))}
        </section>
        <section id="sponsor-details">
          <div className="sponsor-content">
            Sponsored results by
            <a href="www.freepik.com/redirect?url=aHR0cHM6Ly9hZG9iZS5wcmYuaG4vY2xpY2svY2FtcmVmOjExMDBscjJpei9jcmVhdGl2ZXJlZjoxMTAxbDg5NTg0L3B1YnJlZjpHQTEuMi45MTk4MTA2NjYuMTY2NjI1ODgxMS9kZXN0aW5hdGlvbjpodHRwcyUzQSUyRiUyRnN0b2NrLmFkb2JlLmNvbSUyRnByb21vJTJGZmlyc3Rtb250aGZyZWU=&client_id=GA1.2.919810666.1666258811">
              <img
                src="https://freepik.cdnpk.net/img/logos/adobestock.svg"
                className="d-inline"
                alt="adobe-stock"
              />
            </a>
            <span className="text-decoration-c" id="ten-free">
              <a href="https://stock.adobe.com/promo/firstmonthfree?clickref=1011lwihvE5p&mv=affiliate&mv2=Freepik&as_camptype=&as_channel=affiliate&as_source=partnerize&as_campaign=Freepik&as_content=api&as_audience=srp&sdid=6WTV6YJ5">
                Get 10 free Images
              </a>
            </span>
          </div>
          <div className="explore">
            <Link href="/1234" className="explore-btn">
              Show more <i className="fa-solid fa-arrow-right right-arrow"></i>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SponsoredBy;

