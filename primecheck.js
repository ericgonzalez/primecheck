#! /usr/bin/env node

function primeCheck (n) {
    if (n < 2) return false;
    var ch = Math.sqrt(n);
    for (var i = 2; i <= ch; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}
