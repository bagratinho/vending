import Reflux from 'reflux';
import Actions from '../actions/actions';
import Currency from '../data/currency';

var CurrencyStore = Reflux.createStore({
    listenables: [Actions],
    currency: {},
    getCurrency: function() {
    	this.currency = Currency;
		this.trigger(this.currency);
    },
    changeCurrency: function(id) {
    	Currency.currency = parseInt(id);
    	this.currency = Currency;
		this.trigger(this.currency);
    }

}); 

export default CurrencyStore;
