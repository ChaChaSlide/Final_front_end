import template from './about.html';
import controller from './about.controller';

let aboutComponent = {
	bindings : {},
	template,
	controller: ['$rootScope', '$interval', controller],
	controllerAs : '$ctrl'
};


export default aboutComponent;
