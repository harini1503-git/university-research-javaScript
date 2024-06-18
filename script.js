let url= "http://universities.hipolabs.com/search?country="

let button= document.querySelector("button");

button.addEventListener("click", async()=>{
    let country= document.querySelector("input").value;
    console.log(country);
    let colleges= await getcolleges(country);
    console.log(colleges);
    Show(colleges);
});
function Show(colleges){
    let list= document.querySelector("#list");
    list.innerText="";
    for(clg of colleges){
        let li= document.createElement("li");
        li.innerText= clg.name;
        list.appendChild(li);
        li.classList.add("li");
    }
}

async function getcolleges(country){
    try{
        let res= await axios.get(url+country);
        return res.data;
    }catch(err){
        console.log(err);
    }
}


