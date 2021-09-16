import React, {useReducer, useRef, useContext, createContext} from 'react';

const initialTodos = [
    {
        id: 1,
        text: "아침먹기",
        done: true,
    },
    {
        id: 2,
        text: "공부하기",
        done: false,
    },
    {
        id: 3,
        text: "강아지산책하기",
        done: true,
    },
];

// reducer
function todoReducer(state, action){
    switch(action.type){
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo => todo.id === action.id
                    ? {...todo, done: !todo.done}
                    : todo
                );
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

// context & custom hooks
const TodoStateContext = createContext();
export function useTodoState(){
    const state = useContext(TodoStateContext);
    if(!state) throw new Error('Cannot find TodoProvider');
    return state; 
}

const TodoDispatchContext = createContext();
export function useTodoDispatch(){
    const dispatch = useContext(TodoDispatchContext);
    if(!dispatch) throw new Error('Cannot find TodoProvider');
    return dispatch;
}

const TodoNextIdContext = createContext();
export function useTodoNextId(){
    const nextId = useContext(TodoNextIdContext);
    if(!nextId) throw new Error('Cannot find TodoProvider');
    return nextId;
}

// provider
export default function TodoProvider({children}) {
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(4);

    return(
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );   
}

