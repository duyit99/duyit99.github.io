//selecting all required elements
/// show ads

// window.onload = function () {
  
// }


const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");
const popup = document.querySelector('.popup');
const closebtn = document.querySelector('.close');
const menufilter = document.querySelector('.menu-filter');
const menutoggle = document.querySelector('.menu-hamburger');
window.onload = ()=>{ //after window loaded
  filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
    if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        }else{
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
    toggleMenu();
  }
  checkLocalStorage();
  
}
closebtn.addEventListener('click', () => {
  popup.style.display = "none";
})
function checkLocalStorage(){
  if (typeof(Storage) !== "undefined") {
    
    var res = localStorage.getItem("ads");
    if(res!=="has"){
      localStorage.setItem("ads", "has");
      setTimeout(function () {
        popup.style.display = "block"
      }, 500)
    }
    
  } else {
    console.log("No support")
  }
}


/// scroll sticky
window.onscroll = function () { myFunction() };

var nav = document.querySelector(".nav");
var sticky = nav.offsetTop;
var scrollToTop = document.querySelector(".scroll-to-top");

function myFunction() {
  // console.log(pageYOffset + " ..." + sticky)
  if (window.pageYOffset >= 150) {
    nav.classList.add("sticky")
    scrollToTop.classList.add("sticky")
  } else {
    nav.classList.remove("sticky");
    scrollToTop.classList.remove("sticky")
  }
}

menutoggle.addEventListener("click", toggleMenu)

function toggleMenu(){
  menutoggle.classList.toggle("open");
  menufilter.classList.toggle('active');
  const bodyprevent = document.querySelector('.wrapper');

}
