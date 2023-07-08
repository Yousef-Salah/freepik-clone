import React from 'react'
import { Link } from 'react-router-dom'
import Card3D from './Card3D'
import { Cards3dData } from './Cards3dData'

const CardLayout = () => (
  <div className="row layout-3d ">
    {Cards3dData.map((val, idx) => (
        <div className="col" key={idx.id}>
          <Link to={val.link}>
            <Card3D
              image={`assets/images/categories/3d-models/${val.image}`}
              name={val.name}
              avatar={`assets/images/categories/3d-models/${val.avatar}`}
              owner={val.owner}
            />
          </Link>
        </div>
      )
    )}
    <button
      onClick={(e) => e.preventDefault()}
      type="button"
      className="btn btn-primary  nextpage next3d"
    >
      Next Page <i className="bi bi-arrow-right"> </i>
    </button>
  </div>
)


export default CardLayout
