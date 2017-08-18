import template from './app.html';
import controller from './app.controller';

controller.$inject = ['$rootScope', '$http', '$location' ,'jgdService'];


let appComponent = {
	template,
	controller
};

export default appComponent;
