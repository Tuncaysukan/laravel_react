<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\Post as PostResources;
use App\Models\PostModel;
// şu şeyi açar mısınpost men mi postman tekrar
class PostController extends Controller
{
    /**
     * Display a listing of the resource.
   
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // die('test');
        return   PostResources::collection(PostModel::all());

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'=>'required',
            'description'=>'required'
        ]);
        $post= new PostModel([
            'title'=>$request->title,
            'description'=>$request->description,
        ]);

        $post->save();
        return response().json([
            'Data'=>'Data Created'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $request->validate([
            'title'=>'required',
            'description'=>'required'
        ]);
        $post= PostModel::finOrFail($id);
        $post->title=$request->title;
        $post->description=$request->description;


        $post->save();
        return response().json([
            'Data'=>'Data updated'
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return new PostResources(PostModel::findOrFail($id));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post=PostModel::findOrFail($id);
        $post->delete();

         return response().json([
            'Data'=>'Post Deleted'
        ]);
    
    }
}
