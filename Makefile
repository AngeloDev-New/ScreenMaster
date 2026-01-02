.PHONY: install start reset clean push

install:
	npm install
	cd ios && pod install || true

run:
	npx react-native run-android

start:
	npx react-native start

reset:
	git reset --hard HEAD
	rm -rf node_modules
	rm -f package-lock.json
	npm install
	npx react-native start --reset-cache

reset-native:
	git reset --hard HEAD
	rm -rf node_modules
	rm -f package-lock.json
	rm -rf android/build
	rm -rf android/app/build
	npm i
	cd android && ./gradlew clean && cd ..
	npx react-native start --reset-cache

clean:
	cd android && ./gradlew clean
push:
	git add .
	git commit -am "$(m)"

