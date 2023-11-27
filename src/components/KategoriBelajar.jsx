import React from "react";
import Card from "react-bootstrap/Card";
import UiUxDesign from "../../public/uiux-design.svg";
import ProductManagement from "../../public/product-management.svg";
import WebDevelopment from "../../public/web-development.svg";
import AndroidDevelopment from "../../public/android-development.svg";
import IOSDevelopment from "../../public/ios-development.svg";
import DataScience from "../../public/data-science.svg";

const KategoriBelajar = () => {
  return (
    <div className="kategori-belajar">
      <div className="container">
        <div className="d-flex justify-content-between">
          <h2
            style={{ fontSize: "20px", fontWeight: "bold", margin: "12px 0" }}
          >
            Kategori Belajar
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
        <div className="row align-items-start">
          <div className="row align-items-center justify-content-center text-center ">
            <div className="col-sm-2 ">
              <Card
                style={{
                  width: "fixed(160px)",
                  height: "hug(136px)",
                  border: "none",
                }}
                className="bg-transparent"
              >
                <Card.Img variant="top" src={UiUxDesign} />
                <Card.Body>
                  <Card.Title style={{ fontSize: "12px", fontWeight: "bold" }}>
                    UI/UX Design
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-2">
              <Card
                style={{
                  width: "fixed(160px)",
                  height: "hug(136px)",
                  border: "none",
                }}
                className="bg-transparent"
              >
                <Card.Img variant="top" src={ProductManagement} />
                <Card.Body>
                  <Card.Title style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Product Management
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-2">
              <Card
                style={{
                  width: "fixed(160px)",
                  height: "hug(136px)",
                  border: "none",
                }}
                className="bg-transparent"
              >
                <Card.Img variant="top" src={WebDevelopment} />
                <Card.Body>
                  <Card.Title style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Web Development
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-2">
              <Card
                style={{
                  width: "fixed(160px)",
                  height: "hug(136px)",
                  border: "none",
                }}
                className="bg-transparent"
              >
                <Card.Img variant="top" src={AndroidDevelopment} />
                <Card.Body>
                  <Card.Title style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Android Development
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-2">
              <Card
                style={{
                  width: "fixed(160px)",
                  height: "hug(136px)",
                  border: "none",
                }}
                className="bg-transparent"
              >
                <Card.Img variant="top" src={IOSDevelopment} />
                <Card.Body>
                  <Card.Title style={{ fontSize: "12px", fontWeight: "bold" }}>
                    IOS Development
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-2">
              <Card
                style={{
                  width: "fixed(160px)",
                  height: "hug(136px)",
                  border: "none",
                }}
                className="bg-transparent"
              >
                <Card.Img variant="top" src={DataScience} />
                <Card.Body>
                  <Card.Title style={{ fontSize: "12px", fontWeight: "bold" }}>
                    Data Science
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KategoriBelajar;