exports.ClozeCard = function(text, cloze) {
	// Convert the incoming strings to lower case
	var textLower = text.toLowerCase();
	var clozeLower = cloze.toLowerCase();

	// Confirm that the cloze statement appears within the complete text
	if (!textLower.includes(clozeLower)) {
		console.log('ERROR: cloze-deletion does not appear within full text -- <' + cloze + '>');
		return;
	}

	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
}