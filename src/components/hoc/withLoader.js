import React, { useEffect, useState } from "react";
import * as Icons from "react-bootstrap-icons";
import getData from "../../services/fireStoreService";
import Loader from "../shared/loader";

export const withLoader = (Component, dataUrl, loadingMessage) => {
  function HOC(props) {
    const [isLoading, setLoading] = useState(true);
    const [pageData, setPageData] = useState([]);
    const setLoadingState = (isComponentLoading) => {
      setLoading(isComponentLoading);
    };
    useEffect(() => {
      getData(dataUrl).then((d) => {
        console.log(d);
        setPageData(d);
        setLoading(false);
      });
    }, []);

    return (
      <>
        {isLoading && <Loader message={loadingMessage} />}
        <div className={isLoading ? "hidden" : ""}>
          <Component {...props} setLoading={setLoadingState} data={pageData} />
        </div>
      </>
    );
  }
  return HOC;
};

export default withLoader;
