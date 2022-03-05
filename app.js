//var obj= Array.from(document.querySelectorAll('section'));
const menu=document.getElementById('navbar__list');
var object=Array.from(document.querySelectorAll('section'));
function sectionInViewport(elem) {
    let sectionPos=elem.getBoundingClientRect();
    return(sectionPos.top>=0);
}
// create function that make loop for section and active 
function  createList(){
   object.forEach(section=> {
         
    sectionName=section.getAttribute('data-nav');
    sectionLink=section.getAttribute('id');
    listItem=document.createElement("Li");
    listItem.innerHTML= `<a class='menu__link' href=" #${sectionLink}"> ${sectionName}</a>`;
    menu.appendChild(listItem)})
}
 
   

function toggleLi(){   
if (sectionInViewport(section)){
    if (section.classList.contains("your-active-class")) 
      {  
          sectionPos.classList.add("your-active-class");
    
}else 
   {       
    sectionPos.classList.remove("your-active-class");     
    }
}}
  
// make visible scroll while not scrolling and also while scrolling
var previousPage=window.pageYOffset;
  window.onscroll=function (){ 

    var currentPage=window.pageYOffset;
if(currentPage<previousPage){
 document.getElementById("navbar__list").style.display="none";
  
}

 else
       document.getElementById("navbar__list").style.display="block";


currentPage=previousPage;
if(currentPage==previousPage)
setTimeout(()=>document.getElementById("navbar__list").style.display="none",4000);
}
 //create section
 let counter=4;
 function  createSection(){

  counter++;
  const content =  `<section id="section${counter}" data-nav="Section ${counter}" class="your-active-class">
  <div class="landing__container">
    <h2>Section${counter}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
  </div>
  </section>`;
  document.getElementById("test").insertAdjacentHTML("beforeend",content);
  //document.querySelector("main").insertAdjacentElement("beforeend",content);     
    //document.body.appendChild(content)
    //sectionName=section.getAttribute('data-nav');
    //sectionLink=section.getAttribute('id');
    listItem=document.createElement("Li");
    listItem.innerHTML= `<a class='menu__link' href=" #section${counter}"> section${counter}</a>`;
   menu.insertAdjacentElement('beforeend',listItem);
   // menu.appendChild(listItem);
}
  
 //top button function
 function topFunction(){
  scrollTo({top:0,behavior:"smooth"});
 
  }

// apply programe function
createList();
document.addEventListener("scroll",toggleLi());

//document.getElementById('btn').addEventListener('click',()=>{createSection();});


window.scrollY>800
?(toTop.style.display='block')
:(toTop.style.display='none');







/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO ev
