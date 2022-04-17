import * as Icons from "react-bootstrap-icons";
const Loader = (props) => {
  return (
    <>
      {/* <Icons.Activity></Icons.Activity> */}
      <div className="spinner-grow text-primary" role="status"></div>
      <div className="text-white loader">
        <h3 className="text-white">{props.message}</h3>
      </div>
    </>
  );
};

export default Loader;
