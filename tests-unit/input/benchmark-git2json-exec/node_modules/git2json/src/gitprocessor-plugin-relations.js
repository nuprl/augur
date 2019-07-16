/* module to link commits to each other */

module.exports = function(commits) {
	Object.keys(commits).forEach(function(hash) {
		var commit = commits[hash];
		commit.parents = [];
		commit.children = [];
	});


	Object.keys(commits).forEach(function(hash) {
		var commit = commits[hash];
		commit.parenthashes.forEach(function(parenthash) {
			var parentCommit = commits[parenthash];
			if(parentCommit != undefined) {
				parentCommit.children.push(hash);		
			}
		});
	});
}
