import React from 'react'
import { Link } from 'react-router-dom'
import AppContainer from './AppContainer'

function Add() {
    return (
        <AppContainer title='Add Post'>
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
           <Link to ='' className=' btn btn-success btn-block'>
           Add
           </Link>
        </form>
        </AppContainer>
    )
}

export default Add
