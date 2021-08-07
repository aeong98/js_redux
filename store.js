const redux=require('redux');
const reduxLogger=require('redux-logger');

const createStore= redux.createStore; // store만드는 메소드
const applyMiddleware=redux.applyMiddleware; //middleware 만드는 메소드
const logger=reduxLogger.createLogger(); //log만드는 메소드
const combineReducers = redux.combineReducers; //두개의 reducer를 함께 넘기기 위한 메소드

console.log(redux)

// 01. actions
// 액션메서드에서는 리듀서(reducer)로 데이터 생성을 요청한다. 비즈니스 로직을 주로 액션 메서드에서 개발하기 떄문에 액션 메서드는 
// 컴포넌트의 재활용을 높이고 코드를 관리하는데 중요한 역할을 한다.

// action -types
const ADD_NUMBER = 'ADD_NUMBER'

// action createors 
const addNumbers = () =>{
    return {
        type: ADD_NUMBER
    }
    
}
// action -types
const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT'

// action createors 
const addViewCount = () =>{
    return {
        type: ADD_VIEWCOUNT
    }
    
}


// 02. reducers
// 리듀셔는 액션 메서드에서 변경한 상태를 받아 기존의 상태를 새로운 상태로 변경하는 일을 한다.
const numberState = {
    numbers : 365
}
const numberReducer = (state=numberState, action) =>{
    switch(action.type){
        case ADD_NUMBER:
            return {
                ...state,
                numbers : state.numbers+1
            }
        default: return state;
    }
}

const viewState = {
    viewCount: 100
}

const viewReducer = (state=viewState, action) => {
    switch(action.type){
        case ADD_VIEWCOUNT:
            return {
                ...state,
                viewCount : state.viewCount+1
            }
        default: return state;
    }
}

const rootReducer = combineReducers({
    view: viewReducer,
    number: numberReducer
})


// 03. store
// 미들웨어 : dispatch() 메서드를 실행하기 전후에 원하는 작업을 할 수 있게 하는 도구
// dispatch() 메서드를 실행하기 전후의 state 변화를 알 수 있다. 
const store=createStore(rootReducer, applyMiddleware(logger));


// 04.subscribe-view-dispatch


// store.subscribe(()=>{
//     console.log('subscribe ==> ', store.getState())
// })

store.dispatch(addNumbers()); //dispatch로 상태 update
store.dispatch(addNumbers()); //dispatch로 상태 update
store.dispatch(addNumbers()); //dispatch로 상태 update
store.dispatch(addNumbers()); //dispatch로 상태 update
store.dispatch(addNumbers()); //dispatch로 상태 update
store.dispatch(addViewCount()); //dispatch로 상태 update
store.dispatch(addViewCount()); //dispatch로 상태 update


