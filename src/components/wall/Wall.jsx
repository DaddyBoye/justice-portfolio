import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { Helmet } from "react-helmet";
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
        <div class="scroll-container">
  <div class="wall-container">
    <div class="brick">
      <div>Brick 1</div>
      <div>Brick 2</div>
      <div>Brick 3</div>
      <div>Brick 4</div>
      <div>Brick 5</div>
      <div>Brick 6</div>
      <div>Brick 7</div>
      <div>Brick 8</div>
      <div>Brick 9</div>
      <div>Brick 10</div>
      <div>Brick 11</div>
      <div>Brick 12</div>
      <div>Brick 13</div>
      <div>Brick 14</div>
      <div>Brick 15</div>
      <div>Brick 16</div>
      <div>Brick 17</div>
      <div>Brick 18</div>
      <div>Brick 19</div>
      <div>Brick 20</div>
      <div>Brick 21</div>
      <div>Brick 22</div>
      <div>Brick 23</div>
      <div>Brick 24</div>
      <div>Brick 25</div>
      <div>Brick 26</div>
      <div>Brick 27</div>
      <div>Brick 28</div>
      <div>Brick 29</div>
      <div>Brick 30</div>
      <div>Brick 31</div>
      <div>Brick 32</div>
    </div>
  </div>
</div>

      </section>
    </article>
  );
};

export default Wall;
