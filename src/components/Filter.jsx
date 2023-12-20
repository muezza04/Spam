import React from "react";

const Filter = () => {
  return (
    <>
      <div className="filter">
        <div className="filter-body">
          <h5 className="filter-title fw-bold">Filter</h5>
          <div className="filter-category d-grid">
            <div className="label-filter">
              Paling Baru
              <input type="checkbox" value="" id="flexCheckDefault" />
              <span className="checkmark"></span>
            </div>
            <div className="label-filter">
              Paling Populer
              <input type="checkbox" value="" id="flexCheckDefault" />
              <span className="checkmark"></span>
            </div>
            <div className="label-filter">
              Promo
              <input type="checkbox" value="" id="flexCheckDefault" />
              <span className="checkmark"></span>
            </div>
          </div>

          <h5 className="filter-title">Kategori</h5>

          <div className="filter-category d-grid">
            <div className="label-filter">
              UI/UX Design
              <input type="checkbox" value="" id="flexCheckDefault" />
              <span className="checkmark"></span>
            </div>
            <div className="label-filter">
              Web Development
              <input type="checkbox" value="" id="flexCheckDefault" checked/>
              <span className="checkmark"></span>
            </div>
            <div className="label-filter">
              Android Development
              <input type="checkbox" value="" id="flexCheckDefault" checked/>
              <span className="checkmark"></span>
            </div>
            <div className="label-filter">
              Data Science
              <input type="checkbox" value="" id="flexCheckDefault" />
              <span className="checkmark"></span>
            </div>
            <div className="label-filter">
              Business Intelligence
              <input type="checkbox" value="" id="flexCheckDefault" />
              <span className="checkmark"></span>
            </div>
          </div>

          <h5 className="filter-title">Level Kesulitan</h5>

          <div className="filter-category d-grid">
            <div className="label-filter">
              Semua Level
              <input type="checkbox" value="" id="flexCheckDefault" />
              <span className="checkmark"></span>
            </div>
            <div className="label-filter">
              Beginner Level
              <input type="checkbox" value="" id="flexCheckDefault" />
              <span className="checkmark"></span>
            </div>
            <div className="label-filter">
              Intermediate Level
              <input type="checkbox" value="" id="flexCheckDefault" />
              <span className="checkmark"></span>
            </div>
            <div className="label-filter" >
              Advanced Level
              <input type="checkbox" value="" id="flexCheckDefault" checked/>
              <span className="checkmark"></span>
            </div>
          </div>
        </div>

        <div className="btn-hapus-filter d-flex justify-content-center">
          <button
            className="btn bg-transparent text-danger border border-0 align-items-center fw-bold"
            style={{ fontSize: "12px" }}
          >
            Hapus Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default Filter;
