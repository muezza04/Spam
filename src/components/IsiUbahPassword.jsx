import { auto } from '@popperjs/core';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


const IsiUbahPassword = () => {
   const styles = {
    mainContainer: {
        backgroundColor: '#EBF3FC',
        height:'10rem',
        maxWidth: '100%',
        margin: '2rem auto',
      },
      
      backlink : {
       height:'auto',
       width: '50%',
       marginLeft:'17%',
       marginTop: '4.5rem',
       textDecoration: 'none',
       cursor: 'pointer',
       fontFamily: 'Montserrat',
       fontSize: '16px',
       fontStyle: 'normal',
       fontWeight: '700',
       color: '#6148FF'
      },
  
      iconback : {
        marginRight: '10px',
      },
  
      header: {
        marginLeft:'21%',
        marginTop: '1.5rem',
        height:'28%',
        width: '58%',
        color:'black',
  
        fontSize: '1.5rem',
        fontWeight: 'bold',
        backgroundColor:'#6148FF',
        borderRadius: '16px 16px 0px 0px',
      },
  
      title : {
        paddingTop:'15px',
        color:'white',
        fontSize: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      
      },
  
      card: {
        height: 'auto',
        maxWidth: '100%',
        backgroundColor: '#ffff',
        borderRadius: '0px 0px 8px 8px',
        border: '2px solid #6148FF',      
      },
  
      wrap: {
        marginTop:'20px',
        display:'flex',
        width: '100%',
      },

      sidebarleft: {
        padding: '1rem',
        width: '15rem',
        marginRight: '15%',
        fontSize:'14px',
        fontFamily:'Montserrat',
        fontWeight: '700',
      },

      menuItem: {
        marginBottom: '2rem',
        cursor: 'pointer',
        fontWeight: '500',
        color:'black',
        fontFamily: 'Montserrat',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: '500',
     },

     icons:{
        color: '#6148FF',
        marginRight: '16px',
     },

      menuActive: {
        color: '#6148FF',
        fontWeight: '700',
      },

      sidebarright: {
        boxSizing:'border-box',
        padding: '1rem',
        width: '100%',
        marginRight: '1rem',
        fontSize:'12px',
        fontFamily:'Montserrat',
        fontWeight: '700',
      },

      supertitle: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:'10%',
        paddingBottom: '10%',
      },

      label: {
        fontFamily: 'Poppins',
        fontSize: '12x',
        marginBottom: '0.5rem',
        fontWeight: '500',
      },

      input: {
        width: '100%',
        height: 'auto',
        borderRadius: '14px',
        border: '1px solid #D0D0D0',
        fontSize:'12px',
        marginBottom:'40px',
      },

      button: {
        backgroundColor: '#6148FF',
        borderRadius: '25px',
        width: '100%',
        color:'white',
        marginTop: '5%',
      },
      borderBottom: {
        borderBottom: '2px solid #E5E5E5', 
        paddingBottom: '7px',
        marginBottom: '15px', 
      },

    };
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newrePassword, setNewRePassword] = useState("");
   
    const onSubmit = async (e) => {
      // e.preventDefault();
  
      try {
        let data = { 
          oldPassword: oldPassword,
          newPassword: newPassword,
          newRePassword: newrePassword,
        };

        const token = localStorage.getItem("token");
        console.log(token)
        let config = {
          method: "put",
          url: `https://mooc.code69.my.id/user/password`,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          data: data,
        };
  
        // const response = await axios.request(config);
        
        const response = await axios.put("https://mooc.code69.my.id/user/password",data,{headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },})
        console.log(response)
  
  
        // navigate("/");
  
        // Temporary solution
        // window.location.href = "/";
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    };
    return (
        <div className='row'>
            <div style={styles.mainContainer}>
                <div style={styles.backlink}>
                    <svg style={styles.iconback} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16" color="#6148FF">
                     <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />
                    </svg>
                        <a href="/" className="md-3 backlink" style={{ textDecoration:"none" }}>Kembali ke Beranda  </a>
                </div>
                <div  style={styles.header}>
                    <h5  style={styles.title}>Akun</h5>
                    <div style={styles.card}>
                        <div  style={styles.wrap}>
                            <aside style={styles.sidebarleft}>
                            <div style={{...styles.menuItem, ...styles.borderBottom}}>
                                <a href='/akunprofil' style={{ textDecoration: 'none' }}>
                                <svg style={styles.icons} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                                </svg>
                                Profil Saya</a>
                            </div>
                            <div style={{...styles.menuItem, ...styles.menuActive, ...styles.borderBottom}}>
                                <svg style={styles.icons} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                                </svg>
                                Ubah Password
                            </div>
                            <div  style={{...styles.menuItem, ...styles.borderBottom}}>
                                <a href='/riwayat' style={{ textDecoration: 'none' }}>
                                <svg style={styles.icons} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                </svg>
                                Riwayat Pembayaran</a>
                            </div>
                            <div  style={{...styles.menuItem, ...styles.borderBottom}}>
                                <a href='/' style={{ textDecoration: 'none' }}>
                                <svg style={styles.icons} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                                </svg>
                                <button onClick={() => {
                                localStorage.removeItem("token");
                                window.location.href = "/";
                              }}>Keluar</button></a>
                            </div>
                            </aside>

                            <aside>
                            <div style={styles.wrap}>
                              <div style={styles.sidebarright}>
                                <div style={styles.supertitle}>
                                     <h4>Ubah Password</h4>                                   
                                </div>
                                <div>
                                    <label style={styles.label}>
                                        Masukkan Password Lama
                                    </label>
                                    <div className="input-group">
                                        <input onChange={(e)=>setOldPassword(e.target.value)} type="password" className="form-control" name="password" placeholder="********" style={styles.input}></input>
                                    </div>                                    
                                </div>
                                <div>
                                    <label style={styles.label}>
                                        Masukkan Password Baru
                                    </label>
                                    <div className="input-group">
                                        <input onChange={(e)=>setNewPassword(e.target.value)}  type="password" className="form-control" name="password" placeholder="********" style={styles.input}></input>
                                    </div>                                    
                                </div>
                                <div>
                                    <label style={styles.label}>
                                        Ulangi Password Baru
                                    </label>
                                    <div className="input-group">
                                        <input onChange={(e)=>setNewRePassword(e.target.value)} type="password" className="form-control" name="password" placeholder="********" style={styles.input}></input>
                                    </div>                                    
                                </div>
                                <div >
                                    <button style={styles.button} className="btn" onClick={() => onSubmit()}>
                                        Simpan
                                    </button>
                                </div>
                              </div>



                            </div>
                            </aside>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
};
  

export default IsiUbahPassword;
