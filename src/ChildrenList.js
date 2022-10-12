import React from 'react'
import { db } from './Config';
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {collection} from '@firebase/firestore'
import AddNew from './AddNew';

export default function ChildrenList({path}) {
    //instate of quering from the root e.g oses we will us the path 
    //const query = collection(db, `oses`)
    const query= collection(db, path)
    const [ docs,loading,error] = useCollectionData(query)
  return (
    <ul>
        {loading && "Loading"}
        {docs?.map((doc)=>(
          <li key={Math.random()}>{doc.name}</li>  
        ))}
        <AddNew path={path}/>
    </ul>
  )
}
