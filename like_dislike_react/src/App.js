import logo from './logo.svg';
import './App.css';
import{useState} from "react";


export default function Task() {
const [LikeCounter,setlikeCounter]=useState(0);
const [disLikeCounter,setunlikeCounter]=useState(0);

return (
  <div id="box">
    <h1 id="words">like/Dislike</h1>
    <center>
    <h1>{LikeCounter}</h1>
    <button style={{background:"blue"}} id="likeBtn"onClick={()=>{
      if (LikeCounter>=0){
        setlikeCounter(LikeCounter+1)

      }}
      }>like</button>
      <button  style={{background:"red"}}onClick={()=>{
        if (LikeCounter>0){
          setlikeCounter(LikeCounter-1)
        }
      }
      }>dislike</button>
      </center>
  </div>
)
}