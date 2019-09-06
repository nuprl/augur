all:
	npm i && npm run build

test:
	npm run test:generate

clean:
	rm -rf node_modules dist tests/generated test_results
	find ../tests -type f -name '__output_instructions.json' -delete