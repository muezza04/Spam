import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Register() {
    
  return (
    <div className='container-fluid'style={{width: '1440x', height: '950px', top: '-987px', left: '1575px'}}>
        <div className='row align-items-center'>
            <div className='col-md-6' >
                <form style={{width: '452px', height: '348px', top: '301px', left: '158px'}} >
                    <h2>Registrasi</h2>
                    <div className='mb-3'>
                        <label htmlFor='username' className='form-tabel'>Name</label>
                        <input
                        type='text'
                        className='form-control rounded-pill'
                        id='name'
                        placeholder='Enter your name'
                        style={{width: '452px', height: '48px', top: '22px', left: '0px'}}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>Email</label>
                        <input
                        type='email'
                        className='form-control rounded-pill'
                        id='email'
                        placeholder='Enter your email'
                        style={{width: '452px', height: '48px', top: '22px', left: '0px'}}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input
                        type='password'
                        className='form-control rounded-pill'
                        id='password'
                        placeholder='Enter your password'
                        style={{width: '452px', height: '48px', top: '22px', left: '0px'}}
                        />
                    </div><div className='mb-3'>
                        <label htmlFor='password' className='form-label'>Phone</label>
                        <input
                        type='phone'
                        className='form-control rounded-pill'
                        id='phone'
                        placeholder='Enter your phone'
                        style={{width: '452px', height: '48px', top: '22px', left: '0px'}}
                        />
                    </div>
                    
                    <p style={{ marginTop: '10px', textAlign: 'center'}}>Sudah punya akun? <a href='/login'>Masuk di sini</a></p>
                    <a href="/OtpPage"><button type='submit' className='btn btn-primary rounded-pill' style={{width: '452px', height: '48px', top: '8px', left: '0px'}}>Register</button></a>
                </form>
            </div>
            <div className='col-md-6 d-none d-md-block'>
                <img 
                src="/img.svg"
                alt='Side Image'
                className='img-fluid'
                />
            </div>
        </div>
    </div>
  )
}

export default Register