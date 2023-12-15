import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Otp() {
  const [otp, setOtp] = useState(new Array(6).fill(''));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className='container-fluid' style={{width: '1440x', height: '950px', top: '-987px', left: '1575px'}}> 
        <div className="row">
          {/* Left Side for the OTP Form */} 
          
          <div className='col-md-1'></div>
          <div className='col-md-6 d-flex justify-content-center otp-side'>
            <img src='/arrow-left.png'></img>
          <div className='otp-form'>
            <h4 className=''>Masukkan OTP</h4>
            <p className='text-center'>Ketik 6 digit kode yang dikirimkan ke j*****@gmail.com</p>
            <div className="form-group d-flex justify-content-center">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  className="form-control otp-input"
                  maxLength="1"
                  value={data}
                  onChange={e => handleChange(e.target, index)}
                  onFocus={e => e.target.select()}
                />
              ))}
            </div>
            <div className="text-center mt-3">
              <p>Kirim Ulang OTP dalam 60 detik</p>
            </div>
            <div class="d-grid mb-10">
            <a href='/login'><button type='submit' className='btn btn-primary' style={{width: '620px', height: '48px', top: '8px', left: '0px'}}>Simpan</button></a>
            
            </div>
            <div class="d-grid gap-2 mt-5">
            <button type="button" class="btn btn-success ">Registrasi Berhasil</button>
            </div>
          </div>

          </div>



        {/* Right Side for the image */}
        <div className="col-md-5">
           <img src="/img.svg" alt="Belajar" className="img-fluid" />
        </div>
        </div>

    </div>
    // <div className='container-fluid d-flex'style={{width: '1440x', height: '950px', top: '-987px', left: '1575px'}}>
    //   <div className="row align-items-center">
    //     {/* Left Side for the OTP form */}
    //     <div className="col-md-6 col-xs-12">
    //       <div className="otp-form">
    //         <h4 className="text-left mb-4">Masukkan OTP</h4>
    //         <p className="text-center">Ketik 6 digit kode yang dikirimkan ke j*****@gmail.com</p>
            // <div className="form-group d-flex justify-content-center">
            //   {otp.map((data, index) => (
            //     <input
            //       key={index}
            //       type="text"
            //       className="form-control otp-input"
            //       maxLength="1"
            //       value={data}
            //       onChange={e => handleChange(e.target, index)}
            //       onFocus={e => e.target.select()}
            //     />
            //   ))}
            // </div>
            // <div className="text-center mt-3">
            //   <p>Kirim Ulang OTP dalam 60 detik</p>
            // </div>
            // <div class="d-grid mb-10">
            // <a href='/login'><button type='submit' className='btn btn-primary' style={{width: '620px', height: '48px', top: '8px', left: '0px'}}>Simpan</button></a>
            
            // </div>
            // <div class="d-grid gap-2 mt-5">
            // <button type="button" class="btn btn-success ">Registrasi Berhasil</button>
            // </div>
            

            
    //       </div>
    //     </div>
        
    //     {/* Right Side for the image */}
    //     <div className="col-md-6 d-none d-md-block">
    //       <img src="/img.svg" alt="Belajar" className="img-fluid" />
    //     </div>
    //   </div>
    // </div>
  );
}

export default Otp;
