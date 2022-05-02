// Ude Import export (MANDATORY)


//https://masai-mock-api.herokuapp.com/news/top-headlines?country=

//https://masai-mock-api.herokuapp.com/news?q=

import { navbar } from "../components/navbar.js";

let nav=document.getElementById("navbar");
nav.innerHTML=navbar();

let getdata=async(url)=>{
    try{
let res = await fetch(url);
let data=await res.json();
return data;
console.log(data)

    }catch(err){
        console.log(err);
    }

};

let append=(data)=>{

    data.forEach(({title,detailed_news})=>{
        let div =document.createElemen("div")

        let name=document.createElement("h3");
        name.innerText=title;


    })
}