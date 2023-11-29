import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CardSubtitle } from "react-bootstrap";
import UiUxDesign from "../../public/uiux-design.svg";
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
        <div className="row d-flex mb-2 ">
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
          <div
            className="row mt-3 justify-content-center align-items-center"
            style={{ padding: "5px 0 5px 0" }}
          >
            <div className="col d-flex">
              <Card className="card">
                <Card.Img className="card-img" src={KursusPopulerImage} />
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between">
                    <Card.Subtitle className="dark-blue100 fw-bold">
                      UI/UX Design
                    </Card.Subtitle>
                    <span className="fw-bold">
                      <Icon
                        icon="ic:round-star"
                        width="12"
                        height="12"
                        color="#F9CC00"
                      />
                      4.7
                    </span>
                  </div>
                  <Card.Title className="kursus-populer-title fw-bold">
                    Belajar Web Designer dengan Figma
                  </Card.Title>
                  <Card.Subtitle style={{ size: "8px" }}>
                    by Angela Doe
                  </Card.Subtitle>
                  <Card.Text
                    className="d-flex justify-content-between"
                    style={{ gap: "3px", padding: "3px 0 3px 0" }}
                  >
                    <span style={{ gap: "4px" }}>
                      <Icon
                        icon="mdi:badge-outline"
                        color="#73CA5C"
                        width="14"
                        height="14"
                      />
                      <a style={{ color: "#6148FF" }}>Intermediate Level</a>
                    </span>
                    <span style={{ gap: "4px" }}>
                      <Icon
                        icon="mdi:badge-outline"
                        color="#73CA5C"
                        width="14"
                        height="14"
                      />{" "}
                      <a>10 Modul </a>
                    </span>
                    <span style={{ gap: "4px" }}>
                      <Icon
                        icon="ri:time-fill"
                        color="#73CA5C"
                        width="14"
                        height="14"
                      />{" "}
                      <a>120 Menit </a>
                    </span>
                  </Card.Text>
                  <div className="">
                    <Icon icon="fluent:premium-20-filled" />
                    <Button style={{ backgroundColor: "#489CFF", color: "" }}>
                      Beli Rp 249.000
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col d-flex">
              <Card className="card">
                <Card.Img
                  className="card-img"
                  variant="top"
                  src={KursusPopulerImage}
                />
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between">
                    <Card.Subtitle className="dark-blue100 fw-bold">
                      UI/UX Design
                    </Card.Subtitle>
                    <span className="fw-bold">
                      <Icon
                        icon="ic:round-star"
                        width="12"
                        height="12"
                        color="#F9CC00"
                      />
                      4.8
                    </span>
                  </div>
                  <Card.Title className="kursus-populer-title fw-bold">
                    Belajar Web Designer dengan Figma
                  </Card.Title>
                  <Card.Subtitle style={{ size: "8px" }}>
                    by Angela Doe
                  </Card.Subtitle>
                  <Card.Text
                    className="d-flex justify-content-between"
                    style={{ gap: "3px", padding: "3px 0 3px 0" }}
                  >
                    <span style={{ gap: "4px" }}>
                      <Icon
                        icon="mdi:badge-outline"
                        color="#73CA5C"
                        width="14"
                        height="14"
                      />
                      <a style={{ color: "#6148FF" }}>Intermediate Level</a>
                    </span>
                    <span style={{ gap: "4px" }}>
                      <Icon
                        icon="mdi:badge-outline"
                        color="#73CA5C"
                        width="14"
                        height="14"
                      />
                      <a>5 Modul </a>
                    </span>
                    <span style={{ gap: "4px" }}>
                      <Icon
                        icon="ri:time-fill"
                        color="#73CA5C"
                        width="14"
                        height="14"
                      />
                      <a>60 Menit </a>
                    </span>
                  </Card.Text>
                  <div>
                    <Icon icon="fluent:premium-20-filled" />
                    <Button style={{ backgroundColor: "#489CFF", color: "" }}>
                      Beli Rp 249.000
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className="col d-flex">
              <Card className="card">
                <Card.Img
                  className="card-img"
                  variant="top"
                  src={KursusPopulerImage}
                />
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between">
                    <Card.Subtitle className="dark-blue100 fw-bold">
                      UI/UX Design
                    </Card.Subtitle>
                    <span className="fw-bold">
                      <Icon
                        icon="ic:round-star"
                        width="12"
                        height="12"
                        color="#F9CC00"
                      />
                      4.4
                    </span>
                  </div>
                  <Card.Title className="kursus-populer-title fw-bold">
                    Belajar Web Designer dengan Figma
                  </Card.Title>
                  <Card.Subtitle style={{ size: "8px" }}>
                    by Angela Doe
                  </Card.Subtitle>
                  <Card.Text
                    className="d-flex justify-content-between"
                    style={{ gap: "3px", padding: "3px 0 3px 0" }}
                  >
                    <span style={{ gap: "4px" }}>
                      <Icon
                        icon="mdi:badge-outline"
                        color="#73CA5C"
                        width="14"
                        height="14"
                      />
                      <a style={{ color: "#6148FF" }}>Advanced Level</a>
                    </span>
                    <span style={{ gap: "4px" }}>
                      <Icon
                        icon="mdi:badge-outline"
                        color="#73CA5C"
                        width="14"
                        height="14"
                      />{" "}
                      <a>10 Modul </a>
                    </span>
                    <span style={{ gap: "4px" }}>
                      <Icon
                        icon="ri:time-fill"
                        color="#73CA5C"
                        width="14"
                        height="14"
                      />{" "}
                      <a>120 Menit </a>
                    </span>
                  </Card.Text>
                  <div>
                    <Icon icon="fluent:premium-20-filled" />
                    <Button style={{ backgroundColor: "#489CFF", color: "" }}>
                      Beli Rp 249.000
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KursusPopuler;
