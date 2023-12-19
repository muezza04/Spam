import React from "react";
import NavigationBar from "./NavigationBar";
import { Container } from "react-bootstrap";
import CartShopping from "../../public/cart-shopping-list.svg";
import MulaiKelas from "./MulaiKelas";
import { useNavigate } from "react-router-dom";

const PembayaranSukses = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      <NavigationBar />
      <MulaiKelas show={modalShow} onHide={() => setModalShow(false)} />
      <div className="pembayaran-sukses">
        <div className="alert-pembayaran">
          <Container>
            <div className="d-flex justify-content-center">
              <span
                className="alert border border-0 text-center mt-5 fw-bold text-white"
                style={{
                  fontSize: "16px",
                  width: "800px",
                  height: "50px",
                  background: "#73CA5C",
                  borderRadius: "12px",
                  cursor: "context-menu",
                }}
                aria-pressed="true"
              >
                Terimaksih atas pembayaran transaksi
              </span>
            </div>
          </Container>
        </div>
        <div
          className="d-grid justify-content-center mt-3 dark-blue100 fw-bold"
          style={{ fontSize: "40px" }}
        >
          <span>Selamat!</span>
          <span>
            <img
              style={{ width: "204px", height: "208px" }}
              className=""
              src={CartShopping}
            />
          </span>
        </div>
        <span className="d-grid justify-content-center text-center">
          <span className="fw-bold mb-1" style={{ fontSize: "14px" }}>
            Transaksi pemayaran kelas premiun berhasil!
          </span>
          <span style={{ fontSize: "12px" }}>
            E-receipt telah dikirim ke email.
          </span>
          <button
            className="btn btn-primary bg-dark-blue100 text-white mt-5 mb-3 rounded-pill fw-bold"
            onClick={() => setModalShow(true)}
          >
            Mulai Belajar
          </button>
          <span
            style={{ fontSize: "16px", color: "#489CFF", cursor: "pointer" }}
            className="fw-bold"
            onClick={() => navigate("/")}
          >
            kembali ke Beranda
          </span>
        </span>
      </div>
    </>
  );
};

export default PembayaranSukses;

