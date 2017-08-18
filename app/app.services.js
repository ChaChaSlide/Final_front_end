function jgdService($resource) {
	let getJewelryTypes = () => $resource('https://localhost:7000/api/jewelry_types');
	let getSubJewelryTypes = () => $resource('https://localhost:7000/api/sub_jewelry_types');
	let getJewelryPieces = () => $resource('htps://localhost:7000/api/jewelry_pieces');
	return {
		getJewelryTypes : getJewelryTypes,
		getSubJewelryTypes : getSubJewelryTypes,
		getJewelryPieces : getJewelryPieces
		}
}



export default jgdService;