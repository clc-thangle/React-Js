import {noteData} from './firebaseConnect';

var redux = require('redux');

const noteInitialState = {
    testConnect: 'testThoi'
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.getItem);
            console.log('them du lieu ' + JSON.stringify(action.getItem)+ "thanh cong");
            return state
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
export default store;