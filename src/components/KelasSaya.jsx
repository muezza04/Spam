import React from "react";
import NavigationBar from "./NavigationBar";

const KelasSaya = () => {
  return (
    <>
      <NavigationBar />
      <div className="kelas-saya">
        <div className="container d-flex justify-content-between">
          <h2
            style={{ fontSize: "20px", fontWeight: "bold", margin: "12px 0" }}
          >
            Kelas Berjalan
          </h2>
          <button
            className="btn d-flex align-items-center gap-2"
            style={{ fontSize: "12px" }}
          >
            <span className="fw-bold dark-blue100 justify-content-right">
              Lihat Semua{" "}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default KelasSaya;
