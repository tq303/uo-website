import expect from 'expect'
import { createStore, applyMiddleware } from 'redux'

import reducers from '../client/reducers'

import initialState from '../client/constants/initialState'

const store = createStore(
    reducers,
    initialState
)

describe('Redux Reducers', () => {

    describe('#reset', () => {

        before(() => {
            store.dispatch( actions.reset() )
        })

        it('is the same as initialState', () => {
            expect( store.getState() ).toEqual( initialState )
        })

    })
    
})
