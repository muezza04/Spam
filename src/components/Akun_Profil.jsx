import React from 'react';

// Inline CSS styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
    fontFamily: '"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
  sidebar: {
    backgroundColor: '#f4f7fa',
    padding: '1rem',
    width: '15rem',
    borderRadius: '10px 0 0 10px',
    marginRight: '2rem',
  },
  profileContent: {
    backgroundColor: 'white',
    padding: '2rem',
    width: '30rem',
    borderRadius: '0 10px 10px 0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  menuItem: {
    marginBottom: '0.5rem',
    cursor: 'pointer',
    fontWeight: '500',
  },
  menuActive: {
    color: '#4b9ce2',
  },
  inputField: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  profileImagePlaceholder: {
    width: '7rem',
    height: '7rem',
    backgroundColor: '#ddd',
    borderRadius: '50%',
    marginBottom: '1rem',
  },
  saveButton: {
    backgroundColor: '#4b9ce2',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  label: {
    fontWeight: '600',
    display: 'block',
    marginBottom: '0.5rem',
  },
  value: {
    marginBottom: '1.5rem',
  },
};

function Akun_Profil() {
  return (
    <div className="row row align-items-center" style={{marginTop: "130px"}}>
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <div style={{ ...styles.menuItem, ...styles.menuActive }}>Profil Saya</div>
        <div style={styles.menuItem}>Ubah Password</div>
        <div style={styles.menuItem}>Riwayat Pembayaran</div>
        <div style={styles.menuItem}>Keluar</div>
      </aside>
      <div style={styles.profileContent}>
        <div style={styles.profileImagePlaceholder}></div>
        <div style={styles.value}>
          <label style={styles.label}>Nama</label>
          <div>John Doe</div>
        </div>
        <div style={styles.value}>
          <label style={styles.label}>Email</label>
          <div>johndoe@gmail.com</div>
        </div>
        <div style={styles.value}>
          <label style={styles.label}>Nomor Telepon</label>
          <div>+62 812121121121</div>
        </div>
        <input style={styles.inputField} type="text" placeholder="Masukkan Negara tempat tinggal" />
        <input style={styles.inputField} type="text" placeholder="Masukkan kota tempat tinggal" />
        <button style={styles.saveButton}>Simpan Profil Saya</button>
      </div>
    </div>
    </div>
    
  );
}

export default Akun_Profil;
