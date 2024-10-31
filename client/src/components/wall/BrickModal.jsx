function BrickModal({ data, onClose }) {
  return (
    <div
      className="modal-container active"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1000,
      }}
    >
      {/* Overlay with inline styling */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 999,
          display: "block", // Ensures overlay is visible
        }}
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <section
        className="testimonials-modal"
        style={{
          position: "relative",
          zIndex: 1000,
          backgroundColor: "#1e1e1f",
          padding: "20px",
          borderRadius: "25px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          // On mobile or sm screens, let there be a small space at the left and right sides of the modal
          [window.matchMedia("(max-width: 768px)").matches
            ? "margin-left"
            : ""]: "13px",
          [window.matchMedia("(max-width: 768px)").matches
            ? "margin-right"
            : ""]: "13px",
        }}
      >
        <button
          className="modal-close-btn"
          onClick={onClose}
          style={{ position: "absolute", top: "15px", right: "15px" }}
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <div className="modal-content">
          <h4 className="h3 modal-title">{data.name}</h4>
          <time dateTime="date">{data.date} at {data.time}</time>
          <div>
            <p>{data.message}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BrickModal;
