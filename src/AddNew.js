import { doc, setDoc } from 'firebase/firestore';
import React,{useRef} from 'react'
import { db } from './Config';

export default function AddNew({path}) {
    // we use useRef hook for our input field
   const name = useRef()
    async function  handleSubmit(e){
        e.preventDefault()
        const docRef= doc(db,path, name.current.value);
        await setDoc(docRef, {name: name.current.value})
        // we use addDoc if we use the auto generated id in this case we are using name 
       //and if we use id we must not use the path prop
       // await setDoc(docRef, {path})
        e.target.reset()
    }
  return (
  <li>
    <form onSubmit={handleSubmit}>
        <input ref={name}/>
        <button type="submit">Add</button>
    </form>
  </li>
  )
}
