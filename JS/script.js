let slides = document.getElementsByClassName("slider_slide");
let navlinks = document.getElementsByClassName("slider_navlink");
let currentSlide = 0;
let slideone = document.getElementById("slideone")
let slidetwo = document.getElementById("slidetwo")
let slidethree = document.getElementById("slidethree")
let slidefour = document.getElementById("slidefour")

document.getElementById("arrow-next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("arrow-prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

document.getElementById("arrow-next-mobile").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("arrow-prev-mobile").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});


//Create URL
const apiUrl = "https://project-exam-1.eg-sundbo.online/wp-json/wp/v2/posts?acf_format=standard&per_page=20"


//Slide between carousel posts
function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}

document.querySelectorAll('.slider_navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
})


//Fetch and post carousel content
async function createCarousel(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        slideone.innerHTML = "";

        for(let i = 0; i <= 2; i++){            
            slideone.innerHTML += 
            `
            <a href="post.html?id=${data[i].id}">
                <div class="carousel-card-content">
                    <img src="${data[i].acf.image}" alt="${data[i].title.rendered}"/>
                    <h3 class="title-background" >${data[i].acf.heading}</h3>
                </div>
            </a>
            `;
        }

        for(let i = 3; i <= 5; i++){            
            slidetwo.innerHTML += 
            `
            <a href="post.html?id=${data[i].id}">
                <div class="carousel-card-content">
                    <img src="${data[i].acf.image}" alt="${data[i].title.rendered}"/>
                    <h3 class="title-background" >${data[i].acf.heading}</h3>
                </div>
            </a>
            `;
        }

        for(let i = 6; i <= 8; i++){            
            slidethree.innerHTML += 
            `
            <a href="post.html?id=${data[i].id}">
                <div class="carousel-card-content">
                    <img src="${data[i].acf.image}" alt="${data[i].title.rendered}"/>
                    <h3 class="title-background" >${data[i].acf.heading}</h3>
                </div>
            </a>
            `;
        }
        for(let i = 9; i <= 11; i++){            
            slidefour.innerHTML += 
            `
            <a href="post.html?id=${data[i].id}">
                <div class="carousel-card-content">
                    <img src="${data[i].acf.image}" alt="${data[i].title.rendered}"/>
                    <h3 class="title-background" >${data[i].acf.heading}</h3>
                </div>
            </a>
            `;
        }
        
    } catch (error){
        console.log(error);
        postContainer.innerHTML = ("Cannot find post", error);
    }
}

createCarousel();
