import React from 'react';
import { Link } from "react-router-dom";
import Add from './Add';
import AppContainer from "./AppContainer";

const Home = () => {
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
                                <td>1</td>
                                <td>Title</td>
                                <td>Lorem ipsum, dolor sit amet consectetur adipisicing </td>
                                <td>
                                    <Link to="/edit/1" className='btn btn-warning btn-sm mr-2'>Edit</Link>
                                    <a href="#" className='btn btn-danger  btn-sm'>Delete</a>
                                </td>
                            </tbody>
                        </table>
                    </div>
             

            </AppContainer>

        </>
    )
}

export default Home
