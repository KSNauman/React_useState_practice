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