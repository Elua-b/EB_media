
import axios from "axios"
const API=axios.create({baseURL:"http://localhost:5000"});
export const uploadImage=(data)=>API.post('/upload',data)
if(uploadImage){
    console.log("welo");
}
else{
    console.log("not welo");
}
export const uploadPost=(data)=>API.post('/post',data)