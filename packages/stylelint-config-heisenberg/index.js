'use strict';

module.exports = {
	extends: 'stylelint-config-wordpress/scss',
	plugins: [
		'stylelint-order',
	],
	rules: {
		'selector-pseudo-element-colon-notation': 'double',
		'order/order': [
			'custom-properties',
			'declarations',
		],
		'order/properties-alphabetical-order': true,
	},
};