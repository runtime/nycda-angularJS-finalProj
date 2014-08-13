'use strict';

// Declare app level module which depends on filters, and services
angular.module('nycdaAngularJsFinalProjApp')

    // version of this seed app is compatible with angularFire 0.6
    // see tags for other versions: https://github.com/firebase/angularFire-seed/tags
    .constant('angularFireVersion', '0.8')

    // where to redirect users if they need to authenticate (see module.routeSecurity)
    .constant('loginRedirectPath', '/login')

    // which login service we're using
    .constant('loginProviders', '')

    // your Firebase URL goes here
    .constant('FBURL', 'http://case-studies.firebaseio.com');