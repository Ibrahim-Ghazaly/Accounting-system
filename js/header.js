let header =document.querySelector("#header");

function createHeader(){
    header.innerHTML =  `
    <div>
        <i class="fa-solid fa-bars " id="bars-icon" style="color: #ffffff;font-size:25px;cursor:pointer;margin-left:25px"></i>
        <span>  شركة الجياد الأبيض</span>
    </div>


<div style="display:flex;align-items:center;gap:10px">
    <div class="toggle-btn">
      <button class="btn"></button>
   </div>
   <i class="fa-solid fa-paintbrush" style="color: #ffffff;"></i>

    <div class="search p-relative ">
      <input type="search" class="search-inpt p-10" placeholder="بحث...">
   </div>
</div>
    
<button class="hide-mobile" style="border:1px solid black;padding:10px 20px;color:black;background-color:yellow;border-radius: 20px;font-size:20px;cursor:pointer">الخدمات الاضافيه</button>
  
    <div class="utilitis hide-mobile" >
        <i class="fa-regular fa-message"></i>
        <i class="fa-solid fa-calculator " ></i>
        <i class="fa-solid fa-calendar-days" style="color: #ffffff;"></i>
        <img src="./imgs/saudi-arabia.png" style="height:30px;width:30px"/>
        <i class="fa-regular fa-envelope" style="color: #ffffff;"></i>
        <div>
        <span>150</span>
        <i class="fa-solid fa-triangle-exclamation" style="color: #ffffff;"></i>
        </div>
        <i class="fa-solid fa-align-center" style="color: #fcfcfc;"></i>
        <i class="fa-solid fa-eraser" style="color: #ffffff;"></i>
        <div style="padding:10px;background-color:rgb(58, 131, 214);display:flex;align-items:center;gap:10px;cursor:pointer">
            <span>نقاط البيع</span>
            <i class="fa-solid fa-cart-shopping" style="color: #ffffff;"></i>
        </div>
        <div style="padding:10px;background-color:rgb(58, 131, 214);display:flex;align-items:center;gap:10px;cursor:pointer">
        <i class="fa-solid fa-user"></i>
            <span>Admin</span>
            <i class="fa-solid fa-angle-down" style="color: #fafafa;"></i>
        </div>

</div>
    `
}

createHeader()


let bars =document.getElementById("bars-icon");

bars.addEventListener("click",function(e){
    
    document.querySelector(".sidebar").classList.toggle("hide-sidebar")
    document.querySelectorAll(".sidebar ul li a span").forEach(span =>{
     span.classList.toggle("hide")
    })
    
})