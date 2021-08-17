const axios =window.axios;
const api_url='http://127.0.0.1:8000/api/';
const post=api_url+'posts'
export default{
getAllPost:()=>{
    return(
        axios.get(post)
    )
    
}

}