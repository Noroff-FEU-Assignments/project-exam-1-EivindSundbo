//URL
const apiUrl = "https://project-exam-1.eg-sundbo.online/wp-json/wp/v2/posts?acf_format=standard&per_page=20"

//Target HTML elements
const slides = document.getElementsByClassName("carousel_card");
const currentSlide = 0;
const slideone = document.getElementById("slideone")
const slidetwo = document.getElementById("slidetwo")
const slidethree = document.getElementById("slidethree")
const slidefour = document.getElementById("slidefour")
const postContainer = document.querySelector(".carousel_card");


//Event listener
document.getElementById("arrow-next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("arrow-prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

//Slide between carousel posts
function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}

// document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
//     bullet.addEventListener('click', () => {
//         if (currentSlide !== bulletIndex) {
//             changeSlide(bulletIndex);
//         }
//     })
// })

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
                    <h2>${data[i].acf.heading}</h2>
                    <img src="${data[i].acf.image}" />
                </div>
            </a>
            `;
        }

        for(let i = 3; i <= 5; i++){            
            slidetwo.innerHTML += 
            `
            <a href="post.html?id=${data[i].id}">
                <div class="carousel-card-content">
                    <h2>${data[i].acf.heading}</h2>
                    <img src="${data[i].acf.image}" />
                </div>
            </a>
            `;
        }

        for(let i = 6; i <= 8; i++){            
            slidethree.innerHTML += 
            `
            <a href="post.html?id=${data[i].id}">
                <div class="carousel-card-content">
                    <h2>${data[i].acf.heading}</h2>
                    <img src="${data[i].acf.image}" />
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