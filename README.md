This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). For 
information about using `Create React App`, click the previous link.

# Problem Overview
To get started, install all dependencies by running `yarn` or `npm install`. As an optional bonus, feel free to write
some unit tests for the reducers and/or components. There is no single "right" way to implement this problem -- it is 
open ended as a feature. This portion of the interview is about examining how you write code/make architectural 
decisions.

## Frontend Description
For this portion of the interview, you are to write a React based web app that mimics the a subset of functionality
of Reddit. The functionality that your project should contain is as follows:

* Submit a link (called stories in this case), these should be persisted on the server side as described under Backend
Description.
* Display a list of links submitted by users _(note: you don't need to write a user authentication schema or anything
like that -- the user that submitted the link can just be a text field to write a name)_
* Allow users to vote on stories (up and down arrows)

There are also no specifications or constraints for the UI/UX design. Feel free to style it as much or as little as you 
wish.

## Backend Description
Using express, write an API endpoint to handle saving links. You do not need to persist the data to a database -- feel
free to keep the data stored in an in-memory cache on the API. You do not need to support saving vote counts, just
saving links.

### Existing folder structure
* `public` -- you shouldn't need to modify anything in here
* `src`
    * `actions` -- I'd suggest placing action creators/constants in this directory
    * `components` -- presentational components can go here
    * `pages` -- actual pages of the application (link submission/list of links) _note: you're also free to keep
    everything on the same page in order to avoid using `react-router`_
    * `reducers` -- Redux reducers go in here
    * `index.js` -- entry point for the web app. Everything should already be setup here.
    * `server.js` -- fill in anything that you need to create a simple express based API 
    
### Submitting your project
Just zip the `full-stack-interview` directory up and email to `anthony@gastrograph.com`. If you have any questions,
feel free to email as well.