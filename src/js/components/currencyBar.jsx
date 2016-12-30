import React from 'react';
import Reflux from 'reflux';
import _ from 'underscore';
import Actions from '../actions/actions';

var CurrencyBar = React.createClass({
	buildSelect(){
		let d = this.props.data;
		let options = [];
		_.chain(d.currencies)
			.each(opt => {
				let selectedMarker = (opt.id == d.currency) ? true : false;
				options.push(<option defaultValue={selectedMarker} value={opt.id}>{opt.dsp_name}</option>)
			})
		return <select onChange={this.changeCurrency}>
				{options}
			</select>
	},
	changeCurrency(e){
		let id = e.target.value;
		Actions.changeCurrency(id); 
	},
	render() {
		return (
			<div className="currency-bar">
				{this.buildSelect()}
			</div>
		);
	}
})

export default CurrencyBar;
