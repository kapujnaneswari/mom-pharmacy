import React from 'react';
import './Home.css';
import doctorImage from '../assets/doctor-consultation.jpeg';
import medicineImage from '../assets/medicine-delivery.jpg';
import healthProductsImage from '../assets/health-products.jpeg';
import momImage from '../assets/mom.jpg';
import labtestImage from '../assets/labtest-home.webp';
import cardiacImage from '../assets/cardiac-care.png';
import coldImage from '../assets/cold.webp'; // Corrected variable name
import liverImage from '../assets/liver.jpg'; // Fixed duplicate variable name
import oralcareImage from '../assets/oral care.jpg'; // Corrected variable name for oral care image
import stomachImage from '../assets/stomach.jpg'; // Corrected path for stomach image
import diabeitsImage from '../assets/diabeits.jpeg'; // Corrected import

const Home = () => {
  return (
    <div className="homepage">
      <section className="hero">
        <div className="hero-text">
          <h1>Order Medicines <br /> <span>Reach You in 10 Mins!</span></h1>
          <div className="search-container">
            <input type="text" placeholder="Search for medicines and health products" />
            <button>Search</button>
          </div>  
        </div>
        <div className="hero-img">
          <img src={momImage} alt="Mom Doctor Illustration" />
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <img src={doctorImage} alt="Doctor Consultation" />
            <p>Talk to a Doctor</p>
          </div>
          <div className="service-card">
            <img src={medicineImage} alt="Medicine Delivery" />
            <p>Medicine Delivery</p>
          </div>
          <div className="service-card">
            <img src={healthProductsImage} alt="Health Products" />
            <p>Health Essentials</p>
          </div>
          <div className="service-card">
            <img src={labtestImage} alt="Lab-test at Home" />
            <p>Lab-Test At Home</p>
          </div>
        </div>
      </section>

      <section className="browse-at-health">
        <h2>Browse By Health Conditions</h2>
        <div className="Health-cards">
          <div className="health-card">
            <img src={cardiacImage} alt="Cardiac care" />
            <p>Cardiac Care</p>
          </div>
          <div className="health-card">
            <img src={diabeitsImage} alt="Diabetes" />
            <p>Diabetes Care</p>
          </div>
          <div className="health-card">
            <img src={coldImage} alt="Cold And Immunity" />
            <p>Cold And Immunity</p>
          </div>
          <div className="health-card">
            <img src={liverImage} alt="Liver Care" />
            <p>Liver Care</p>
          </div>
          <div className="health-card">
            <img src={stomachImage} alt="Stomach Care" />
            <p>Stomach Care</p>
          </div>
          <div className="health-card">
            <img src={oralcareImage} alt="Oral Care" />
            <p>Oral Care</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

