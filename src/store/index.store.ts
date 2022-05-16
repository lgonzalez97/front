import { rootReducer } from './reducers/index.reducer';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'


export function configureStore(){
    return createStore(rootReducer,{}, composeWithDevTools())
}
