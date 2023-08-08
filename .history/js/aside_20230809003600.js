let sideBar = document.querySelector(".sidebar");

function createSideBar() {
  sideBar.innerHTML = `

<ul class="links">
    <li class="between-flex pr-15 pl-5" style="cursor:pointer"> 
    <a class="  d-block fs-14 rad-6 p-10 c-white" href="index.html">
        <i class="fa-solid fa-house" style="color: #ffffff;"></i> 
          <span class="pr-15">الرئيسيه</span>
        </a>

    </li>
    <li class="between-flex pr-15 pl-5" style="cursor:pointer">
        <a class=" d-block  fs-14 rad-6 p-10 c-white" >
            <i class="fa-solid fa-gear fa-fw"></i>
            <span  class="pr-15">النظام المحاسبي</span>
        </a>
        <i class="fa-solid fa-angle-left" style="color: #fafafa;"></i>


    </li>
    <li class="between-flex pr-15 pl-5" style="cursor:pointer">
        <a class=" d-block  fs-14 rad-6 p-10 c-white" >
        <i class="fa-regular fa-user fa-fw"></i>
        <span class="pr-15" >الأقساط</span> 
      </a>
      <i class="fa-solid fa-angle-left" style="color: #fafafa;"></i>

    </li>
    <li class="between-flex pr-15 pl-5" style="cursor:pointer">
        <a class=" d-block  fs-14 rad-6 p-10 c-white " >
          <i class="fa-solid fa-diagram-project fa-fw"></i>
          <span class="pr-15" >المخزون</span>
        </a>
        <i class="fa-solid fa-angle-left" style="color: #fafafa;"></i>

    </li>
    <li class="between-flex pr-15 pl-5 " id="sales" style="cursor:pointer">
    <a class=" d-block   fs-14 rad-6 p-10 c-white" >
        <i class="fa-solid fa-graduation-cap fa-fw"></i>
        <span class="pr-15" >المبيعات</span>
    </a>
      <i class="fa-solid fa-angle-left arrow-left" style="color: #fafafa;"></i>
       
    </li>

     <ul class="sales-list  pr-15 pl-5 ">
                <li>
                            <a class=" d-block   fs-14 rad-6 p-10 c-white" href="courses.html">مبيعات نقاط البيع </a>
                    </li>
                    <li>
                    <a class=" d-block   fs-14 rad-6 p-10 c-white" href="courses.html"> قائمة المبيعات</a>
                    </li>
                <li>
                    <a class=" d-block   fs-14 rad-6 p-10 c-white" href="courses.html"> المؤشرات الدوريه</a>
                </li>
                <li>
                <a class=" d-block   fs-14 rad-6 p-10 c-white" href="courses.html">أوامر الصرف المخزنيه</a>
                </li>
                <li>
                <a class=" d-block   fs-14 rad-6 p-10 c-white" href="courses.html">قائمة عروض الاسعار</a>
                </li>
                <li>
                    <a class=" d-block   fs-14 rad-6 p-10 c-white" href="courses.html"> استيراد عملية بيع من ملف cvs </a>
                </li>
                    <li>
                    <a class=" d-block   fs-14 rad-6 p-10 c-white" href="courses.html"> المرتجعات </a>
                </li>
                <li>
                <a class=" d-block   fs-14 rad-6 p-10 c-white" href="courses.html"> العروض والتخفيضات </a>
                </li>
                <li>
                <a class=" d-block   fs-14 rad-6 p-10 c-white" href="courses.html">  تقرير المبيعات</a>
                </li>
                <li>
                <a class=" d-block   fs-14 rad-6 p-10 c-white" href="courses.html">مبيعات الاصناف</a>
                </li>
                <li>
                <a class=" d-block   fs-14 rad-6 p-10 c-white" href="courses.html"> المبيعات اليوميه</a>
                </li>
                <li>
                <a class=" d-block   fs-14 rad-6 p-10 c-white" href="courses.html">  المبيعات الشهريه</a>
                </li>
                <li>
                <a class=" d-block   fs-14 rad-6 p-10 c-white" href="courses.html">  تقرير المبيعات</a>
                </li>
                <li>
                <a class=" d-block   fs-14 rad-6 p-10 c-white" href="courses.html">الافضل مبيعا</a>
                </li>
                <li>
                <a class=" d-block   fs-14 rad-6 p-10 c-white" href="courses.html"> بطاقات هديه</a>
                </li>
                </ul>

   
    <li  class="between-flex pr-15 pl-5" style="cursor:pointer">
    <a class="d-block   fs-14 rad-6 p-10 c-white" >
        <i class="fa-solid fa-users fa-fw"></i>
        <span  class="pr-15">المشتريات</span>
     </a>
     <i class="fa-solid fa-angle-left" style="color: #fafafa;"></i>

    </li>
    <li  class="between-flex pr-15 pl-5" style="cursor:pointer">
    <a class=" d-block  fs-14 rad-6 p-10 c-white" >
        <i class="fa-regular fa-file fa-fw"></i>
        <span  class="pr-15">الموردين&العملاء</span>
     </a>
     <i class="fa-solid fa-angle-left" style="color: #fafafa;"></i>

    </li>
    <li  class="between-flex pr-15 pl-5" style="cursor:pointer">
        <a class=" d-block   fs-14 rad-6 p-10 c-white" >
        <i class="fa-solid fa-folder-open" style="color: #ffffff;"></i>
            <span class="pr-15" >التقارير الذكيه</span>
        </a>
        <i class="fa-solid fa-angle-left" style="color: #fafafa;"></i>

    </li>
    <li  class="between-flex pr-15 pl-5" style="cursor:pointer">
    <a class=" d-block   fs-14 rad-6 p-10 c-white" >
    <i class="fa-solid fa-snowflake" style="color: #ffffff;"></i>
        <span class="pr-15" >التقارير الاحصائيه</span>
    </a>
    <i class="fa-solid fa-angle-left" style="color: #fafafa;"></i>

    </li>
    <li  class="between-flex pr-15 pl-5" style="cursor:pointer">
    <a class=" d-block   fs-14 rad-6 p-10 c-white">
    <i class="fa-brands fa-shopify" style="color: #fcfcfc;"></i>
        <span class="pr-15" >التقارير الماليه</span>
    </a>
    <i class="fa-solid fa-angle-left" style="color: #fafafa;"></i>

    </li>
    </ul>
    `;
}

createSideBar();

let sales = document.getElementById("sales");
let salesList = document.querySelector(".sales-list");
let arrow = document.querySelector(".arrow-left");

sales.addEventListener(
  "click",
  function (e) {
    e.stopPropagation();

    if (salesList.style.display != "none") {
      salesList.style.display = "none";
    } else {
      salesList.style.display = "block";
    }
  },
  true
);
