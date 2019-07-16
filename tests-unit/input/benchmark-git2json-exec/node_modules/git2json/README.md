# git2json

- This is my quick but very clean approach to get git logs as JSON.
- Existing solutions all break when special characters are in commit messages or author names, this one does not. 
- I don't want to re-implement git or use a re-implementation, the standard git commandline is good enough.
- it is extensible using plugins, so the transformation can be fine tuned to your projects need.

- check out https://github.com/blecher-at/gitline/ for the intended usecase 

Installation
----------
- install node.js 
- clone git2json repo
- go to the git2json directory and run "npm link"
- you can now use it by typing "git json" in any repo directory.
