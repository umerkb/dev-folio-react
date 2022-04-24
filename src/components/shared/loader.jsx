export const Loader = (props) => {
  return (
    <>
      <div className="d-flex justify-content-center pt-2">
        <div className="spinner-border text-white mx-2" role="status"></div>
        <div className="pl-4 ml-2 text-white loader">
          <h3 className="text-white">{props.message}</h3>
        </div>
      </div>
    </>
  );
};

export default Loader;
