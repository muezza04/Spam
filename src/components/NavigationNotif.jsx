import React from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import BelajarWhite from "../../public/belajar-white.svg";

const NavigationNotif = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar pt-3 navbar-expand-lg navbar-background fixed-top">
      <div className="container">
        <div className="d-flex align-items-center justify-content-start">
          <Link className="navbar-brand align-items-center justify-content-center mt-3" to="/">
            <img src={BelajarWhite} />
          </Link>
          <div className="input-group" style={{ width: "526px", padding: "12px 24px 12px 24px", borderRadius: "16px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Cari Kursus Terbaik ...."
            />
            <span className="input-group-text">
              <Icon
                className=""
                icon="bx:search-alt"
                style={{ color: "white", backgroundColor: "#6148FF", borderRadius: "5px" }}
              />
            </span>
          </div>
        </div>
        <div>
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item ">
            <Icon className="icon "icon="material-symbols:" />
            <div className='col-md-6 d-none d-md-block'> 
                <img 
                src="/vector-notif.svg"
                alt='Vec Image'
                className='img-fluid'
                />
            </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationNotif;
