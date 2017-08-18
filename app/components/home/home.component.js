import template from './home.html';
import controller from './home.controller';

let homeComponent = {
	bindings : {},
	template,
	controller: ['$rootScope', '$interval', controller],
	controllerAs : '$ctrl'
};


export default homeComponent;
