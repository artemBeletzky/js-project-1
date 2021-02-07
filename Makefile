install: # run npm install
	npm install

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-prime:
	node bin/brain-prime.js

brain-progression:
	node bin/brain-progression.js

publish: # publish
	 npm publish --dry-run

lint: #run eslint according to the specs from the .eslintrc.json file
	npx eslint .

