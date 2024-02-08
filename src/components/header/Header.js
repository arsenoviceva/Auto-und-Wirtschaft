import SecondRow from "./secondrow/SecondRow";
import ThirdRow from "./thirdrow/ThirdRow";
import FirstRow from "./firstrow/FirstRow";

import React from "react";

const Header = () => {
  return (
    <div style={{ paddingBottom: "1rem" }}>
      <FirstRow />
      <SecondRow />
      <ThirdRow />
    </div>
  );
};

export default Header;
