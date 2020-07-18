VERSION := $(shell node ./get-version.js)
NEXT_VERSION := $(shell node ./get-next-version.js)

start-release:
	git checkout master
	git pull origin master
	yarn run release
	# push new changelog
	git push

push-release:
	# push tag
	git push origin v$(VERSION)
