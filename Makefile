.PHONY: install start reset clean push

install:
	npm install
	cd ios && pod install || true

run:
	npx react-native run-android

start:
	npx react-native start

reset:
	npx react-native start --reset-cache

clean:
	cd android && ./gradlew clean
push:
	git add .
	git commit -am "$(m)"

