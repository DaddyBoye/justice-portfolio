function TestimonialModal({ data, onClose }) {
  return (
    <div
      className="modal-container active"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 1000,
      }}
    >
      {/* Overlay with inline styling */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 999,
          display: 'block', // Ensures overlay is visible
        }}
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <section
        className="testimonials-modal"
        style={{
          position: 'relative',
          zIndex: 1000,
          backgroundColor: '#1e1e1f',
          padding: '20px',
          maxWidth: '700px', // Increased width
          margin: '100px auto', // Centers the modal
          borderRadius: '25px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
          // On mobile or sm screens, let there be a small space at the left and right sides of the modal
          [window.matchMedia('(max-width: 768px)').matches ? 'margin-left' : '']: '13px',
          [window.matchMedia('(max-width: 768px)').matches ? 'margin-right' : '']: '13px',
        }}
      >
        <button className="modal-close-btn" onClick={onClose} style={{ position: 'absolute', top: '15px', right: '15px' }}>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div className="modal-img-wrapper">
          <figure className="modal-avatar-box">
            <img src={data.avatar} alt={data.name} width="80" data-modal-img />
          </figure>
          <img src="/images/icon-quote.svg" alt="quote icon" />
        </div>

        <div className="modal-content">
          <h4 className="h3 modal-title">{data.name}</h4>
          <time dateTime="2021-06-14">14 June, 2021</time>
          <div>
            <p>{data.text}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TestimonialModal;

