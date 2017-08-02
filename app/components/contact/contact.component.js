import template from './contact.html';
import controller from './contact.controller';

let contactComponent = {
	bindings : {},
	template,
	controller: ['$rootScope', '$interval', controller],
	controllerAs : '$ctrl'
};


export default contactComponent;
