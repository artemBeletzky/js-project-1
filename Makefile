install: # run npm install
	npm install

brain-games: # launch the game
	node bin/brain-games.js

publish: # publish
	 npm publish --dry-run