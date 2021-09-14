import React, {useReducer, useRef, useContext, createContext} from 'react';

const initialTodos = [
    {
        id: 1,
        text: "Item1",
        done: true,
    },
    {
        id: 2,
        text: "Item2",
        done: true,
    },
    {
        id: 3,
        text: "Item3",
        done: false,
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
    return useContext(TodoStateContext) || new Error('Cannot find TodoProvider');
}

const TodoDispatchContext = createContext();
export function useTodoDispatch(){
    return useContext(TodoDispatchContext) || new Error('Cannot find TodoProvider');
}

const TodoNextIdContext = createContext();
export function useTodoNextId(){
    return useContext(TodoNextIdContext) || new Error('Cannot find TodoProvider');
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

