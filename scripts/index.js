import {navbar,sidebar} from "../components/navbar.js";
let n=document.getElementById("navbar");
n.innerHTML=navbar();

let m=document.getElementById("sidebar");
m.innerHTML=sidebar();

import {getdata,append} from "./fetch.js"


let main=async(e)=>{
    if(e.key==="Enter"){
        const input=document.querySelector("#search_input").value;
        let url=`https://masai-mock-api.herokuapp.com/news?q=${input}  `
        const conatiner=document.querySelector("#results");

        const data= await getdata(url);
        append(data.articles,conatiner)
        console.log(data);
    }


}
document.getElementById("search_input").addEventListener("keydown",main);


let catogories=document.getElementById("")