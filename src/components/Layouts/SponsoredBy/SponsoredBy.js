/* eslint-disable */
import { Link } from 'react-router-dom'
import './SponsoredBy.css'
import { useState, useEffect } from 'react'
import Spinner from '../../Search/LoadingSpinner/Spinner'
import { SponsoredByData } from '../../../utils/Defaults'
//* This component is used to display the sponsored images in the search page
//* It is a child component in the Search.js page
//? give me 7 images, and I will make it work nicely
const SponsoredBy = ({ images }) => {
  const [sponsoredImages, setSponsoredImages] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!sponsoredImages[0]?.title || sponsoredImages[0]?.title !== images[0]?.title) {
      ;(() => setLoaded(false))()
      images[0]?.title ? setSponsoredImages(images) : setSponsoredImages(SponsoredByData)
      setTimeout(() => {
        setLoaded(true)
      }, 500)
    }
  }, [images])

  return (
    <div id="sponsored-by-component">
      <div className="sections-wrapper rounded">
        <Link to="">
          <section className="bg-image">
            {loaded ? (
              sponsoredImages?.map((img) => (
                <article className="sponsor-image">
                  <img src={'/assets/images/thumb_images/' + img.img_path} alt={img.title} />
                </article>
              ))
            ) : (
              <Spinner visible={true} />
            )}
          </section>
        </Link>
        <section id="sponsor-details">
          <div className="sponsor-content">
            Sponsored results by
            <Link to="">
              <img
                src="https://freepik.cdnpk.net/img/logos/adobestock.svg"
                className="d-inline"
                alt="adobe-stock"
              />
            </Link>
            <span className="text-decoration-c" id="ten-free">
              <Link to="">Get 10 free Images</Link>
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
  )
}

export default SponsoredBy
