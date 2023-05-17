import React, { useState } from "react";
import PanelA from "./PanelA";
import PanelB from "./PanelB";

const Accordion = () => {
  const [activePanel, setActivePanel] = useState(0);

  const toggle = (num) => {
    setActivePanel(num);
  };

  return (
    <>
      <PanelA toggle={toggle} activePanel={activePanel} />
      <PanelB toggle={toggle} activePanel={activePanel} />
    </>
  );
};

export default Accordion;
