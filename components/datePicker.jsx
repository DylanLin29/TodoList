import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import moment from 'moment-timezone'
import DatePicker from 'material-ui/DatePicker'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class DatePickerExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      controlledDate: moment(`2014-06-01T12:00:00Z`).utc().tz('America/Los_Angeles').toDate(),
    };
    console.log(this.state.controlledDate)
  }

  handleChange = (event, date) => {
    this.setState({
      controlledDate: date,
    });
  };

  render() {
    console.log(`WTF? `, this.state.controlledDate)
    return (
      <DatePicker
        hintText="Controlled Date Input"
        value={this.state.controlledDate}
        onChange={this.handleChange}
      />
    );
  }
}


export default DatePickerExampleControlled;