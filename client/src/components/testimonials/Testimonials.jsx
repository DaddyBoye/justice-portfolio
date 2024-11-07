import { useState } from 'react';
import TestimonialModal from './TestimonialModal';

function Testimonials() {
  const [modalData, setModalData] = useState(null);

  // Opens the modal with selected testimonial data
  const openModal = (testimonial) => setModalData(testimonial);
  // Closes the modal
  const closeModal = () => setModalData(null);

  const testimonials = [
    {
      id: 1,
      avatar: 'https://media.licdn.com/dms/image/v2/D5603AQH_PdWsLT_ObQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1727898285111?e=1736380800&v=beta&t=L5Sk_vyCgbMdo2eE3ATR-Z-eqBPKaAqQ0U5zb-mX_9M',
      name: 'Michael Tenu',
      title: 'Web Developer & Trainer at Amalitech',
      text: 'I mentored Lawson for some time in 2024 during his time as a Software Engineering Intern and Volunteer on the C4K Programme and I must say he is very hardworking, diligent with his work, very creative and a forward thinker. I wholly recommend him to any employer or for any opportunity.',
    },
    {
      id: 2,
      avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQFnlL7BTmPSNA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726118203445?e=1736380800&v=beta&t=1stlt-IVlEjeAPSycrN_jmNbHC0YsSagKUmkGoaOPDs',
      name: 'John Arthur',
      title: 'Founder at ERA AXIS',
      text: 'I had the pleasure of working closely with Lawson in a group setting, and he is one of the most capable and dedicated individuals I’ve encountered. His extensive project development experience and programming skills make him an invaluable team asset. Beyond his technical abilities, Lawson is an excellent communicator and collaborator, offering mentorship to others. I highly recommend him as a talented and forward-thinking developer and leader.',
    },
    {
      id: 3,
      avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQFZF5wz0gbd7A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718888620926?e=1736380800&v=beta&t=-wLXCg3e5-kaC5ZhPDBjiCM306KZ7ROHgPi82J1-Jkk',
      name: 'Lois Young',
      title: 'CSR Team Lead at AmaliTech',
      text: 'Lawson demonstrated strong skills in both backend and frontend development during his internship with us. He delivered high quality work with efficiency and expertise. I will recommend him for any opportunity based on his technical expertise, dedication and positive approach.',
    }
  ];


  return (
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Recommendations</h3>

      <ul className="testimonials-list has-scrollbar">
        {testimonials.map((testimonial) => (
          <li
            key={testimonial.id}
            className="testimonials-item"
            onClick={() => openModal(testimonial)}
            data-testimonials-item
          >
            <div className="content-card">
              <figure className="testimonials-avatar-box">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width="60"
                  data-testimonials-avatar
                  className='rounded-xl bg-[#3c3c3d]'
                />
              </figure>
              <h4 className="h4 testimonials-item-title" data-testimonials-title>
                {testimonial.name}
              </h4>
              <div className="testimonials-text" data-testimonials-text>
                <p>{testimonial.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Render modal only if modalData is set */}
      {modalData && <TestimonialModal data={modalData} onClose={closeModal} />}
    </section>
  );
}

export default Testimonials;
