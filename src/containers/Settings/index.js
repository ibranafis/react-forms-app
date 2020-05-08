import React, { Component } from 'react';
import './style.css';
import Switch from 'react-switch'

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
			allchecked:false,
			successchecked:false,
			failchecked:false,
			nonechecked:false
    };
	this.handleChange=this.handleChange.bind(this)
  }

  handleSubmit = e => {
    alert(`
        --SUBMITTING--
        All alerts: ${this.state.allchecked?'on':'off'}
	Success alerts: ${this.state.successchecked?'on':'off'}
		Fail alerts: ${this.state.failchecked?'on':'off'}
		No alerts: ${this.state.nonechecked?'on':'off'}
      `);
  
	console.log(JSON.stringify(this.state.checked));
	e.preventDefault();
  };

  handleChange=(key)=>(value)=>{
	  this.setState({[key]:value});
  }
  render() {
	  const {allchecked, successchecked, failchecked, nonechecked}=this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Notifications</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="fname">
              <label className="switch">Send all alerts
		
			<Switch
			className="react-switch"
			onChange={this.handleChange('allchecked')}
			checked={this.state.checked}
			onColor="#86d3ff"
			onHandleColor="#2693e6"
			handleDiameter={20}
			uncheckedIcon={false}
			checkedIcon={false}
			boxShadow="0px 1px 5px rgba(0,0,0,0.6)"
			activeBoxShadow="0px 0px 1px 10px rgba(0,0,0,0.2)"
			height={10}
			width={38}/>
</label>
              
            </div>
            <div className="dob">
               <label className="switch">Alerts only task success
    
			<Switch
			className="react-switch"
			onChange={this.handleChange('successchecked')}
			checked={this.state.checked}
			onColor="#86d3ff"
			onHandleColor="#2693e6"
			handleDiameter={20}
			uncheckedIcon={false}
			checkedIcon={false}
			boxShadow="0px 1px 5px rgba(0,0,0,0.6)"
			activeBoxShadow="0px 0px 1px 10px rgba(0,0,0,0.2)"
			height={10}
			width={38}/>
			</label>
            </div>
            <div className="profession">
               <label className="switch">Alerts only for failed tasks
              <Switch
			className="react-switch"
			onChange={this.handleChange('failchecked')}
			checked={this.state.checked}
			onColor="#86d3ff"
			onHandleColor="#2693e6"
			handleDiameter={20}
			uncheckedIcon={false}
			checkedIcon={false}
			boxShadow="0px 1px 5px rgba(0,0,0,0.6)"
			activeBoxShadow="0px 0px 1px 10px rgba(0,0,0,0.2)"
			height={10}
			width={38}/>
</label>
              
            </div>
            <div className="designation">
               <label className="switch">I do not want any alerts
              			<Switch
			className="react-switch"
			onChange={this.handleChange('nonechecked')}
			checked={this.state.nonechecked}
			onColor="#86d3ff"
			onHandleColor="#2693e6"
			handleDiameter={20}
			uncheckedIcon={false}
			checkedIcon={false}
			boxShadow="0px 1px 5px rgba(0,0,0,0.6)"
			activeBoxShadow="0px 0px 1px 10px rgba(0,0,0,0.2)"
			height={10}
			width={38}/>
  </label>
            </div>
            <div className="c">
              <button type="submit">Submit</button>
            </div>
			<div className="r">
				<button name="reset" type="reset">Cancel</button>
			</div>
          </form>
        </div>
		</div>
    );
  }
}



export default Settings