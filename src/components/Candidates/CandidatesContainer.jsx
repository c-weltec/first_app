import React from "react";
import CandidateNames from "./CandidateNames";

class CandidatesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCandidateNames: true,
      showCandidatesButtonClicked: false,
      inputValue: "",
    };
    this.showCandidateNames = this.showCandidateNames.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  showCandidateNames() {
    this.setState({ showCandidateNames: false });
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return (
      <>
        {/* {this.state.showCandidateNames ? <CandidateNames /> : null}
    <button onClick={this.showCandidateNames}>Show Cadidate names</button> */}
        {/* <input type="text" value={this.state.inputValue} onChange={(e) => this.handleChange(e)}  /> */}

        <CandidateNames />
      </>
    );
  }
}
export default CandidatesContainer;
