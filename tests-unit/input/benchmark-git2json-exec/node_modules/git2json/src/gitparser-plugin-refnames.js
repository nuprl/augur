
/* this parses the reflog entry of git %d in format " (head1, head2)" to an array. */
module.exports = function (key, value) {
	if(key == "refnames") {
		if(value == '') return [];
		value = value.replace(/^ \(/,'').replace(/\)$/,'').split(", ")
	}	
	return value;
}
