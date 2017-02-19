import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { EJSON } from 'meteor/ejson';

Template.helpers({
	
	dump(...rest) { 
		return EJSON.stringify(rest && (rest.length == 1 ? rest[0] : rest), { indent: true });
	},
		
	activeClass(current, expected, initial) {
		return (!current && initial || current == expected) && 'active';
	},
		
	numberClass(num) {
		if ( _.isString(num) ) num = new Number(num).valueOf();
		if ( _.isNumber(num) && ! isNaN(num) ) {
			return (num > 0 ? 'positive' : (num < 0 ? 'negative' : 'zero'));
		}
	},
	
	selected(current, expected, initial) {
		return (!current && initial || current == expected) ? 'selected' : false;
	},

	checked(current, expected, initial) {
		return (!current && initial || current == expected) ? 'checked' : false;
	}
	
});