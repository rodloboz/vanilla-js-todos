# TODOS Challenge

## Usage

First clone this repository to your laptop. You must have Node (> v4) and [yarn](https://yarnpkg.com/lang/en/docs/install/) installed.

```bash
git clone git@github.com:rodloboz/vanilla-js-todos.git
cd vanilla-js-todos
rm -rf .git
yarn install
stt # Open this folder in Sublime Text
```

Make sure you have `./node_modules/.bin` in your `$PATH`! This way you can run this:

```bash
eslint lib
webpack-dev-server
```

## Instructions

All the requires html structure and css styling has been implemented and we want to animate the page by adding dynamic behaviour with JavaScript:

1) The page should render all the initial todos with JavaScript;
2) When a todo is clicked, it should be marked/unmarked as completed;
3) When the trash bin icon is clicked, the todo should be removed from the page;
4) When a new todo is submitted with the form, the new todo should be added to the page;
