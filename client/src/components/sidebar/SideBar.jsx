import React from "react";
import { useToggle } from '../../hooks/useToggle';
import Xlogo from '../x-logo/XLogo';

const SideBar = () => {
  const [isSidebarActive, toggleSidebar] = useToggle(false);


  return (
    <aside className={`sidebar ${isSidebarActive ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box rounded-xl max-w-[80px] overflow-hidden md:max-w-[95px] lg:max-w-[110px]">
          <img
            src="/images/my-avatar.jpg"
            alt="Lawson Buabassah"
            width="100%"
            style={{ height: 'auto', display: 'block' }}
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Lawson Buabassah">
            Lawson Buabassah
          </h1>

          <p className="title">Software Engineer</p>
        </div>

        <button onClick={toggleSidebar} className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:buabassahlawson@gmail.com" className="contact-link">
                buabassahlawson@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+233272001700" className="contact-link">
                +233 272 001 700
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Takoradi, Ghana</address>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="construct-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Currently</p>

              <a href="#" className="contact-link">
                Working On Tutorium 
              </a>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/lawson-buabassah-792b34225/" className="social-link" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="https://x.com/eyarko_?t=6WoyQbZ1l_2NvLkT5WWvMg&s=09" className="social-link" target="_blank" rel="noopener noreferrer">
            <Xlogo style={{ width: '18px', height: '18px' }} />
            </a>
          </li>

          <li className="social-item">
            <a href="https://github.com/Law-son" className="social-link" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          
          <li className="social-item">
            <a href="https://wa.me/233272001700" className="social-link" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
