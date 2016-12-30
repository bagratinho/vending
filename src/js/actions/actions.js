import Reflux from 'reflux';

var Actions = Reflux.createActions([
		'getMachine',
		'getUser',
		'getCurrency',
		'setKey',
		'changeCurrency',
		'updateUserBalance',
		'updateMachineBalance',
		'alertNotEnuoghBalance',
		'cancelInput',
		'buyItem',
		'addToUserList',
		'machineCashOut',
		'userCashOut',
		'alertNegativeOrZero'
    ]);

export default Actions;

