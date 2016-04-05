import initialState from '../constants/initialState'

export default ( state, action )=> {

    switch( action.type ) {
    	
    	case 'RESET':
    		return initialState
    }

    return state
}
