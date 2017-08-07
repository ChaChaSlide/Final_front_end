class homeController {

	constructor($rootScope, $http) {
		let ctrl=this;
		ctrl.$rootScope = ctrl.$rootScope;
		ctrl.$rootScope.getJewelryTypes();

	};
}

export default homeController;
