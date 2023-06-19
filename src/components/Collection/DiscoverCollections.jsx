import React from 'react'
import { Link } from 'react-router-dom'
import { DiscoverCollectionList } from '../../utils/Collections'
import './discover-collections.scss'

const DiscoverCollections = () => (
  <div className="discover-collection-row">
    {DiscoverCollectionList.map((item) => (
      <div className="collection-card" key={item.toString()}>
        <Link to={'/search/'.concat(item.discoverpara)}>
          <div className="media-section">
            <div className="col-6 discover-collection-col">
              <div className="row discover-collection-row2">
                <img
                  src={`assets/images/collections/collection_cards/${item.link}`}
                  className="discover-img1"
                  alt="d-img"
                />
              </div>
              <div className="row discover-collection-row3">
                <img
                  src={`assets/images/collections/collection_cards/${item.link2}`}
                  className="discover-img2"
                  alt="d-img"
                />
              </div>
            </div>
            <div className="col-6 discover-collection-col">
              <img
                src={`assets/images/collections/collection_cards/${item.link3}`}
                className="discover-img3"
                alt="d-img"
              />
            </div>
          </div>
          <div className="collection-card-info">
            <div className="para-col">
              <p className="discover-para">{item.discoverpara}</p>
            </div>
            <div className="">
              <div className="dropdown-div">
                <button
                  className="discover-dropDown"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-three-dots-vertical" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <button className="dropdown-item" type="button">
                      Share
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" type="button">
                      Follow
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="discover-resources">{item.discoverresource}</p>
        </Link>
      </div>
    ))}
  </div>
)
export default DiscoverCollections
