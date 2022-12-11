import React from 'react'
// rafce
import './pricing.css';
const PricingSection = () => {
  return (
    <div className="tab-content" id="pills-tabContent">
      <div className="tab-pane fade show active" id="pills-individual" role="tabpanel" aria-labelledby="pills-individual-tab"><img src='pricing1.png' alt='pricing-photo1' />

        <div className="card">
          <div className="card-body">
            <table className="table table-borderless">

              <tr>

                <th></th>
                <th>Free</th>
                <th><i className="fa-sharp fa-solid fa-crown logo-crown">Premium</i></th>

              </tr>

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
                  <strong>
                    +9,888,000 Premium vectors
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
                    +21,593,000 Premium stock photos
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
                    +1,337,000 Premium PSD files
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
                    +8,787,000 vector icons, stickers, and logos
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
                    Built-in icon editor
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
                    No attribution required
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
                  Unlimited downloads
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
                  Unlimited collections
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
                  Priority support
                </td>
                <td>
                  <i className="fa-solid fa-x fales"></i>
                </td>
                <td>
                  <i className="fa-sharp fa-solid fa-check tick"></i>
                </td>

              </tr>



            </table>

          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="pills-teams" role="tabpanel" aria-labelledby="pills-teams-tab"><img src='pricing2.png' alt='pricing-photo2' /></div>

      <div className='btn-pricing'>
        <ul className="nav nav-pills mb-6" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-individual-tab" data-bs-toggle="pill" data-bs-target="#pills-individual" type="button" role="tab" aria-controls="pills-individual" aria-selected="true">Individual</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-teams-tab" data-bs-toggle="pill" data-bs-target="#pills-teams" type="button" role="tab" aria-controls="pills-teams" aria-selected="false">Teams</button>
          </li>
        </ul>



      </div>

    </div>


  )
}

export default PricingSection