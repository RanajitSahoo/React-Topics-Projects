const redux = require('redux');

const INIT_VAL = {
    counter: 0
}
const reducer = (store = INIT_VAL,action) =>{
    let newStore = store;
    if(action.type === "INCREMENT"){
        newStore = {counter: store.counter + 1}
    }else if(action.type === "DECREMENT"){
        newStore = {counter: store.counter - 1}
    }else if(action.type === "ADD"){
        
        newStore = {counter: store.counter + action.payload.number}
    }
    return newStore;
};

const store = redux.createStore(reducer);

const subscriber = ()=>{
   const state= store.getState();
   console.log(state);
};

store.subscribe(subscriber);

 store.dispatch({type: "INCREMENT"});
 store.dispatch({type: "DECREMENT"});
 store.dispatch({type: "INCREMENT"});
 store.dispatch({type: "INCREMENT"});
 store.dispatch({type: "ADD",payload: {number: 7}});
 store.dispatch({type: "DECREMENT"});