'use strict';

import shopComponent from './shop.component';

let shopModule = angular.module('shop',[])
.component('shop', shopComponent)

console.log('shop.js');

export default shopModule;
