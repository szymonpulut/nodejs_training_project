# Node.js training project

This is a basic Node.js todo app. Created following an online course [Node.js tutorial for beginners](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp) made by The Net Ninja and available on [youtube.com](https://www.youtube.com/). Developed on my own (e.g. code refactoring for ES6 syntax and modern jQuery) and deployed on Heroku.

## Quick overwiew

Demo: [http://nodejs-todo.szymonpulut.com/](http://nodejs-todo.szymonpulut.com/)

User can add a new todo item by using the form. Existing todo entry can be removed by clicking on it. Todo entries persist through refreshes (stored externally) and are the same for all users (global).

### Running

```
npm install
```

`npm run start` starts app on port specified by environment variable PORT, defaults to 8080

### Features

-   ES6+ syntax
-   Express.js
-   EJS templates
-   jQuery for easy DOM interaction
-   body-parser middleware for POST request
-   mongoose for connection with external MongoDB database
