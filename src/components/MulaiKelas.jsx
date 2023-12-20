import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import GambarOnboarding from "../../public/gambar-onboarding.svg";

function MulaiKelas(props) {
  const navigate = useNavigate();
  return (
    <div>
      <>
        <Modal
          {...props}
          size=""
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <div>
            <Modal.Header
              closeButton
              className=" border border-0 pb-1"
            ></Modal.Header>
            <div className="justify-content-center border border-0 ">
              <Modal.Title
                className="d-grid text-center fw-bold dark-blue100"
                id="contained-modal-title-vcenter"
                style={{ fontSize: "32px" }}
              >
                <span className="">Onboarding...</span>
              </Modal.Title>
            </div>
            <Modal.Body className="border border-0 ">
              <div
                className="d-grid text-center justify-content-center me-4"
                style={{ fontSize: "14px" }}
              >
                <div className="">
                  <img style={{width: 186, height: 150 }} className="img-fluid " src={GambarOnboarding} />
                </div>
                <ul className="fw-bold mb-3">
                  Persiapkan hal berikut untuk belajar yang maksimal:
                </ul>
                <span>Mempunyai akun Figma atau install Adobe XD</span>
                <span>Mempunyai internet minimal kecepatan 2Mbps</span>
                <span>Belajar di tempat yang nyaman</span>
              </div>
            </Modal.Body>
            <Modal.Footer className="border border-0 justify-content-center">
              <Button
                className="rounded-pill d-flex align-items-center justify-content-center bg-dark-blue100"
                style={{
                  fontSize: "16px",
                  width: "320px",
                  height: "48px",
                  gap: "8px",
                  boxShadow: "0px 4px 4px 0px #00000026",
                }}
                onClick={() => navigate("/detail-kelas")}
              >
                Ikuti Kelas
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </>
    </div>
  );
}

export default MulaiKelas;
