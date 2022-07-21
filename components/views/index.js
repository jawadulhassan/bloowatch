import React, { useState, Fragment } from "react";

import NewBot from "./New";
import Details from "./Details";
import Listing from "./Listing";

const StepHandler = (props) => {
  const { selectedTab, setSelectedTab } = props;
  switch (selectedTab) {
    case 1:
      return (
        <Listing selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      );
    case 2:
      return (
        <NewBot selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      );
    case 3:
      return (
        <Details selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      );
    default:
      return (
        <Listing selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      );
  }
};

const MainHandler = () => {
  const [selectedTab, setSelectedTab] = useState("dashboard");
  return (
    <div className="main">
      <Fragment>
        <StepHandler
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </Fragment>
    </div>
  );
};

export default MainHandler;
