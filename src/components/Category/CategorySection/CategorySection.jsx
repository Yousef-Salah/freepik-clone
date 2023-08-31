import React from 'react'
import './category-section.scss'
import utils from './utils'

const CategorySection = () => (
  <section id="iamge-card-text">
    {utils.map((item, index) => (
      <div className="row" key={index.item}>
        {index % 2 === 0 ? (
          <>
            <div className="rightPargraph">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
            <div className="leftPhotoCard">
              <img src={item.img} alt="not found" />
            </div>
          </>
        ) : (
          <>
            <div className="leftPhotoCard">
              <img src={item.img} alt="not found" />
            </div>

            <div className="rightPargraph">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </>
        )}
      </div>
    ))}
  </section>
)
export default CategorySection
