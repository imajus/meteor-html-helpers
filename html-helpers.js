import { Template } from 'meteor/templating';
import { _ } from 'meteor/underscore';
import { EJSON } from 'meteor/ejson';

function conditionalAttribute(attribute, current, expected, initial) {
	if ( ! _.isUndefined(current) && current === expected || initial ) {
    return { [attribute]: attribute };
  }
}

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
    return conditionalAttribute('selected', current, expected, initial);
  },

	checked(current, expected, initial) {
    return conditionalAttribute('checked', current, expected, initial);
  },
	
	disabled(current, expected, initial) {
    return conditionalAttribute('disabled', current, expected, initial);
  }
	
});
