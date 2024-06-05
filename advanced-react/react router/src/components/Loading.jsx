const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{width: "100%",height: "900px"}}>
      <div className="spinner-border text-primary " role="status" style={{width: "40px", height: "40px"}}>
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default Loading;
