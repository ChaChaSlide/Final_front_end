'use strict';

import aboutComponent from './about.component';

let aboutModule = angular.module('about',[])
.component('about', aboutComponent)

console.log('about.js');

export default aboutModule;
