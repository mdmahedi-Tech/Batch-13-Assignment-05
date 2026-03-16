document.addEventListener("DOMContentLoaded", () => {

loadAllCards();

document.getElementById("btn-all").classList.add("active");

});

const inactivebuttons=document.querySelectorAll('.buttons');

inactivebuttons.forEach(button=>{
    button.addEventListener('click',()=>{
        inactivebuttons.forEach(btn=>btn.classList.remove('active'));
         button.classList.add('active');
          })
          }

)

            
// get the url
loadAllCards=()=>{
    const url="https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
    .then((res)=>res.json())
    .then(data=>displayAllCards(data.data));
}
//details show of card
cardDetails=(id)=>{
const url=`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`
fetch(url)
.then((res)=>res.json())
.then((details)=>cardDetailsDisplay(details.data));
}
//display all cards
cardDetailsDisplay=(detail)=>{
    console.log(detail)
    const detailscard=document.getElementById('details-container');

     const labels=detail.labels.map(label=>
            
            
            `<span class="text-blue-100 bg-yellow-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                ${label}
            </span>
       
            `
        ).join('');

    detailscard.innerHTML=`
    <div class="space-y-3 p-4 m-4 shadow-md w-full">
    <h1 class="text-xl font-bold">${detail.title}</h1>
      </div>
          

          <div>
        ${labels}
        </div>
        <br>
          <p class="priority">
           ${detail.description}
          </p>
           <br>
          <div class="flex justify-between items-center">
         <div> 
         <p>author</p>
          ${detail.author}
          </div>
         <div><p class="priority">
           ${detail.priority}
          </p></div>
     </div>

    </div>
     
    `;

    document.getElementById('my_modal').showModal()
    console.log(detail)

}



displayAllCards=(datas)=>{
    
    const allcardscontainer=document.getElementById('all_cards_containers')
    allcardscontainer.innerHTML="";
    datas.forEach(data => {
        const labels=data.labels.map(label=>
            
            
            `<span class="text-blue-100 bg-yellow-700 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                ${label}
            </span>
       
            `
        ).join('');
        // create a div
    
        const divs=document.createElement('div');

   
    //    "labels": [
    //      "bug"
    //    ],<br>85p
  

        
        
        divs.innerHTML=`
        
     
    <div onclick="cardDetails(${data.id})" class="space-y-3 p-4 m-4 shadow-md w-full">
        <div class="flex justify-between items-center">
           <div>
            
           </div>
          <p class="priority">
           ${data.priority}
          </p>
        </div>
         <!-- <p class="status">: "open",</p> -->
        
        <h1 class="title text-xl font-bold"> "${data.title}"</h1> 
        <p class="description text-slate-500"> "${data.description}"</p>
        <!-- lebel -->
        <div>
        ${labels}
        </div>
        <button>clik here</button>
        <p class="author text-slate-500">: "${data.author}"</p>
        <p class="updatedAt text-slate-500">:  "${data.updatedAt}"</p>
        </div>
       
        
        
        `
        allcardscontainer.appendChild(divs);
    });
//     
}
        
   

    
  

