describe('titlecase filter', function () {
	beforeEach(angular.mock.module('customFilter'));
	it('should convert words seperated by a space to titlecase', function () {
		angular.mock.inject(function (titlecaseFilter) {
			expect(titlecaseFilter('hElLo wOrlD fROm Juan')).toEqual('Hello World From Juan');
		});
	});
	it('should convert words seperated by a hyphen to titlecase', function () {
		angular.mock.inject(function (titlecaseFilter) {
			expect(titlecaseFilter('mary-lo')).toEqual('Mary-Lo');
		});
	});
});