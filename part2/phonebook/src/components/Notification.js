const Notification = ({ message, displayMessage, classSwitch }) => {
  if (message === null) {
    return null;
  }

  return (
    <div>
      <h2
        className={classSwitch}
        style={{ display: displayMessage ? "block" : "none" }}>
        {message}
      </h2>
    </div>
  );
};

export default Notification;