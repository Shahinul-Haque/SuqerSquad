import characters from './characters_reducer';
import heros from './heros_reducer'
import { combineReducers } from 'redux';




const rootReducers = combineReducers({
    characters,
    heros
})

export default rootReducers;