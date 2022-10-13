import { doc, setDoc } from 'firebase/firestore';
import React,{useRef} from 'react'
import { db } from './Config';

export default function AddNew({path}) {
//     // we use useRef hook for our input field
   const name = useRef()
   const brandName = useRef()
   const brandCategory = useRef()
    async function  handleSubmit(e){
        e.preventDefault()
        const docRef= doc(db,path, name.current.value,brandName.current.value,brandCategory.current.value );
        await setDoc(docRef, {brandName: brandName.current.value, brandCategory: brandCategory.current.value})
        // we use addDoc if we use the auto generated id in this case we are using name 
       //and if we use id we must not use the path prop
       // await setDoc(docRef, {path})
        e.target.reset()
    }
  return (
  <li>
    <form onSubmit={handleSubmit}>
        <input ref={name}/>
       
        <select ref={brandName} >
//         <option value="1">Select Brand</option>
//         <option value="Brand 1">Brand 1</option>
//         <option value="Brand 2">Brand 2</option>
//         <option value="Brand 3">Brand 3</option>
//         <option value="Brand 4">Brand 4</option>
//       </select>
<select name="" id="" ref={brandCategory}  >
//         <option value="Category 1">Select Category</option>
//         <option value="Category 2">Summer</option>
//         <option value="Category 3">Winter</option>
//         <option value="Category 4">Accessories</option>
//         <option value="Category 5">Sale</option>
//       </select>
<input type="text" placeholder='Product Name'  ></input>
<input type='number' step="0.01" placeholder='Price'></input>
<textarea type='text' placeholder='About the product'    ></textarea>

  <div className='sizes'>
    <p>Available sizes</p>
    <input type="checkbox" value="XS" placeholder='Available size'
  
    ></input>
    <label>XS</label>
    <input type="checkbox" value="S" placeholder='Available size'
  
    ></input>
    <label>       S       </label>
    <input type="checkbox" value="M" placeholder='Available size'
  
    ></input>
    <label>        M     </label>
    <input type="checkbox" value="L" placeholder='Available size'
  
    ></input>
    <label>    L</label>
    <input type="checkbox" value="XL" placeholder='Available size'
  
    ></input>
    <label>XL</label>
    <input type="checkbox" value="2XL" placeholder='Available size'
  
    ></input>
    <label>2XL</label>
    <input type="checkbox" value="3XL" placeholder='Available size'
  
    ></input>
    <label>3XL</label>
  </div>
  <input type='file'
     ></input>
      <p>Available colors</p>
     <input type="checkbox" value="black"
    
     ></input>
     <label><div className='colorblock'></div></label>
     <input type="checkbox" value="red"
    
     ></input>
     <label><div className='colorblock1'></div></label>
     <input type="checkbox" value="orange"
   
     ></input>
     <label><div className='colorblock2'></div></label>
     <input type="checkbox" value="yellow"
   
     ></input>
     <label><div className='colorblock3'></div></label>
     <input type="checkbox" value="white"
    
     ></input>

        <button type="submit">Add</button>
    </form>
  </li>
  )
// const brandName = useRef();
// console.log(brandName);
// async function  handleSubmit(e){
//     //         e.preventDefault()
//              const docRef= doc(db,path, brandName.current.value);
//             await setDoc(docRef, {name:  brandName.current.value})
//     //         // we use addDoc if we use the auto generated id in this case we are using name 
//     //        //and if we use id we must not use the path prop
//            await setDoc(docRef, {path})
//             e.target.reset()
//         }

// <div className='rightSideProductsInfo'>
// <form className='formProduct'>
//   <div className='Addprod'>
//     <div className='prod'>
//       <p>Add Product</p>
//       <select ref={brandName} >
//         <option value="1">Select Brand</option>
//         <option value="Brand 1">Brand 1</option>
//         <option value="Brand 2">Brand 2</option>
//         <option value="Brand 3">Brand 3</option>
//         <option value="Brand 4">Brand 4</option>
//       </select>
//       <button>+</button>
//     </div>
//     <div >
//       <select name="" id=""  >
//         <option value="Category 1">Select Category</option>
//         <option value="Category 2">Summer</option>
//         <option value="Category 3">Winter</option>
//         <option value="Category 4">Accessories</option>
//         <option value="Category 5">Sale</option>
//       </select>
//       <button>+</button>
//     </div>

//     <div>
//       <input type="text" placeholder='Product Name'  ></input>
//     </div>
//     <div>
//       <input type='number' step="0.01" placeholder='Price'
        
//       ></input>
//     </div>

//     <div>
//       <textarea type='text' placeholder='About the product'
       
//       ></textarea>
//     </div>
//   </div>

//   <div className='Addsizes'>
//     <div className='sizes'>
//       <p>Available sizes</p>
//       <input type="checkbox" value="XS" placeholder='Available size'
       
//       ></input>
//       <label>XS</label>
//       <input type="checkbox" value="S" placeholder='Available size'
       
//       ></input>
//       <label>       S       </label>
//       <input type="checkbox" value="M" placeholder='Available size'
       
//       ></input>
//       <label>        M     </label>
//       <input type="checkbox" value="L" placeholder='Available size'
       
//       ></input>
//       <label>    L</label>
//       <input type="checkbox" value="XL" placeholder='Available size'
       
//       ></input>
//       <label>XL</label>
//       <input type="checkbox" value="2XL" placeholder='Available size'
       
//       ></input>
//       <label>2XL</label>
//       <input type="checkbox" value="3XL" placeholder='Available size'
       
//       ></input>
//       <label>3XL</label>
//     </div>

//     <div className='imagecon' >
//       <p><input type='file'


//       ></input>+
//       </p>
//     </div>

//   </div>
//   {/* <select id=""  onChange={(text) => {
//               setColors(text.target.value);
//             }}>
          
//           <option value="black">black</option>
//           <option value="red">red</option>
//           <option value="orange">orange</option>
//           <option value="yellow">yellow</option>
//           <option value="white">white</option>
//           <option value="1">Select Colors</option>
//           <input type="checkbox" value="M" placeholder='Available size'
//           onChange={(text) => {
//               setSizeM(text.target.value);
//             }}
//           ></input>
//       </select> */}
//   <div className='Addcolor'>
//     <div className='color'>
//       <p>Available colors</p>
//       <input type="checkbox" value="black"
        
//       ></input>
//       <label><div className='colorblock'></div></label>


//       <input type="checkbox" value="red"
        
//       ></input>
//       <label><div className='colorblock1'></div></label>

//       <input type="checkbox" value="orange"
       
//       ></input>
//       <label><div className='colorblock2'></div></label>
//       <input type="checkbox" value="yellow"
       
//       ></input>
//       <label><div className='colorblock3'></div></label>

//       <input type="checkbox" value="white"
        
//       ></input>
//       <label><div className='colorblock4'></div></label>



//     </div>

//   </div>
//   <div className='Buttonxontainer'>
//     <input type="text" placeholder='Product Code'  >
//     </input>
//     <p>or</p>
//     <button className='button1'>
//       GENERATE CODE
//     </button >
//     <button
//       type="button"
//       className="btn btn-secondary btn-block"
//       onClick={handleSubmit}
      
//     >Add</button>
//     <button className='button3'>
//       CLEAR FORM
//     </button>
//   </div>

// </form>
// </div> 
 }
