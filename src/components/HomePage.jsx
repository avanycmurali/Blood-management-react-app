import React from 'react'
import NavigationBar from './NavigationBar';


function HomePage() {
  return (
    <div
    
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
        <NavigationBar/>
      {/* Navbar */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        

        
      </header>

      {/* Hero Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "80vh",
          padding: "20px",
        }}
      >
        <h1 style={{ color: "#c62828", fontSize: "48px" }}>
          Donate Blood, Save Lives
        </h1>

        <p
          style={{
            maxWidth: "600px",
            color: "#555",
            fontSize: "18px",
            lineHeight: "1.6",
          }}
        >
          Join our blood donation community and help connect donors with
          patients in need. One donation can save multiple lives.
        </p>

       
      </div>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "15px",
          backgroundColor: "#fff",
          color: "#666",
        }}
      >
        © 2026 BloodCare. All rights reserved.
      </footer>
    </div>
  );
}

const linkStyle = {
  marginLeft: "20px",
  textDecoration: "none",
  color: "#333",
  fontWeight: "bold",
};

const primaryButton = {
  backgroundColor: "#c62828",
  color: "white",
  border: "none",
  padding: "12px 25px",
  borderRadius: "25px",
  marginRight: "10px",
  cursor: "pointer",
  fontSize: "16px",
};

const secondaryButton = {
  backgroundColor: "white",
  color: "#c62828",
  border: "2px solid #c62828",
  padding: "12px 25px",
  borderRadius: "25px",
  cursor: "pointer",
  fontSize: "16px",
};
   
export default HomePage