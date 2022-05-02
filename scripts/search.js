// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";

let nav=document.getElementById("navbar");
nav.innerHTML=navbar();

let search_input=async(API)=>{
    try{
let res =await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}`)
let data =await res.json();
return data;
    }catch(err){
   console.log("err:",err);
    }
}


let append=(data,results)=>{
    data.foeEach(({urls:{small},alt_description})=>{
        let div=document.createElement("div");
        let C=document.createElement("h4");
        title.innerText=data.title;

        let description =document.createElement("p")
        description.innerText=data.description;

        div.append(title,description)
        results.append(div)
    })
}

export{search_input,append}