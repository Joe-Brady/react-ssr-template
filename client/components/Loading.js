const Loading = props => {
  if (props.error) {
    return (
      <div>
        <p>Component failed to load.</p>
        <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
};

export default Loading;
