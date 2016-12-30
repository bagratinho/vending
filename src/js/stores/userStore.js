import Reflux from 'reflux';
import Actions from '../actions/actions';
import User from '../data/user';

var UserStore = Reflux.createStore({
    listenables: [Actions],
    user: [],
    getUser: function() {
    	this.user = User;
		this.trigger(this.user);
    },
    updateUserBalance(am,dir){
        if(am<=0){
            Actions.alertNegativeOrZero();
        } else {
        	if(dir){
        		User.balance += am;
        		Actions.updateMachineBalance(am, !dir);
        	} else if(User.balance>=am){
        		User.balance -= am;
        		Actions.updateMachineBalance(am, !dir);
        	} else {
        		Actions.alertNotEnuoghBalance();
        	}
            this.user = User;
            this.trigger(this.user);
        }
    },    
    userCashOut(b){
        User.balance += b;    
        this.user = User;
        this.trigger(this.user);
    },
    addToUserList(n){
    	User.i_list.push(n);
    	this.user = User;
		this.trigger(this.user);
    }
}); 

export default UserStore;
