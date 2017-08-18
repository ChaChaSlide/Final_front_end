class appCtrl {

	constructor($rootScope, $http, $location, jgdService) {

		let ctrl = this;
		ctrl.$rootScope = $rootScope;

		ctrl.$rootScope.getJewelryTypes =() => {
			ctrl.query = jgdService.getJewelryTypes().query();

			ctrl.query.$promise.then((data)=>{
				ctrl.$rootScope.JewelryTypes = data;
			})
		}

		ctrl.$rootScope.getSubJewelryTypes =() => {
			ctrl.query = jgdService.getSubJewelryTypes().query();

			ctrl.query.$promise.then((data)=>{
				ctrl.$rootScope.SubJewelryTypes = data;
			})
		}

		ctrl.$rootScope.getJewelryPieces = () => {
			ctrl.query = jgdService.getJewelryPieces().query();

			ctrl.query.$promise.then((data)=> {
				ctrl.$rootScope.JewelryPieces = data;
			})
		}

	} // end constructor
} // end appCtrl
export default appCtrl;
