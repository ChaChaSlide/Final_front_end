'use strict';

import contactComponent from './contact.component';

let contactModule = angular.module('contact',[])
.component('contact', contactComponent)

console.log('contact.js');

export default contactModule;
