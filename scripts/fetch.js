let getdata=async(url)=>{
    try{
     const res=await fetch(url);
     const data=await res.json();
     return data;
    }catch(err){
        console.log(err);
   }
}

let append=(data,container)=>{
    container.innerHTML=null;
    data.forEach(el=>{

        let div=document.createElement("div");
        let img=document.createElement("img")
        img.src=el.urlToImage;
        let title=document.createElement("h3");
        title.innerText=el.title;

        let description =document.createElement("p")
        description.innerText=el.description;

        div.append(img, title,description)
        container.append(div)
    });
}

export{getdata,append}