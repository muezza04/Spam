import React from 'react';

const NotificationItem = ({ type, message, date, isNew }) => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1rem',
      fontSize: '0.9rem',
      padding: '0.5rem',
      backgroundColor: isNew ? '#f0f7ff' : 'transparent',
    },
    icon: {
      // Placeholder style, replace with actual icon style
      marginRight: '0.5rem',
    },
    content: {
      marginLeft: '0.5rem',
    },
    date: {
      color: '#aaa',
      fontSize: '0.8rem',
      marginLeft: 'auto',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.icon}>{/* Icon based on type */}</div>
      <div style={styles.content}>
        <strong>{type}</strong>
        <p>{message}</p>
      </div>
      <div style={styles.date}>{date}</div>
    </div>
  );
};

const Notifications = () => {
  const styles = {
    mainContainer: {
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem',
      maxWidth: '900px',
      margin: '2rem auto',
      backgroundColor: '#fff',
      borderRadius: '0px 0px 8px 8px',
      border: '2px solid #6148FF',
      },
    header: {
      color:'black',
      marginBottom: '2rem',
      fontSize: '1.5rem',
      fontWeight: 'bold',
      backgroundColor:'#6148FF'
    },
  };

  // Example notifications data
  const notifications = [
    { type: 'Promosi', message: 'Dapatkan Potongan 50% selama Bulan Maret! Syarat dan Ketentuan berlaku!', date: '2 Maret, 12:00', isNew: true },
    { type: 'Notifikasi', message: 'Password berhasil diubah', date: '1 Maret, 10:00', isNew: false },
    // ... other notifications
  ];

  return (
    <div className="row  align-items-center">
      <div style={styles.mainContainer}>
        <div style={styles.header}>Notifikasi</div>
        {notifications.map((notification, index) => (
          <NotificationItem
            key={index}
            type={notification.type}
            message={notification.message}
            date={notification.date}
            isNew={notification.isNew}
          />
        ))}
      </div>
    </div>
    
  );
};

export default Notifications;
