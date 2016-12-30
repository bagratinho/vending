import React from 'react';
import Reflux from 'reflux';
import Machine from './machine.jsx';
import User from './user.jsx';
import Actions from '../actions/actions';
import CurrencyStore from '../stores/currencyStore';
import CurrencyBar from './currencyBar.jsx'; 
import MachineStore from '../stores/machineStore';
import UserStore from '../stores/userStore';

var Main = React.createClass({

	mixins: [Reflux.ListenerMixin],

	getInitialState(){
		return {
			cLoad: 1,
			mLoad: 1,
			uLoad: 1
		}
	},	

	onCurrencyData(data){
		this.setState({
			cLoad: 0,
			currency: data
		})
	},

	onMachineData(data){
		this.setState({
			mLoad: 0,
			machine: data
		})
	},

	onUserData(data){
		this.setState({
			uLoad: 0,
			user: data
		})
	},

	componentDidMount(){
		Actions.getCurrency();
		Actions.getMachine();
		Actions.getUser();
		this.listenTo(CurrencyStore, this.onCurrencyData);
		this.listenTo(MachineStore, this.onMachineData);
		this.listenTo(UserStore, this.onUserData);
	},	
	buildMain(){
		let s = this.state;
		if(s.cLoad || s.mLoad || s.uLoad){return <div/>}
		return 	<div className="main">
			  		<CurrencyBar data={s.currency}/>
			  		<Machine machine={s.machine} cur={s.currency}/>
			  		<User user={s.user} cur={s.currency}/>
			  	</div> 
	},
	render() {
		let c = this.state.currency
		return (
		  <div className="wraper clearfix">
		  		{this.buildMain()}
		  </div>
		); 
	} 
})

export default Main;
