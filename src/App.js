import logo from './logo.svg';
import './App.css';
import { db } from './Config';
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {collection} from '@firebase/firestore'
import ChildrenList from './ChildrenList';
import AddNew from './AddNew';

function App() {
  //return only objects inside thew oses collection not the subcollection
  const query = collection(db, `products`)
  
 // const query =collection(db,'oses',"Windows","children")
  const [ docs,loading,error] = useCollectionData(query)
  console.log(docs);
  return (
    <div className="App">
    <h1>Product Entery</h1>
     {loading && "Loading..."}
    <ul>
      {/* map through all the documents that we get from firebase and docs will be undefined when the page is loading 
      so we must have a conditional check e.g ? which is if  */}
      {docs ?.map((doc)=>(<div key={Math.random()}><li>{doc.name}
      {/* under our list document we must display each children of our document whic is our subcollection */}
      </li>
    {/* because our query will take our database  and the path because we well have to choose the path based on the choice of our and we must spacify our subcollection*/}
      <ChildrenList path={`products/${doc.selectBrand}/children`} />
      <ChildrenList path={`products/${doc.brandCategory}/children`} />
      </div>
      ))}
    </ul>
    <AddNew path="productsInfo"/>
    </div>
  );
}

export default App;
