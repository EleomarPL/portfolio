const SpinnerLoading = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-grow text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default SpinnerLoading;