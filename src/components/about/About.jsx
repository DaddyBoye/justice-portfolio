import Testimonials from "../testimonials/Testimonials";
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <article className="about active" data-page="about">
      <Helmet>
        <title>Lawson Buabassah | About</title>
      </Helmet>
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I am a Creative Thinker with a passion for developing innovative
          solutions that expedite the efficiency and effectiveness of
          organizational success. I am well-versed in technology and writing
          code to create systems that are reliable and user-friendly.
        </p>

        <p>
          My expertise lies in full-stack development, enabling me to build
          robust web and mobile applications from the ground up. I enjoy
          tackling complex challenges and transforming them into intuitive
          solutions that enhance user experience. My goal is to deliver
          high-quality software that meets business objectives and exceeds user
          expectations.
        </p>
      </section>

      {/* Services */}
      <section className="service">
        <h3 className="h3 service-title">What I do</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/images/improvement.png
                "
                alt="Frontend Development icon"
                width="50"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Frontend Development</h4>

              <p className="service-item-text">
                Building fast, responsive, and accessible web applications.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/images/backend.png"
                alt="Backend Development icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Backend Development</h4>

              <p className="service-item-text">
                Building efficient server-side solutions.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/images/mobile.png"
                alt="Mobile App Development icon"
                width="50"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile App Development</h4>

              <p className="service-item-text">
                Building user-friendly mobile apps for iOS and Android.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="/images/robot.png"
                alt="Robotics Engineering icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Robotics Engineering</h4>

              <p className="service-item-text">Building autonomous robots.</p>
            </div>
          </li>
        </ul>
      </section>

      <Testimonials />

      <div className="modal-container" data-modal-container>
        <div className="overlay" data-overlay></div>

        <section className="testimonials-modal">
          <button className="modal-close-btn" data-modal-close-btn>
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <div className="modal-img-wrapper">
            <figure className="modal-avatar-box">
              <img
                src="/images/avatar-1.png"
                alt="Daniel lewis"
                width="80"
                data-modal-img
              />
            </figure>

            <img src="/images/icon-quote.svg" alt="quote icon" />
          </div>

          <div className="modal-content">
            <h4 className="h3 modal-title" data-modal-title>
              Daniel lewis
            </h4>

            <time datetime="2021-06-14">14 June, 2021</time>

            <div data-modal-text>
              <p>
                Richard was hired to create a corporate identity. We were very
                pleased with the work done. She has a lot of experience and is
                very concerned about the needs of client. Lorem ipsum dolor sit
                amet, ullamcous cididt consectetur adipiscing elit, seds do et
                eiusmod tempor incididunt ut laborels dolore magnarels alia.
              </p>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default About;
