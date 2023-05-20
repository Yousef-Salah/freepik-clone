import React from 'react'
// rafce
import './pricing.scss'
import { Link } from 'react-router-dom'
const PricingSection = () => {
  return (
    <div className="tab-content" id="pills-tabContent">
      <div
        className="tab-pane fade show active "
        id="pills-individual"
        role="tabpanel"
        aria-labelledby="pills-individual-tab"
      >
        <img
          src="/assets/images/pricing-page/pricing1.png"
          alt="pricing-photo1"
        />
        <div className="card-sect row row-col-lg-2 row-col-1 row-col-sm-1 row-col-md-2">
          <div className="card card1">
            <div className="card-body">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th></th>
                    <th>Free</th>
                    <th>
                      <i className="fa-sharp fa-solid fa-crown logo-crown">
                        Premium
                      </i>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Thousands of free assets</td>
                    <td>
                      <i className="fa-sharp fa-solid fa-check tick"></i>
                    </td>
                    <td>
                      <i className="fa-sharp fa-solid fa-check tick"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>+9,888,000 Premium vectors</strong>
                    </td>
                    <td>
                      <i className="fa-solid fa-x fales"></i>
                    </td>
                    <td>
                      <i className="fa-sharp fa-solid fa-check tick"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>+21,593,000 Premium stock photos</strong>
                    </td>
                    <td>
                      <i className="fa-solid fa-x fales"></i>
                    </td>
                    <td>
                      <i className="fa-sharp fa-solid fa-check tick"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>+1,337,000 Premium PSD files</strong>
                    </td>
                    <td>
                      <i className="fa-solid fa-x fales"></i>
                    </td>
                    <td>
                      <i className="fa-sharp fa-solid fa-check tick"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        +8,787,000 vector icons, stickers, and logos{' '}
                        <span className="new-sp">New</span>
                      </strong>
                    </td>
                    <td>
                      <i className="fa-solid fa-x fales"></i>
                    </td>
                    <td>
                      <i className="fa-sharp fa-solid fa-check tick"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>
                        Built-in icon editor <span className="new-sp">New</span>
                      </strong>
                    </td>
                    <td>
                      <i className="fa-solid fa-x fales"></i>
                    </td>
                    <td>
                      <i className="fa-sharp fa-solid fa-check tick"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>No attribution required</strong>
                    </td>
                    <td>
                      <i className="fa-solid fa-x fales"></i>
                    </td>
                    <td>
                      <i className="fa-sharp fa-solid fa-check tick"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Unlimited downloads{' '}
                      <span className="more-info">more info</span>
                    </td>
                    <td>
                      <i className="fa-solid fa-x fales"></i>
                    </td>
                    <td>
                      <i className="fa-sharp fa-solid fa-check tick"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Unlimited collections</td>
                    <td>
                      <i className="fa-solid fa-x fales"></i>
                    </td>
                    <td>
                      <i className="fa-sharp fa-solid fa-check tick"></i>
                    </td>
                  </tr>
                  <tr>
                    <td>Priority support</td>
                    <td>
                      <i className="fa-solid fa-x fales"></i>
                    </td>
                    <td>
                      <i className="fa-sharp fa-solid fa-check tick"></i>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-section">
            <div className="card card2">
              <div className="card-body">
                <span className="best-value">Best value</span>
                <h5 className="card-title">
                  <strong className="font-strong">12 MONTHS</strong>
                </h5>
                <p className="card-text">
                  <strong className="font-strong">9 EUR*</strong>{' '}
                  <span className="color-textcard">/month</span>
                  <strong>108 EUR*</strong>
                  <span className="color-textcard">every</span>{' '}
                  <strong>12</strong>{' '}
                  <span className="color-textcard">
                    months <br></br>* VAT and local taxes may apply
                  </span>
                </p>
                <Link href="#" className="btn btn-primary btn-subs">
                  Subscribe now
                </Link>
              </div>
            </div>

            <div className="card card3">
              <div className="card-body">
                <h5 className="card-title">
                  <strong className="font-strong"> 1 MONTH</strong>{' '}
                </h5>
                <p className="card-text">
                  <strong className="font-strong">15 EUR*</strong>
                  <span className="color-textcard">/month</span>{' '}
                  <strong>15 EUR*</strong>{' '}
                  <span className="color-textcard">
                    {' '}
                    every month <br></br>* VAT and local taxes may apply{' '}
                  </span>
                </p>
                <Link className="btn btn-primary btn-subs">Subscribe now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="tab-pane fade"
        id="pills-teams"
        role="tabpanel"
        aria-labelledby="pills-teams-tab"
      >
        <img
          src="/assets/images/pricing-page/pricing2.png"
          alt="pricing-photo2"
        />
        <div className="card-section2 row row-col-lg-2 row-col-1 row-col-sm-1 row-col-md-2">
          <div className="card card-teams1">
            <div className="card-body">
              <h5 className="card-title">
                <strong>Freepik Teams plan</strong>{' '}
              </h5>

              <p className="card-text">
                Created for all those teams who want access to unlimited
                creative assets. Designed to facilitate collaborative work and
                an inexhaustible source of inspiration with the easiest
                management structure.
              </p>
              <div className="card-information">
                <p className="card-text">
                  <i className="fa-sharp fa-solid fa-check tick"></i> All the
                  benefits of a Premium plan
                </p>

                <p className="card-text">
                  <i className="fa-sharp fa-solid fa-check tick"></i>A single
                  administrator account to manage everything from it
                </p>

                <p className="card-text">
                  <i className="fa-sharp fa-solid fa-check tick"></i>{' '}
                  Personalized plan according to your needs
                </p>

                <p className="card-text">
                  <i className="fa-sharp fa-solid fa-check tick"></i> Technical
                  and legal advice
                </p>

                <p className="card-text">
                  <i className="fa-sharp fa-solid fa-check tick"></i> The
                  greater number of seats, the greater the discount
                </p>
              </div>
            </div>
          </div>
          <div className="card card-temas2">
            <div className="card-body">
              <h3 className="card-title">
                <strong>Customize your Teams plan</strong>
              </h3>
              <div className="card-tite">
                <div className="card-text2"> Billing frequency</div>
                <div className="card-text3">Number of seats </div>
              </div>
              <div className="input-value">
                <input
                  type="text"
                  className="form-control"
                  placeholder="5"
                  aria-label="5"
                ></input>
              </div>
              <div className="card-bd">
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-annual-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-annual"
                      type="button"
                      role="tab"
                      aria-controls="pills-annual"
                      aria-selected="true"
                    >
                      Annual
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-monthly-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-monthly"
                      type="button"
                      role="tab"
                      aria-controls="pills-monthly"
                      aria-selected="false"
                    >
                      Monthly
                    </button>
                  </li>
                </ul>
                <span className="save-sp">Save 10%</span>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-annual"
                    role="tabpanel"
                    aria-labelledby="pills-annual-tab"
                  >
                    <strong className="font-eur">8.06 EUR</strong> per
                    seat/month
                    <br></br> 483.84 EUR every 12 months. VAT and local taxes
                    may apply
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-monthly"
                    role="tabpanel"
                    aria-labelledby="pills-monthly-tab"
                  >
                    <strong className="font-eur">13.44 EUR </strong>per
                    seat/month 67.20 EUR every month. VAT and local taxes may
                    apply.
                  </div>
                </div>
              </div>

              <div className="btn-team">
                <Link href="#" className="btn btn-primary">
                  Create your Teams plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="btn-pricing">
        <ul className="nav nav-pills mb-6" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-individual-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-individual"
              type="button"
              role="tab"
              aria-controls="pills-individual"
              aria-selected="true"
            >
              Individual
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-teams-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-teams"
              type="button"
              role="tab"
              aria-controls="pills-teams"
              aria-selected="false"
            >
              Teams
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PricingSection
