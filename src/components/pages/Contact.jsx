export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>
        <a href="mailto: thomas.fahy9@gmail.com">thomas.fahy9@gmail.com</a>
      </p>
      <p>
        <a href="">Curriculum Vitae</a>
      </p>
      <p>
        <a href="">Github</a>
      </p>
      <p>
        <a href="">LinkedIn</a>
      </p>
      <div className="container">
        <h2>Contact Me Directly</h2>
        <form
          action="https://getform.io/f/7d9c507f-4c93-472e-8147-7ed6dff9ec6b"
          method="POST"
        >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Your Name
            </label>
            <input
              type="name"
              className="form-control"
              id="name"
              name="customerName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="customerEmail"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Subject
            </label>
            <input
              type="subject"
              className="form-control"
              id="subject"
              name="customerSubject"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Your Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="4"
              name="customerMessage"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
