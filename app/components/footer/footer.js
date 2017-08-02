'use strict';

import footerComponent from './footer.component';

let footerModule = angular.module('footer',[])
.component('footer', footerComponent)

console.log('footer.js');

export default footerModule;
