install: # run npm install
	npm install

brain-games: # launch the game
	node bin/brain-games.js

brain-even: # launch the 2nd game
	node bin/brain-even.js

publish: # publish
	 npm publish --dry-run

lint: #run eslint according to the specs from the .eslintrc.json file
	npx eslint .