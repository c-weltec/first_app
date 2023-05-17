import React, { useEffect } from "react";

const PanelA = ({ toggle, activePanel }) => {
  // componentDidMount
  useEffect(() => {
    console.log("PanelA mounted!");
  }, []);

  // componentDidUpdate with condition
  useEffect(() => {
    console.log("activePanel value is set!");
  }, [activePanel]);
  // componentDidUpdate;
  useEffect(() => {
    console.log("Something is set!");
  });

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("PanelA is going to unmount!");
    };
  }, []);

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h2>Panel A</h2>
      <button onClick={() => toggle(1)}>Toggle content</button>
      {activePanel === 1 && (
        <>
          <p>Panel A content here</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            lacinia aliquet libero at mattis. Vestibulum ac sapien dignissim,
            aliquam eros nec, ornare risus. Nam tincidunt pellentesque
            ultricies. Nulla ut massa ligula. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </p>
        </>
      )}
    </div>
  );
};

export default PanelA;
