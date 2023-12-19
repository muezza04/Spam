import React from "react";
import Card from "react-bootstrap/Card";
import { Icon } from "@iconify/react";
import KursusPopulerImage from "../../public/kursus-populer-image.svg";

const KursusPopuler = () => {
  return (
    <div className="kursus-populer">
      <div className="container my-3">
        <div className="d-flex justify-content-between mb-2">
          <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
            Kursus Populer
          </h2>
          <button
            className="btn d-flex align-items-center gap-2"
            style={{ fontSize: "12px", background: "transparent" }}
          >
            <span className="fw-bold dark-blue100 justify-content-right">
              Lihat Semua{" "}
            </span>
          </button>
        </div>
        <div className="row row-cols-auto  d-flex mb-2 ">
          <div className="col align-items-center d-flex gap-4">
            <button className="btn rounded-pill btn-sm">All</button>
            <button className="btn rounded-pill btn-sm">Data Science</button>

            <button
              type="button"
              className="btn rounded-pill btn-sm active"
              data-bs-toggle="button"
            >
              UI/UX Design
            </button>
            <button className="btn rounded-pill btn-sm">
              Android Development
            </button>

            <button className="btn rounded-pill btn-sm">Web Development</button>
            <button className="btn rounded-pill btn-sm">IOS Development</button>

            <button className="btn rounded-pill btn-sm">
              Business Intelligence
            </button>
          </div>
        </div>
        <div className="listing row row-cols-3 mt-4 justify-content-center align-items-center">
          <div className="col d-flex gap-4">
            <Card className="card" style={{ borderRadius: "1.3rem" }}>
              <Card.Img className="card-img" src={KursusPopulerImage} />
              <Card.Body className="row">
                <div className="col-8 d-flex align-items-center justify-content-between">
                  <Card.Subtitle
                    className="dark-blue100 fw-bold"
                    style={{ fontSize: "10px", marginTop: "-24px" }}
                  >
                    UI/UX Design
                  </Card.Subtitle>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-end">
                  <span
                    className="fw-bold d-flex"
                    style={{ marginTop: "-12px" }}
                  >
                    <Icon
                      icon="ic:round-star"
                      width="12"
                      height="12"
                      color="#F9CC00"
                    />
                    <p style={{ fontSize: "10px" }}>4.7</p>
                  </span>
                </div>
                <div style={{ marginTop: "-12px" }}>
                  <Card.Title
                    className="kursus-populer-title fw-bold"
                    style={{ fontSize: "10px" }}
                  >
                    Belajar Web Designer dengan Figma
                  </Card.Title>
                  <Card.Subtitle
                    className="fw-bold"
                    style={{ fontSize: "8px" }}
                  >
                    by Angela Doe
                  </Card.Subtitle>
                </div>
                <Card.Text
                  className="d-flex justify-content-between fw-bold"
                  style={{ gap: "3px", padding: "3px 0 3px 0" }}
                >
                  <span
                    className="col-4"
                    style={{
                      gap: "4px",
                      marginLeft: "10px",
                      fontSize: "8px",
                    }}
                  >
                    <Icon
                      icon="mdi:badge-outline"
                      color="#73CA5C"
                      width="14"
                      height="14"
                    />
                    <a style={{ color: "#6148FF" }}>Intermediate Level</a>
                  </span>
                  <span className="col" style={{ gap: "4px", fontSize: "8px" }}>
                    <Icon
                      icon="clarity:book-line"
                      color="#73CA5C"
                      width="14"
                      height="14"
                    />{" "}
                    <a>10 Modul </a>
                  </span>
                  <span className="col" style={{ gap: "4px", fontSize: "8px" }}>
                    <Icon
                      icon="ri:time-fill"
                      color="#73CA5C"
                      width="14"
                      height="14"
                    />{" "}
                    <a>120 Menit </a>
                  </span>
                </Card.Text>
                <div
                  className="col-8 btn btn-sm rounded-pill text-white fw-bold align-items-center "
                  style={{
                    gap: "5px",
                    marginTop: "-15px",
                    marginLeft: "12px",
                    backgroundColor: "#489CFF",
                    border: "none",
                    width: "143px",
                    padding: ".10rem",
                  }}
                >
                  <Icon
                    icon="fluent:premium-20-filled"
                    className="light-blue5"
                  />
                  <span className="me-3 ms-1 light-blue5" style={{ fontSize: "10px"}}>
                    Beli
                  </span>
                  <span className="light-blue5 " style={{ fontSize: "10px" }}>
                    Rp 249.000
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col d-flex gap-4">
            <Card className="card" style={{ borderRadius: "1.3rem" }}>
              <Card.Img className="card-img" src={KursusPopulerImage} />
              <Card.Body className="row">
                <div className="col-8 d-flex align-items-center justify-content-between">
                  <Card.Subtitle
                    className="dark-blue100 fw-bold"
                    style={{ fontSize: "10px", marginTop: "-24px" }}
                  >
                    UI/UX Design
                  </Card.Subtitle>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-end">
                  <span
                    className="fw-bold d-flex"
                    style={{ marginTop: "-12px" }}
                  >
                    <Icon
                      icon="ic:round-star"
                      width="12"
                      height="12"
                      color="#F9CC00"
                    />
                    <p style={{ fontSize: "10px" }}>4.7</p>
                  </span>
                </div>
                <div style={{ marginTop: "-12px" }}>
                  <Card.Title
                    className="kursus-populer-title fw-bold"
                    style={{ fontSize: "10px" }}
                  >
                    Belajar Web Designer dengan Figma
                  </Card.Title>
                  <Card.Subtitle
                    className="fw-bold"
                    style={{ fontSize: "8px" }}
                  >
                    by Angela Doe
                  </Card.Subtitle>
                </div>
                <Card.Text
                  className="d-flex justify-content-between fw-bold"
                  style={{ gap: "3px", padding: "3px 0 3px 0" }}
                >
                  <span
                    className="col-4"
                    style={{
                      gap: "4px",
                      marginLeft: "10px",
                      fontSize: "8px",
                    }}
                  >
                    <Icon
                      icon="mdi:badge-outline"
                      color="#73CA5C"
                      width="14"
                      height="14"
                    />
                    <a style={{ color: "#6148FF" }}>Intermediate Level</a>
                  </span>
                  <span className="col" style={{ gap: "4px", fontSize: "8px" }}>
                    <Icon
                      icon="clarity:book-line"
                      color="#73CA5C"
                      width="14"
                      height="14"
                    />{" "}
                    <a>10 Modul </a>
                  </span>
                  <span className="col" style={{ gap: "4px", fontSize: "8px" }}>
                    <Icon
                      icon="ri:time-fill"
                      color="#73CA5C"
                      width="14"
                      height="14"
                    />{" "}
                    <a>120 Menit </a>
                  </span>
                </Card.Text>
                <div
                  className="col-8 btn btn-sm rounded-pill text-white fw-bold align-items-center"
                  style={{
                    gap: "5px",
                    marginTop: "-15px",
                    marginLeft: "12px",
                    backgroundColor: "#489CFF",
                    border: "none",
                    width: "143px",
                    padding: ".10rem",
                  }}
                >
                  <Icon
                    icon="fluent:premium-20-filled"
                    className="light-blue5"
                  />
                  <span className="me-3 ms-1 light-blue5" style={{ fontSize: "10px" }}>
                    Beli
                  </span>
                  <span className="light-blue5" style={{ fontSize: "10px" }}>
                    Rp 249.000
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col d-flex gap-4">
            <Card className="card" style={{ borderRadius: "1.3rem" }}>
              <Card.Img className="card-img" src={KursusPopulerImage} />
              <Card.Body className="row">
                <div className="col-8 d-flex align-items-center justify-content-between">
                  <Card.Subtitle
                    className="dark-blue100 fw-bold"
                    style={{ fontSize: "10px", marginTop: "-24px" }}
                  >
                    UI/UX Design
                  </Card.Subtitle>
                </div>
                <div className="col-4 d-flex align-items-center justify-content-end">
                  <span
                    className="fw-bold d-flex"
                    style={{ marginTop: "-12px" }}
                  >
                    <Icon
                      icon="ic:round-star"
                      width="12"
                      height="12"
                      color="#F9CC00"
                    />
                    <p style={{ fontSize: "10px" }}>4.7</p>
                  </span>
                </div>
                <div style={{ marginTop: "-12px" }}>
                  <Card.Title
                    className="kursus-populer-title fw-bold"
                    style={{ fontSize: "10px" }}
                  >
                    Belajar Web Designer dengan Figma
                  </Card.Title>
                  <Card.Subtitle
                    className="fw-bold"
                    style={{ fontSize: "8px" }}
                  >
                    by Angela Doe
                  </Card.Subtitle>
                </div>
                <Card.Text
                  className="d-flex justify-content-between fw-bold"
                  style={{ gap: "3px", padding: "3px 0 3px 0" }}
                >
                  <span
                    className="col-4"
                    style={{
                      gap: "4px",
                      marginLeft: "10px",
                      fontSize: "8px",
                    }}
                  >
                    <Icon
                      icon="mdi:badge-outline"
                      color="#73CA5C"
                      width="14"
                      height="14"
                    />
                    <a style={{ color: "#6148FF" }}>Intermediate Level</a>
                  </span>
                  <span className="col" style={{ gap: "4px", fontSize: "8px" }}>
                    <Icon
                      icon="clarity:book-line"
                      color="#73CA5C"
                      width="14"
                      height="14"
                    />{" "}
                    <a>10 Modul </a>
                  </span>
                  <span className="col" style={{ gap: "4px", fontSize: "8px" }}>
                    <Icon
                      icon="ri:time-fill"
                      color="#73CA5C"
                      width="14"
                      height="14"
                    />{" "}
                    <a>120 Menit </a>
                  </span>
                </Card.Text>
                <div
                  className="col-8 btn btn-sm rounded-pill text-white fw-bold align-items-center"
                  style={{
                    gap: "5px",
                    marginTop: "-15px",
                    marginLeft: "12px",
                    backgroundColor: "#489CFF",
                    border: "none",
                    width: "143px",
                    padding: ".10rem",
                  }}
                >
                  <Icon
                    icon="fluent:premium-20-filled"
                    className="light-blue5"
                  />
                  <span className="me-3 ms-1 light-blue5" style={{ fontSize: "10px" }}>
                    Beli
                  </span>
                  <span className="light-blue5" style={{ fontSize: "10px" }}>
                    Rp 249.000
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KursusPopuler;
