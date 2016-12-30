import React from 'react';
import Reflux from 'reflux';
import _ from 'underscore';

import Actions from '../actions/actions';
import MachineStore from '../stores/machineStore';

var Machine = React.createClass({
	getInitialState(){
		return {
			charge: 0
		}
	},

	buildKeypad(){
		let p = this.props.machine;
		let disabledMarker = (typeof p.key_1 !== "undefined" && typeof p.key_2 !== "undefined") ? true : false;
		let disabledMarker1 = (typeof p.key_1 !== "undefined" || typeof p.key_2 !== "undefined") ? true : false;
		let keys = [];
		_.chain(p.keypad)
			.each((key, index) => {
				keys.push(
					<button disabled={disabledMarker || !p.balance} onClick={Actions.setKey.bind(this, key.id)}>
						{key.n}
					</button>
				)	
			})

		return 	<div>
			<div className="keys">{keys}</div>	
			<button disabled={!disabledMarker || !p.balance} onClick={Actions.buyItem} className="btn-pos">BUY</button>
			<button disabled={!disabledMarker1 || !p.balance} onClick={Actions.cancelInput} className="btn-neg">CANCEL</button>
			<button disabled={!p.balance} onClick={Actions.machineCashOut} className="btn-neu">CASH OUT</button>
		</div>
	},

	buildCashier(){
		let p = this.props.machine;
		let disabledMarker = (typeof p.key_1 !== "undefined" || typeof p.key_2 !== "undefined") ? true : false;

		return 	<div>
			<input disabled={disabledMarker} min="0" value={this.state.charge} onChange={this.setAmount} type="number"/>
			<button disabled={disabledMarker} onClick={this.insertCash}>INSERT</button>
		</div>
	},

	setAmount(e){
		this.setState({
			charge: e.target.value
		})
	},

	insertCash(){
		let p = this.props;
		let cur = _.findWhere(p.cur.currencies, {id: p.cur.currency});
		let cash = this.state.charge/cur.multiplier;
		Actions.updateUserBalance(cash,0);
	},
	componentWillReceiveProps(){

		this.setState({
			charge: 0
		})		
	},

	buildMachineContent(){
		let p = this.props;
		let items = [];
		_.chain(p.machine.items)
			.each(item => {
				let keycode = _.findWhere(p.machine.keypad, {id: item.key_1}).n +
					_.findWhere(p.machine.keypad, {id: item.key_2}).n;
				let cur = _.findWhere(p.cur.currencies, {id: p.cur.currency});
				let itemClass = (item.qtty == 0) ? "item empty" : "item"; 
				items.push(
					<li className={itemClass}>
						<span>{item.name}</span>
						<span>{keycode} - {item.price*cur.multiplier}{cur.dsp_name}</span>
						<span>{item.qtty}</span>
					</li>
				)	
			})

		return 	items;
	},

	render() {
		let p = this.props;
		let cur = _.findWhere(p.cur.currencies, {id: p.cur.currency});
		return (
			<div className="machine">
				<div className="machine-right">
					<div className="machine-visual">
						<div className="machine-balance">
							<div>Credit: {p.machine.balance*cur.multiplier}{cur.dsp_name}</div>
						</div>
						<div className="machine-display">
							<div>{p.machine.message}</div>
						</div>
					</div>
					<div className="machine-cashier">
						{this.buildCashier()}
					</div>
					<div className="machine-keypad">
						{this.buildKeypad()}
					</div>
				</div>
				<div className="machine-content">
					<ul className="clearfix">{this.buildMachineContent()}</ul>
				</div>
			</div>
		);
	}
})

export default Machine;
