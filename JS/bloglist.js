//////URL//////
const url = "https://project-exam-1.eg-sundbo.online/wp-json/wp/v2/posts?acf_format=standard"
const addMorePosts = "&per_page=20"

const postContainer = document.getElementById("post-list");
const morePosts = document.querySelector(".more-posts");

//////Fetch and post blogs//////
async function blogList(url){
    try{
        const response = await fetch(url);
        const data = await response.json();

        postContainer.innerHTML = "";

        for(var i = 0; i <= data.length-1; i++){            
            postContainer.innerHTML += 
            `
            <a href="post.html?id=${data[i].id}" class="post-container">
                <div class="card">
                    <img src="${data[i].acf.image}" />
                    <h2 class="card-title">${data[i].acf.heading}</h2>
                </div>
            </a>
            `;
        }        
    } catch (error){
        console.log(error);
        postContainer.innerHTML = ("Cannot find post", error);
    }
}

blogList(url);

//////Add more posts to page//////
morePosts.onclick = function() {
    const newUrl = url + "&per_page=20";
    postContainer.innerHTML = ""; 
    blogList(newUrl);
    morePosts.style.display = 'none';
}