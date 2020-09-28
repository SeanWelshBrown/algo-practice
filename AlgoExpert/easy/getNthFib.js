// Basic solution
function getNthFib2(n) {
	if (n === 2) {
		return 1;
	} else if (n === 1) {
		return 0;
	} else {
		return getNthFib2(n - 1) + getNthFib2(n - 2);
	}
}

// Memoized solution
function getNthFib(n, memoize = {1: 0, 2: 1}) {
	if (n in memoize) {
		return memoize[n];
	} else {
		memoize[n] = getNthFib(n - 1, memoize) + getNthFib(n - 2, memoize);
		return memoize[n];
	}
}