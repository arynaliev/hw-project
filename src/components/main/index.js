const Main = () => {
  return (
    <form
      action="/submit"
      method="post"
      style={{ display: "flex", flexDirection: "column", margin: "10px" }}
    >
      <label for="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        style={{
          margin: "5px",
          padding: "5px 10px",
          borderRadius: "5px",
          border: "none",
        }}
        required
      />

      <br />

      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        style={{
          margin: "5px",
          padding: "5px 10px",
          borderRadius: "5px",
          border: "none",
        }}
        required
      />

      <br />

      <label for="message">Message:</label>
      <textarea
        id="message"
        name="message"
        rows="4"
        style={{ margin: "5px" }}
        required
      ></textarea>
    </form>
  );
};

export default Main;
