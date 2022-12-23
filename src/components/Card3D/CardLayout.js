import React from "react";
import Card3D from "./Card3D";
import { Cards3dData } from "./Cards3dData";
import { Link } from "react-router-dom";
const CardLayout = () => {
  return (
    <div className="row layout-3d ">
        {Cards3dData.map((val) => {
          return (
            <div className="col">
              <Link to={val.link}>
                <Card3D
                  image={require(`../../assets/images/3dmodels/${val.image}`)}
                  name={val.name}
                  avatar={require(`../../assets/images/3dmodels/avatars/${val.avatar}`)}
                  owner={val.owner}
                />
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default CardLayout;
