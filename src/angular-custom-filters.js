angular.module('customFilter', []).
filter('titlecase', function () {
	return function (input) {
		if (angular.isString(input)) {
			var words = input.split(' ');
			for (var i = 0; i < words.length; i++) {
				words[i] = words[i].toLowerCase();
				words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
			}
			return words.join(' ');
		} else {
			return input;
		}
	};
});