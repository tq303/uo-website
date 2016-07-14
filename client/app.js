// load sass
require('./styles/style.scss');

// javascript
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import Main from './containers/Main'

import storage from './storage'

import reducers from './reducers'

import initialState from './constants/initialState'

const REDUX_STATE = 'redux-state'

// load from local storage

// load from local storage
// const loadState = storage.get( REDUX_STATE ) || initialState

// load & save default
const loadState = initialState
storage.set( REDUX_STATE, loadState )

const store = createStore(
    reducers,
    loadState,
    applyMiddleware( thunkMiddleware ),
    window.devToolsExtension ? window.devToolsExtension() : undefined
)

// render controls
render (
    <Provider store={ store }>
        <Main />
    </Provider>,
    document.getElementById('app')
)

// subribe to store changes
store.subscribe(()=> {})