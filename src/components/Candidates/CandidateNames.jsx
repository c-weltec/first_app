import React from "react";

const list1 = ["Mehul", "Ajay", "Ruchi", "Parth", "Jayesh"];
const list2 = ["Raj", "Jyot", "Vibhuti", "Sneha", "Anjali"];

class CandidateNames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todos: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log("I have mounted!!");
    // this.setState({ candidateNames: list1 });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Something got updated!");
    if (this.state.buttonClicked === true) {
      console.log("Button was clicked!");
    }
  }

  componentWillUnmount() {
    console.log("I am going to unmount");
  }

  handleClick() {
    this.setState({ buttonClicked: true });
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit(e) {
    const currentValue = this.state.inputValue;
    const updatedTodos = [...this.state.todos];
    updatedTodos.push({ name: currentValue, isChecked: false });
    this.setState({
      todos: updatedTodos,
      inputValue: "",
    });
  }

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={(e) => this.handleChange(e)}
        />
        {this.state.candidateNames && (
          <ul>
            {this.state.candidateNames.map((candidateName) => (
              <li key={candidateName}>{candidateName}</li>
            ))}
          </ul>
        )}
        <button style={{ backgroundColor: "#FFF" }} onClick={this.handleSubmit}>
          Submit
        </button>
      </>
    );
  }
}

export default CandidateNames;
