Server:
Include:

1. express: the main web framework for the backend
2. express-validator: for data validation
3. bcryptjs: password encryption
4. config: for setting global variables
5. gravatar: for profile avatars. (When a user signs up, they can use an email that's associated with graviton account and it will automatically show their profile image.)
6. jsonwebtoken: Since we are useing JWT to pass along a token for validation
7. mongoose: Database
8. request: allows us to make HTTP request to another API.

9. npm i -D nodemon concurrently: allows us to refresh the page when we saved and run our express server and react at the same time.

Client:
Include:

1. axios
2. react-router-dom
3. redux react-redux redux-thunk redux-devtools-extension(allow us to make a synchronous request in our actions)
4. moment react-moment: date and time library
5. uuid: universal id on fly

TO run this project:
npm run dev
