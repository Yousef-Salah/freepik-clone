import React, { useState, useEffect } from 'react'
import './related-articles.scss'
import data from './related-articles-data'

const RelatedArticles = (props) => {
  return (
    <div className="container-fluid" id="related-articles-section">
      <section className="container">
        <div className="row">
          <h2 className="h2"> Related articles</h2>
        </div>
        <div className="row">
          {data.map((article) => {
            return (
              <a className="col-12 col-sm-6 col-md-4 article p-3">
                <img
                  className="rounded mb-3"
                  src={`/assets/images/related-articles/${article.image}`}
                  alt="nothing"
                />
                <h3 className="fs-5">{article.header}</h3>
                <p className="fs-6 fw-lighter opacity-75">
                  {article.description}
                </p>
              </a>
            )
          })}
        </div>
      </section>
    </div>
  )
}

{
  /* <div className="col-3 related-articles">
<RelatedArticles title="Tips for choosing consistent images for your designs"
    heder="One of the fundamental elements of graphic design is consistency. No matter what article, design book, workshop,..."
    image={chosing} />
</div> */
}
export default RelatedArticles
