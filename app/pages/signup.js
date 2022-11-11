import cookieCutter from "cookie-cutter";

export default function Signup() {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
      mail: event.target.mail.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "http://localhost:8080/signup";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    if (response.status == 200) {
      const result = await response.json();

      cookieCutter.set("login", result.msg);
      alert(`You are registered`);
    } else {
      const result = await response.json();
      alert(`${result.msg}`);
    }

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
  };
  return (
    // We pass the event to the handleSubmit() function on submit.
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" required />
      <label htmlFor="mail">Mail</label>
      <input type="text" id="mail" name="mail" required />

      <label htmlFor="password">Password</label>
      <input type="text" id="password" name="password" required />

      <button type="submit">Submit</button>
    </form>
  );
}
