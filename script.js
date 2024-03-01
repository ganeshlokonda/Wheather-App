async function data(){
    let input=document.querySelector(".input").value;
    let data= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=9bc140236251e976fdc704cb4b7d5f48`);
   let result=await data.json();
   console.log(result)
   if(result.cod!=200){
         document.querySelector(".error").style.display="block";
   }else{
    document.querySelector(".error").style.display="none";
      document.querySelector(".data").children[0].innerHTML=`<h3>${result.name}</h3>`;
      document.querySelector(".data").children[1].innerHTML=`<h3>${Math.round(result.main.temp)} °C</h3>`;
       document.querySelector(".wind-data").innerHTML=`<h3>${Math.round(result.main.temp)}</h3>`;
       document.querySelector(".humidity-data").innerHTML=`<h3>${Math.round(result.main.humidity)}</h3>`;
       if(Math.round(result.main.temp)<10){
          document.querySelector("body").style.backgroundImage="url('https://c4.wallpaperflare.com/wallpaper/224/347/771/landscape-ice-waterfall-winter-wallpaper-preview.jpg')"
       }else if(Math.round(result.main.temp)<20){
          document.querySelector("body").style.backgroundImage="url('https://png.pngtree.com/background/20230412/original/pngtree-natural-forest-cloud-smoke-picture-image_2394854.jpg')"
       }else if(Math.round(result.main.temp)<30){
          document.querySelector("body").style.backgroundImage="url('https://tse4.mm.bing.net/th?id=OIP.U0SfqHcCr4A3TEW4cIDGOQHaEI&pid=Api&P=0&h=180')"
       }else{
          document.querySelector("body").style.backgroundImage="url('https://cdn.wallpapersafari.com/91/72/5Opvar.jpeg')"
       }
   }
}

document.querySelector("i").addEventListener("click",()=>{
    data();
})
