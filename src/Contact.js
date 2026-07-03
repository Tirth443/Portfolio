import React from 'react';

const Contact = () => {
  const styles = {
    
    container: {
      color:'white',
      maxWidth: '400px',
      margin: '20px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      boxShadow: '0 2px 8px rgba(16, 244, 8, 0.94)',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '15px',
      color: 'white',
    },
    item: {
      marginBottom: '10px',
      color:'orange',
    },
    label: {
      fontWeight: 'bold',
      marginRight: '5px',
      color:'orange',
    },
    link: {
      color: 'white', // LinkedIn blue
      textDecoration: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Me</h2>
      {/* <div style={styles.item}>
        <span style={styles.label}>Phone:</span>
        <span>+91 8160342442</span>
      </div> */}
      <div style={styles.item}>
        <span style={styles.label}>Email:</span>
        <a
  href="mailto:tirthoffwork@gmail.com"
  style={styles.link}
>
  tirthoffwork@gmail.com
</a>
      </div>
      <div style={styles.item}>
        <span style={styles.label}>LinkedIn:</span>
        <a
          href="https://www.linkedin.com/in/tirth-shah-043778247"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          Tirth Shah
        </a>
      </div>
    </div>
  );
};

export default Contact;
