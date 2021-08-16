import React from 'react'
import AppContainer from './AppContainer';



function Edit() {
    return (
        <AppContainer title='Edit Post'>
        <form>
           <div className="form-group">
               <label htmlFor="">Title</label>
               <input className='form-control' type="text" name="" id=""/>
           </div>
           <div className="form-group">
               <label htmlFor="">Post</label>
               <textarea className='form-control' type="text" name="" id="">
                   
               </textarea>
           </div>
           <button type='button' className=' btn btn-success btn-block'>
           Update
           </button>
        </form>
        </AppContainer>
    )
}

export default Edit
