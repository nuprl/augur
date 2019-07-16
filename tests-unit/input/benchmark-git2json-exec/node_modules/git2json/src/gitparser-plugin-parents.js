module.exports = function (key, value) {
	if(key == 'parenthashes') {
		if(value.trim().length == 0) return []
		else return value.trim().split(" ")
	} else return value	
}
