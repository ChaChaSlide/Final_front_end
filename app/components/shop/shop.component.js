import template from './shop.html';
import controller from './shop.controller';

let shopComponent = {
	bindings : {},
	template,
	controller: ['$rootScope', '$interval', controller],
	controllerAs : '$ctrl'
};


export default shopComponent;
