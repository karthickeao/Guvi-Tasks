import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes,Navigate   } from 'react-router-dom';
import './App.css';
import { useParams } from 'react-router-dom';
import eao from "./assets/eao.jpg";
import eao1 from "./assets/eao1.jpg";
import eao2 from "./assets/eao2.jpg";
import eao3 from "./assets/eao3.jpg";
import eao4 from "./assets/eao4.jpg";
import eao5 from "./assets/eao5.jpg";
import eao6 from "./assets/eao6.jpg";
import eao7 from "./assets/eao7.jpg";
import eao8 from "./assets/eao8.jpg";
import eao9 from "./assets/eao9.jpg";
import eao10 from "./assets/eao10.jpg";
import eao11 from "./assets/eao11.jpg";

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <Router>
      <div className="App">
        <header>
          <nav className="navbar">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/Services">Services</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
            </ul>
          </nav>
        </header>

        <section className="landing">
          <h1><b>Cashflow Care Takers</b></h1>
          <p className="tagline"><b>**Auditor Services**</b></p>
          <p className='tag-def'>Cashflow Caretakers are financial experts who specialize in managing, monitoring, and enhancing the cash flow of businesses across industries. Their role involves analyzing cash flow patterns, identifying potential issues, and implementing strategies to maintain a steady and positive cash flow. These professionals collaborate closely with executives, accountants, and other financial stakeholders to make informed decisions that mitigate financial risks and maximize opportunities.</p>
        </section>

        <section className="service-navigation">
          <div><Link to="/home/new-business"> <button class=" button1">New Business</button></Link></div>
          <div><Link to="/home/manage-business"><button class=" button2">Manage your Business</button></Link></div>
          <div><Link to="/home/gst"><button class=" button3">GST</button></Link></div>
          <div><Link to="/home/grow-business"><button class=" button4">Grow Your Business</button></Link></div>
        </section>

        <Routes>
        <Route path="/home/:serviceName" element={<ServiceDetails />} />
    <Route path="/home" element={<AllServices />} />
    <Route path="/" element={<Navigate to="/home/new-business" />} />

        </Routes>
      </div>
    </Router>
  );
}
const AllServices = () => {
  return (
    <div>
      {Object.keys(servicesDescription).map(key => (
        <ServiceDetails key={key} serviceName={key} />
      ))}
    </div>
  );
};
const servicesDescription = {
  'new-business': {
    title: 'New Business',
    cards: [
      {
        question:'What is New business registration?',
        description: 'Start your business in 7 days online.Start your business in 7 days online.Start your business in 7 days online.Start your business in 7 days online.Start your business in 7 days online.Start your business in 7 days online.Start your business in 7 days online.',
        image: eao,
        date: 'August 23, 2023'
      },
      {
        question:'What is  registration?',
        description: 'We offer consultancy for startups.We offer consultancy for startups.We offer consultancy for startups.We offer consultancy for startups.We offer consultancy for startups.We offer consultancy for startups.',
        image: eao1,
        date: 'August 24, 2023'
      },
      {
        question:'What is XXX registration?',
        description: 'Get your licenses and permits easily.',
        image: eao2,
        date: 'August 25, 2023'
      }
    ]
  },
  'manage-business': {
    title: 'Manage your Business',
     cards: [
      {
        question:'What is Manage your business ?',
        description: 'Start your business in 7 days online.',
        image: eao3,
        date: 'August 23, 2023'
      },
      {
        question:'What is AAA your business ?',
        description: 'We offer consultancy for startups.',
        image: eao4,
        date: 'August 24, 2023'
      },
      {
        question:'What is YYY your business ?',
        description: 'Get your licenses and permits easily.',
        image: eao5,
        date: 'August 25, 2023'
      }
    ]
  },
  'gst': {
    title: 'GST',
    cards: [
      {
        question:'What is GST registration?',
        description: 'Start your business in 7 days online.',
        image:eao6,
        date: 'August 23, 2023'
      },
      {
        question:'What is KKK your business ?',
        description: 'We offer consultancy for startups.',
        image:eao7 ,
        date: 'August 24, 2023'
      },
      {
        question:'What is Manage your business ?',
        description: 'Get your licenses and permits easily.',
        image: eao8,
        date: 'August 25, 2023'
      }
    ]
  },
  'grow-business': {
    title: 'Grow Your Business',
    cards: [
      {
        question:'What is Grow Your Business?',
        description: 'Get your GST Registration in 1 day with Expert Assistant.',
        image: eao9,
        date: 'August 23, 2023'
      },
      {
        question:'What is LLL Your Business?',
        description: 'We offer consultancy for startups.',
        image: eao10,
        date: 'August 24, 2023'
      },
      {
        question:'What is EEE Business?',
        description: 'Get your licenses and permits easily.',
        image:eao11,
        date: 'August 25, 2023'
      }
    ]
  }
};

const ServiceDetails = ({ serviceName }) => {
  serviceName = serviceName || useParams().serviceName;
  const { title, cards } = servicesDescription[serviceName];
  
  return (
    <section className="service-details">
       {cards.map((card, index) => (
      <div key={index} className="service-card">
        <img src={card.image} alt={title} />
        <p><b>{card.question}</b></p>
        {/* <p>{card.description}</p> */}
       <p>
            {card.description.length > 25 ? `${card.description.substring(0, 75)}... ` : card.description}
            {card.description.length > 25 && <span className="read-more" onClick={() => openModal(index)}>Read More</span>}
         </p>
        <footer>
          {card.date} &middot; No Comments
        </footer>
      </div>
    ))}
  </section>
  );
};

export default App;
