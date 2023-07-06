import React from 'react'
import { Link } from 'react-router-dom'
import articles from './Articles.utils'

import './related-articles.scss'

const RelatedArticles = () => (
  <div className="container-fluid" id="related-articles-section">
    <section className="container">
      <div className="row">
        <h2 className="h2"> Related articles</h2>
      </div>
      <div className="row">
        {articles.map((article) => (
          <div className="col-12 col-sm-6 col-md-4 p-3 article">
            <Link to="/">
              <img
                className="rounded mb-3"
                src={`/assets/images/categories/related_articles/${article.image}`}
                alt={article.header.slice(0, 7).concat('...')}
              />
              <h3 className="fs-5">{article.header}</h3>
              <p className="fs-6 fw-lighter opacity-75">
                {article.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  </div>
)

export default RelatedArticles
