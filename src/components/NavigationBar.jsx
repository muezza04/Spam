import React from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import BelajarWhite from "../../public/belajar-white.svg";

const NavigationBar = () => {
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
            <Icon className="icon "icon="material-symbols:login" />
              <button
                className="btn text-white"
                onClick={() => navigate("/login")}
              >
                Masuk
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
