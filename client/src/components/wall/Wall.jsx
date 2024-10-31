import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { Helmet } from "react-helmet";
import BrickModal from "./BrickModal";
import "./wall.css";

function TruncateText({ text }) {
  // Check if the text length is greater than 90
  const truncatedText = text.length > 50 ? text.substring(0, 50) + "..." : text;

  return (
    <div
      className="mb-2 text-left text-white text-[18px] md:text-[13.5px]"
      data-testimonials-text
    >
      {truncatedText}
    </div>
  );
}

const formatDate = (date) => {
  const day = date.toLocaleDateString("en-US", { day: "numeric" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  const year = date.toLocaleDateString("en-US", { year: "numeric" });

  const suffix =
    day.endsWith("1") && !day.endsWith("11")
      ? "st"
      : day.endsWith("2") && !day.endsWith("12")
      ? "nd"
      : day.endsWith("3") && !day.endsWith("13")
      ? "rd"
      : "th";

  return `${day}${suffix} ${month}, ${year}`;
};

const formatTime = (date) => {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};

const Wall = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (name && name[0] !== "@") {
      setName(`@${name}`);
    }
  }, [name]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    console.log(
      JSON.stringify(
        {
          name,
          date: formatDate(currentDate),
          time: formatTime(currentDate),
          message,
        },
        null,
        2
      )
    );
    // Show snackbar on form submit
    enqueueSnackbar("Operation completed successfully.", {
      variant: "error",
    });
    setName("");
    setMessage("");
  };

  const openModal = (testimonial) => setModalData(testimonial);
  const closeModal = () => setModalData(null);

  const messages = [
    {
      id: 1,
      date: "20th October, 2024",
      time: "8:00 PM",
      name: "@lawsonbuabassah",
      message: "Richard was hired to create a corporate identity.",
    },
    {
      id: 2,
      date: "10th November, 2024",
      time: "10:00 AM",
      name: "@jamesbrown",
      message: "Thank you for the help.",
    },
    {
      id: 3,
      date: "20th November, 2024",
      time: "12:00 PM",
      name: "@sarahjones",
      message: "I hope you're doing well.",
    },
    {
      id: 4,
      date: "15th December, 2024",
      time: "2:00 PM",
      name: "@johndoe",
      message: "I need your help with my project.",
    },
    {
      id: 5,
      date: "20th December, 2024",
      time: "8:00 PM",
      name: "@janedoe",
      message: "I'm grateful for your help.",
    },
    {
      id: 6,
      date: "25th December, 2024",
      time: "12:00 PM",
      name: "@jimmy",
      message: "I hope you have a great holiday.",
    },
  ];

  const additionalBricks = messages.length < 32 ? 32 - messages.length : 0;

  return (
    <article className="wall active" data-page="wall">
      <Helmet>
        <title>Lawson Buabassah | Wall</title>
      </Helmet>
      <header>
        <h2 className="h2 article-title">Wall</h2>
      </header>

      <section className="contact-form">
        <h3 className="h3 form-title">
          Sign On My Wall, So I Know You Were Here
        </h3>
        <form onSubmit={handleSubmit} className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Name"
              required
              data-form-input
              value={name}
              onChange={handleNameChange}
            />

            <input
              type="text"
              name="message"
              className="form-input"
              placeholder="Message"
              required
              data-form-input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="pencil"></ion-icon>
            <span>Sign On My Wall</span>
          </button>
        </form>
        <div class="scroll-container">
          <div class="wall-container">
            <div class="brick">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="px-2 py-1 flex flex-col justify-between cursor-pointer"
                  onClick={() => openModal(message)}
                  data-testimonials-item
                >
                  <TruncateText text={message.message} />
                  <div className="flex flex-col mt-2">
                    <h4 className="text-[15px] md:text-[11px]" data-testimonials-title>
                      {message.name}
                    </h4>
                    <div>
                      <h4 className="text-[15px] md:text-[11px]" data-testimonials-title>
                        {message.date} at {message.time}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
              {[...Array(additionalBricks)].map((_, i) => (
                <div
                  key={i}
                  className="px-2 py-1 flex flex-col justify-between"
                  data-testimonials-item
                ></div>
              ))}
              {/* Render modal only if modalData is set */}
              {modalData && (
                <BrickModal data={modalData} onClose={closeModal} />
              )}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Wall;
