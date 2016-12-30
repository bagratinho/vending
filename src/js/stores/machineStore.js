import Reflux from 'reflux';
import _ from 'underscore';
import Actions from '../actions/actions';
import Machine from '../data/machine';

var MachineStore = Reflux.createStore({
    listenables: [Actions],
    machine: [],
    getMachine: function() {
    	this.machine = Machine;
		this.trigger(this.machine);
    },
    updateMachineBalance(cash,dir){
    	if(dir){
    		Machine.balance += cash;   
    		Machine.message = "Credit received, choose product."; 
    	} else {
    		Machine.balance -= cash;  
    		Machine.message = "Credit withdrawn";   
    	}	
    	this.machine = Machine;
		this.trigger(this.machine);
    },
    alertNotEnuoghBalance(){
    	Machine.message = "Not enough user balance.";
    	this.machine = Machine;
		this.trigger(this.machine);
    },
    alertNegativeOrZero(){
        Machine.message = "Please insert valid amount.";
        this.machine = Machine;
        this.trigger(this.machine);
    },
    setKey(k){
    	if(typeof Machine.key_1 === "undefined"){   		
    		Machine.key_1 = k;
    		let kdn = _.findWhere(Machine.keypad, {id: k}).n;
    		Machine.message = kdn+"-";   
    	} else if(typeof Machine.key_2 === "undefined") {
    		Machine.key_2 = k;
    		let kdn2 = _.findWhere(Machine.keypad, {id: k}).n;
    		let kdn1 = _.findWhere(Machine.keypad, {id: Machine.key_1}).n;
    		Machine.message = kdn1+kdn2;   
    	}
    	this.machine = Machine;
		this.trigger(this.machine);
    },
    cancelInput(){
        delete Machine.key_1;
        delete Machine.key_2;
        Machine.message = "Input canceled, choose another.";   
        this.machine = Machine;
        this.trigger(this.machine);
    },
    machineCashOut(){
        let b = Machine.balance;  
        Machine.balance = 0;     
        Machine.message = "Balance cashed out.";  
        this.machine = Machine;
        this.trigger(this.machine);
        Actions.userCashOut(b)
    },
    buyItem(){

    	let k1 = Machine.key_1;
    	let k2 = Machine.key_2;
    	let item = _.findWhere(Machine.items, {key_1: k1,key_2:k2});
    	if(typeof item !== "undefined"){
    		if(item.qtty>0 && item.price <= Machine.balance){
    			item.qtty--;
				Machine.message = "You bought "+item.name+"."; 
				Machine.balance = Machine.balance - item.price;
				Actions.addToUserList(item.name);
    		} else if(item.qtty<=0){
				Machine.message = "Product has finished, please choose another one."; 
    		} else {
    			Machine.message = "Not enough machine balance, please deposit more.";
    		}
    	} else {
			Machine.message = "No such product."; 
    	}

        delete Machine.key_1;
        delete Machine.key_2;   
    	this.machine = Machine;
		this.trigger(this.machine);
    }
}); 

export default MachineStore;
