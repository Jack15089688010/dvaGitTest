import React,{ useState, useRef, createContext, useContext, useReducer, useEffect } from 'react'

let Context = createContext(null)
let store = {
  number: 0,
  count: 0
}
function reducer(state, action){
  switch (action.type) {
    case 'add':
      let count = state.count + action.data
        return {
          ...state,
          count
        }
    case 'increa':
      let incre_count = state.count - action.data
       return {
         ...state,
         count:incre_count
       }
    default:
      return {
        ...state
      }
  }
}
export function ListHook(){
  let [count, setCount] = useState(0)
  let [state, dispatch] = useReducer(reducer, store)

  return (
    <>
     <Context.Provider value={{ count, setCount, state, dispatch }}>
        <Test1 />
        <div></div>
        <Test2 count={count}/>
        <div></div>
        <button
         onClick = {() => {
           setTimeout(function () {
             setCount( count + 1 )
           }, 1000);
         }}
        >setCountProps</button>
     </Context.Provider>
    </>
  )
}

function effectCallBack(number, setNumber){
  useEffect(() => {
    console.log('effectCallBack');

  },[number])
}

function Test1(props){
  console.log('init');
  let {state, dispatch} = useContext(Context)
  let [number, setNumber] = useState(0)
  console.log(number);
  let testRef = useRef(null)
  useEffect(() => {
    console.log(testRef.current);
  },[])
  //useEffect(effectCallBack.bind(state.count))
  console.log('Test1()');
  effectCallBack(number, setNumber)
  return(
    <>
    {state.count}
    <button
     ref={testRef}
     onClick = {() => {
       dispatch({
         type:'add',
         data:1
       })
     }}
    >Test1</button>

    </>
  )
}
function Test2(props){
  let {count, setCount} = useContext(Context)
  let props_count = props.count
  return(
    <>
    {count}
    <button
     onClick = {() => {
       setCount( count + 1 )
     }}
    >Test2</button>
    props_count{props_count}
    </>
  )
}
