import React from 'react';

const options = [
    { value: 'Pending', label: 'Pending', className: 'pending' },
    { value: 'On going', label: 'On going', className: 'onGoing' },
    { value: 'Done', label: 'Done', className: 'done' }
]

class DropDown extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        status: "Pending",
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      console.log("Status Selected!!", e.target.value);
      this.setState({ status: e.target.value });
    }
  
    render() {
      return (
        <div>
          <div className="select-container">
            <select className="btn btn-outline-info" value={this.state.status} onChange={this.handleChange}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
      );
    }
}
  
export default DropDown;