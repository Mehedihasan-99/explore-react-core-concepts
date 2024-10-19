
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

 

// conditional rendering option 2
export default function Todo({task, isDone}){
    if(isDone){
        return <li>Done: {task}</li>
    }
    return (
        <li>Work on: {task}</li>
    )
}