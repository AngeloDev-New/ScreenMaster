.PHONY:run start reset reset-native clean push install

run:
	npx react-native run-android

start:
	npx react-native start

reset:
	git reset --hard HEAD
	rm -rf node_modules
	rm -f package-lock.json
	npm i
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
	git push

install:
	npm i "$(p)"
	cd android && .gradlew clean
	npx react-native run-android
