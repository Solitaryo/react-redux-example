# React and redux implementation example


> This is an example to explain how to use React with Redux to consume a Restful API, I´ll explain everything I did so you can understand how it works.

> I used create-react-app for this project.

## Components
>Inside components folder we have the components that we are going to use for the project, I decided to separate the code in different components so they manage only the things they need.
For example, SearchInput components manage the change in the text input, also, everytime it changes it calls a Redux action to check for data on the API, is doesn´t have access to any state, because it doesn´t need it.
The RecipeList component has access to the data already provided by the actions (from SarchInput) and is being loaded by Redux, as a state, it renders a RecipeListItem for every single result.

## About Redux
> We all know that are TONS of ways to implement redux, and that´s a huge problem, maybe the Redux idea is easy tu understand, but the implementation is the one that gets complicated, so we are going to stick to use a Flux-like architecture, using Redux, let me explain to you how Flux works:
Flux is a unidirectional data flow, that means that the data flows only in one way, this diagram explains a little more:

`
| Actions | -> | Dispatcher | -> | Store | -> | View |
`
> So the idea is we call an ACTION, which usually involes a call to the API, the data is being send using the DISPATCHER to the STORE, and once the STORE has the data we can access it from the VIEW.
If you want to read more about FLUX, go to this site:

[Flux Architecture](https://facebook.github.io/flux/docs/in-depth-overview.html#content)

> Using this idea as a base, we have a Redux folder, everything about Redux goes inside. We have 3 more folders, actions, api and reducers.
Inside API we have the files to call to the API, so we use that files inside Actions, the Actions are the ones that we call in the views, when an action works correctly (or incorrectly) we send that data to the reducers, we havce a reducer folders for that.
We need our RootReducer, and we need to create a Reducer for every Model or object abstraction we have, in this case we are calling Recipes, so we have our RecipeRducer, we use that RecipeReducer and use it inside our RootReducer.
A lot of people creates a store file to call our RootReducer, but I think it doesn´t make sense, we can do it right here and just export the STORE. So after we combine our reducers and create the store, we exported it so we can use it in our app, calling it inside the index.js file.
We are using Redux-thunk as you can see, why?, because we can return functions instead of just plain actions, so it´s way easier to implement our api calls.

### Libraries we used for this:
- redux
- react-redux
- redux-thunk
- node-fetch