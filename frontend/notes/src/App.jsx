import React, { useEffect, useState } from 'react'
import { use } from 'react';
import axios from 'axios';
import NoteCard from './components/Notes';


function App() {

  const [allNotes, setAllNotes] = useState([]);
  const [buttText ,setbuttText] = useState("Add");
  const [upPoint , setUpPoint]= useState(null)
  
  const [formData, setformData] = useState({
    title:"",
    description:""
  });



  

  const handleData = (e)=>{
       
    setformData( (prev) => ({...prev,[e.target.name]:e.target.value}));
  }

  // create Data
  const handleForm = async (e)=>{
    e.preventDefault();


    if(upPoint){
       let res  = await axios.put(`http://localhost:3000/notes/${upPoint}`,formData);
       setUpPoint(null)
       setbuttText("Add");
    }else{
     let res  = await axios.post("http://localhost:3000/notes/create",formData);
    }
  

    setformData({
      title:"",
      description:"",
    })

getData()
  }

 // Read Data
  const getData = async ()=>{

    try {

      let resData = await axios.get("http://localhost:3000/notes/allNotes");
      setAllNotes(resData.data.data);
      
    } catch (error) {
         console.log(error);
    }
  }


  // Delete data

  const deleteData = async (id)=>{

   try {

     let res = await axios.delete(`http://localhost:3000/notes/${id}`);
  
    getData();
    
   } catch (error) {
    console.log(error)
   }

  }
// updata Data


const upDateData = (notes)=>{

  setformData({
    title:notes.title,
    description:notes.description,
  })
  setUpPoint(notes._id)
  setbuttText("Update")


}





  useEffect(()=>{
       getData();
  },[handleForm])
 
  return<>
    
    <div className='w-[300px] flex flex-col  bg-slate-700 p-3 h-[300px] rounded'>

      <h1 className='text-white text-2xl font-semibold self-center'>Add Notes</h1>
      <form className='flex flex-col gap-2 mt-4' onSubmit={handleForm}>
        <input className='bg-white py-1 rounded'
        onChange={handleData}
         value={formData.title}  name='title' type='text'  placeholder='enter title here'></input>
        <input className='bg-white py-1 rounded' 
        minLength={20}
        required
       onChange={handleData} value={formData.description} name='description' type='text' placeholder='enter Description'></input>
        <button className='bg-blue-500 p-0.5 rounded text-white mt-5 cursor-pointer'>{buttText}</button>
      </form>
    </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {allNotes.map((ele) => {
        return <NoteCard key={ele._id} notes={ele} deleteNote={deleteData} upDateData={upDateData}/>;
    })}
</div>
  </>
}

export default App