import React,{useEffect , useState} from 'react';
import { Link } from "react-router-dom";
import AppContainer from "./AppContainer";
import api from'../api'

const Home = () => {
    const [post, setpost] = useState(null)
    useEffect(() => {
        
     api.getAllPost().then(res => {
      const result =res.data;
      setpost(result.data)
     }).catch((err) => {
         
     });
  
       
    }, [])
  

    const renderPost=(()=>{
        if (!post) {
            return (<tr>
                <td colSpan="4" >
                    Loading Post....
                </td>
            </tr>)
        }
        if (post===null) {
    
            return (<tr>
                <td colSpan="4" >
                   There is not post yet. Add One
                </td>
            </tr>)
        }

        return(post.map((data)=>(
            <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.title}</td>
                <td>{data.description}</td>
                <Link to={`edit/${data.id}`} className='btn btn-warning btn-sm mr-2'>Edit</Link>
                <Link to={`delete/${data.id}`} className='btn btn-danger  btn-sm'>Delete</Link>


            </tr>
        )))
    })
    
   
    return (
        <>
            <AppContainer title='Laravel - React  Crud Operations'>
                
                    <Link to='/add' className='btn btn-primary' >
                        Add
                    </Link>
                    <div className="table-responsive">
                        <table className='table  table-striped mt-3'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Desc</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
{renderPost()}
                            </tbody>
                        </table>
                    </div>
             

            </AppContainer>

        </>
    )
}

export default Home
