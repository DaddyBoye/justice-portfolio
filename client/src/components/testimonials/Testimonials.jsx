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
      avatar: '/images/avatar-1.png',
      name: 'Daniel lewis',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. He is a very talented designer and he is very good at what he does. Richard was hired to create a corporate identity. We were very pleased with the work done. He is a very talented designer and he is very good at what he does. Richard was hired to create a corporate identity. We were very pleased with the work done. He is a very talented designer and he is very good at what he does.',
    },
    {
      id: 2,
      avatar: '/images/avatar-2.png',
      name: 'Jessica miller',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. He is a very professional and very good at what he does.',
    },
    {
      id: 3,
      avatar: '/images/avatar-3.png',
      name: 'Emily evans',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. He is a very good designer and he is very good at what he does.',
    },
    {
      id: 4,
      avatar: '/images/avatar-4.png',
      name: 'Henry william',
      text: 'Richard was hired to create a corporate identity. We were very pleased with the work done. He is a very talented designer and he is very good at what he does.',
    },
  ];


  return (
    <section className="testimonials">
      <h3 className="h3 testimonials-title">Testimonials</h3>

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
