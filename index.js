function receivesAFunction (callback) {
    return callback();
}

receivesAFunction(function () { return 5 * 8;});

function returnsANamedFunction(){
    return receivesAFunction
}

function returnsAnAnonymousFunction () { 
    return function () {}}