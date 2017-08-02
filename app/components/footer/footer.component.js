import template from './footer.html';
import controller from './footer.controller';

let footerComponent = {
	bindings : {},
	template,
	controller: ['$rootScope', '$interval', controller],
	controllerAs : '$ctrl'
};


export default footerComponent;
