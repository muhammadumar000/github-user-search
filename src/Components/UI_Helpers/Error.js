const errorMessage = ({ error }) => {
  return (
    <div className="alert">
      <p>{error}</p>
    </div>
  );
};

export default errorMessage;
