/* module to assign index */
module.exports = function(commits) {

	var index = 0;
	Object.keys(commits).forEach(function(hash) {
		var commit = commits[hash];
		commit.index = index++;
	})
}
