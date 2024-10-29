import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { Helmet } from 'react-helmet';
import "./wall.css";

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
        <div class="container mt-12">
          <div class="row">
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
          </div>
          <div class="row">
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
          </div>
          <div class="row">
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
          </div>
          <div class="row">
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
          </div>
          <div class="row">
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
          </div>
          <div class="row">
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
          </div>
          <div class="row">
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
            <div class="brick"></div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Wall;
