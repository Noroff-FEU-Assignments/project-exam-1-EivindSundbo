//Create URL
const apiUrl = "https://project-exam-1.eg-sundbo.online/wp-json/wp/v2/posts?acf_format=standard&per_page=20"

//Target HTML elements
const postContainer = document.querySelector(".carousel_card");


async function createCarouisel(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        for(let i = 0; i < 3; i++){            
            postContainer.innerHTML += `
            
            <a href="/HTML/post.html?id=${data[i].id}">
                <div class="card">
                    <img class="carousel_image" src="${data[i].acf.image}"></a>
                    <h2 class="title-background">${data[i].acf.heading}</h2>
                </div>
            </a>`;
        }

    } catch (error){
        console.log(error);
        postContainer.innerHTML = ("Cannot find post", error);
        
    }
}

createCarouisel();