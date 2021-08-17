const axios =window.axios;
const api_url='http://127.0.0.1:8000/api/';
const post=api_url+'posts/'
export default{
getAllPost:()=>{return(axios.get(post))},
getOnePost: (id) => {return (axios.get(post+id+'edit'))},
addPost: (post) => {return (axios.post(post,post))},
updatePost: (post, id) => { return (axios.put(post, id, post)) },
deletePost: ( id) => { return (axios.delete(post, id)) },


}