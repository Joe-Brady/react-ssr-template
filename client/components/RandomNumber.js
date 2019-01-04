const RandomNumber = () => (
  <div>
    <h1>Random number component:</h1>
    <p>
      Note that the random number is generated twice - once on the server render
      and again when the client 'hydrates' the window:
    </p>
    <p>{Math.random()}</p>
  </div>
);

export default RandomNumber;
