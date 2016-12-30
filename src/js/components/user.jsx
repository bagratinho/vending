import React from 'react';
import _ from 'underscore';

var User = React.createClass({
	buildItemList(){
		let items = [];
		let p = this.props;
		if(p.user.i_list.length){
			_.chain(p.user.i_list)
				.each(item => {
					items.push(<li>{item}</li>)
				})
			return items;	
		} else {
			return <li className="no-items">NO ITEMS</li>	
		}
	},	
	render() {
		let p = this.props;
		let cur = _.findWhere(p.cur.currencies, {id: p.cur.currency});
		return (
			<div className="user">
				<div className="user-name">Username: <span>{p.user.username}</span></div>
				<div className="user-balance">
					Ballance: <span>{p.user.balance*cur.multiplier}{cur.dsp_name}</span>
				</div>
				<h4>Bought Items</h4>
				<ul className="user-i-list">
					{this.buildItemList()}
				</ul>
			</div>
		);
	}
})

export default User;
