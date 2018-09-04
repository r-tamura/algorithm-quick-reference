build: ## transpile TypeScript to JavaScript
	@tsc
build-watch: ## watch file changes
	@tsc -w
check: ## static type check
	@tsc --noEmit
prettier: ## run code formatter with over write option
	@yarn prettier --write "[1-9]*/**/*.ts"
test:  ## test with ts-mocha
	@ts-mocha [1-9]*/*.spec.ts

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help