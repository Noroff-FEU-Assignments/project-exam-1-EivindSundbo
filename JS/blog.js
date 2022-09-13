const blogPost = document.querySelector(".blog-post");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://project-exam-1.eg-sundbo.online/wp-json/wp/v2/posts/" + id + "?acf_format=standard"

//Generate post 
async function getPost(){
    try{
        const response = await fetch(url);
        const data = await response.json();
        
            blogPost.innerHTML =
            `
            <div class="blog-post-item">
                <h2>${data.acf.heading}</h2>
                <p>${data.acf.paragraph}</p>
            </div>
            <img class="image" src="${data.acf.image}" />
            <div id="myModal" class="modal">
                <img class="modal-content" id="img" src="${data.acf.image}">
            </div>
            `


    

        var modal = document.getElementById("myModal");
        var img = document.querySelector(".image");
        var modalImg = document.getElementById("img");


        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;


        window.addEventListener("click", function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });

    }}
    catch (error){
        console.log(error);
        blogPost.innerHTML = ("Cannot find post", error);
    }
}

getPost();