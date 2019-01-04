const RandomNumber = () => (
  <div>
    <h2>Random number component:</h2>
    <p>
      Note that the random number is generated twice - once on the server render
      and again when the client 'hydrates' the window:
    </p>
    <p>{Math.random()}</p>
  </div>
);

export default RandomNumber;
