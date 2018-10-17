var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
it ('should generate correct message object', () => {
	var from = 'Jen';
	var text = 'Some message';
	var message = generateMessage(from,text);
	
	expect(message.createdAt).toBeA('number');
	expect(message).toInclude({
	from,
	text
	})
//store res in variable
//asert from match
//assert text match
//asert createdAt is number
});
});