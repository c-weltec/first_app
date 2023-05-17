import React from "react";

class PanelB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ border: "1px solid black", padding: "20px" }}>
        <h2>Panel B</h2>
        <button onClick={() => this.props.toggle(2)}>Toggle content</button>
        {this.props.activePanel === 2 && (
          <>
            <p>Panel B content here.</p>
            <p>
              Sed vehicula tellus tortor, at viverra turpis aliquam in. Quisque
              congue erat orci. Nullam sollicitudin elit vel urna ultricies
              facilisis. Aenean eget malesuada lacus, a sagittis orci. Cras
              mattis placerat venenatis. Nunc sodales eget dolor ac ornare.
            </p>
          </>
        )}
      </div>
    );
  }
}

export default PanelB;
