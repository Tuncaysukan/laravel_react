import React ,{useState} from 'react'
import {useHistory} from 'react-router-dom';
import AppContainer from './AppContainer'

function Add() {
    const history=useHistory();
    const [loading, setloading] = useState(false) 
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('')
    const onSubmitAdd=()=>{
setloading(true);
        try{api.addpost({
            title,
            description,
            
        })
       
        history.push('/')
     } catch{
        console.log(title)
           
        }
        finally{
            setloading(false);
        }
    };
    return (
        <AppContainer title='Add Post'>
        <form>
           <div className="form-group text-center">
               <label htmlFor="">Title</label>
               <input className='form-control' 
               type="text" 
               name="" 
               value={title}
               id=""
             
               onChange={e=>e.target.value}
               />
           </div>
           <div className="form-group text-center">
               <label htmlFor="">Post</label>
               <textarea 
               className='form-control' 
               type="text" 
               name="" 
               id=""
               
               onChange={e=>e.target.value}
               >
                   
               </textarea>
           </div>
           <button onClick={onSubmitAdd}
           disabled={loading}
 to ='' className=' btn btn-success btn-block'>
           {loading?'Loading':'Add'}
           </button>
        </form>
        </AppContainer>
    )
}

export default Add
