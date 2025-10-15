# React To do app (activity)

## 1. TODO
this activity is focused on the backend process of how the useState works 

using this todo list activity making the hooks concept strong 

```javascript
let updateList = () =>{
        setTodos((todos)=>([...todos , task]))
        setTask("")
    }
```

used the call backs in updateList because react expects immutability 
means u shouldnt just mutate the array directly so 
`setTodos(task)`
shouldnt be done instead we need to use spread and pass the copy  

## 2. LudoBoard

activity based on how the objects is used as props in useState()

==================================================================================================
React State Practice — Todo & LudoBoard
Overview
This project is focused on practicing React useState with arrays and objects to strengthen hooks and state management concepts.

1. Todo App
Demonstrates dynamic array state updates using useState.
Adds new tasks without directly mutating the state, using spread operator for immutability.
Focus on callback usage and proper state update patterns.

2. LudoBoard
Demonstrates object state management in React.
Updates multiple properties in an object without mutating state directly.
Tracks moves for four players using separate buttons.
Also shows array state updates alongside object state.

Key Concepts Practiced
useState with arrays and objects
Immutability in React state
Callback functions for state updates
Conditional rendering
