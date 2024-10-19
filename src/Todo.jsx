
// conditional rendering option 1
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Done: {task}</li>
//     }
//     else{
//         return (
//             <li>Work on: {task}</li>
//         )
//     }
// }

 

// // conditional rendering option 2
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Done: {task}</li>
//     }
//     return (
//         <li>Work on: {task}</li>
//     )
// }


// // conditional rendering option 3 ternary operator
// export default function Todo({task, isDone}){
//     const todoCss = {
//         color: 'red',
//         fontWeight:'bold',
//         border: '2px solid purple',
//         padding: '10px',
//         margin:'5px'

//     }
//     return (
//         <li style = {todoCss}> {isDone ? 'Done' : 'Work on'}: {task}</li>
//     )
// }

// // // conditional rendering option 4 && 
// export default function Todo({task, isDone}){
//     const todoCss = {
//         color: 'red',
//         fontWeight:'bold',
//         border: '2px solid purple',
//         padding: '10px',
//         margin:'5px'

//     }
//     return (
//         <li style = {todoCss}> {isDone && 'Done :'} {task}</li>
//     )
// }


// // conditional rendering option 5 ||
// export default function Todo({task, isDone}){
//     const todoCss = {
//         color: 'red',
//         fontWeight:'bold',
//         border: '2px solid purple',
//         padding: '10px',
//         margin:'5px'

//     }
//     return (
//         <li style = {todoCss}> {isDone || 'Work on :'} {task}</li>
//     )
// }


// conditional rendering option 6 declear with variable
export default function Todo({task, isDone}){
    const todoCss = {
        color: 'red',
        fontWeight:'bold',
        border: '2px solid purple',
        padding: '10px',
        margin:'5px'

    }
    let listItem ;
    if(isDone){
        listItem = <li style = {todoCss}>Done: {task}</li>
    }
    else{
        listItem = <li>Work on: {task}</li>
    }
    return listItem;
}
