import React, { useState } from "react";
import * as Icons from "react-bootstrap-icons";
import Loader from "../shared/loader";

export const withLoader = (Component, loadingMessage) => {
  function HOC(props) {
    const [isLoading, setLoading] = useState(true);
    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading);
    };

    return (
      <>
        {isLoading && <Loader message={loadingMessage} />}
        <div className={isLoading ? "hidden" : ""}>
          <Component {...props} setLoading={setLoadingState} />
        </div>
      </>
    );
  }
  return HOC;
};

export default withLoader;
