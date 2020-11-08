import React from 'react';

class Form extends React.Component {

  constructor() {
    super()
    this.state = {
      firstname: "",
      lastname: "",
    }
  }

  handleChange =(event) => {

    event.persist()

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addData(this.state)
  }



  render() {
    return (
      <div>
      <form onSubmit = {(event) => this.handleSubmit(event)}>
      <label>FirstName: </label>
      <input type = "text" name = "firstname" value = {this.state.firstname} onChange = {(event) => this.handleChange(event)}/>
      <br/>
      <label>LastName: </label>
      <input type= "text" name = "lastname" value = {this.state.lastname} onChange = {(event) => this.handleChange(event)}/>
      <br/>
      <input type="submit" />
      </form>
      </div>
    )
  }

}

export default Form;
