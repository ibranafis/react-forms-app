import React, { Component } from 'react';
import './style.css';
import Dropdown from './Dropdown';
import Checkbox from './c';

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sname: '',
      logging: false,
      sql: '',
      res: '',
    };
  }

  handleSubmit = e => {
   alert(`
        --SUBMITTING--
        Source Name: ${this.state.sname}
		Logging: ${this.state.logging}
		SQL:${this.state.sql}
		Result: ${this.state.res}
      `);
  
	console.log(JSON.stringify(this.state));
	e.preventDefault();
  };
  
  handleDropdown=(key)=>(value)=>{
	  this.setState({[key]:value});
  }

  handleCheckbox = (logging) => {
        this.setState({logging});
    };
  
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
	 this.setState({ [name]: value }, () => console.log(this.state));
  };

  render() {
    const {sname, logging, sql, res}=this.state;

    return (
      <div className="wrapper">
	  
        <div className="form-wrapper">
          <h1>Tasks</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="sname">
              <label className="switch">Source name
			  
  <Dropdown 
	data={[
		{value: 1, label: 'Source 1'},
		{value: 2, label: 'Source 2'},
		{value: 3, label: 'Source 3'},
		{value: 4, label: 'Source 4'},
		{value: 5, label: 'Source 5'},
	]}
	value={sname}
	placeholder='Select source'
	onChange={this.handleDropdown('sname')}
	/>
	
</label>
              
            </div>
            <div className="logging">
               <label className="switch">Enable logging
             <Checkbox
                    
                    selected={logging}
                    onChange={this.handleCheckbox}
                />
			</label>
            </div>
            <div className="sql">
               <label className="switch">Provide SQL
          <br></br>
		  <textarea rows="2" cols="30" name="sql"
                onChange={this.handleChange}></textarea>
   
</label>
              
            </div>
            <div className="res">
               <label className="switch">Target result
              			  
 <Dropdown 
	data={[
		{value: 1, label: 'Target 1'},
		{value: 2, label: 'Target 2'},
		{value: 3, label: 'Target 3'},
		{value: 4, label: 'Target 4'},
		{value: 5, label: 'Target 5'},
	]}
	value={res}
	placeholder='Select target'
	onChange={this.handleDropdown('res')}
	/>
  </label>
            </div>
            <div className="c">
              <button type="submit">Submit</button>
            </div>
			<div className="r">
				<button name="reset" type="reset">Cancel</button>
			</div>
			<div className="v">
				<button name="submit" type="submit">Validate</button>
			</div>
          </form>
        </div>
		</div>
    );
  }
}



export default Tasks