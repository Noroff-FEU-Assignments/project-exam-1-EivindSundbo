const blogPost = document.querySelector(".blog-post");
const title = document.querySelector("title");


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://project-exam-1.eg-sundbo.online/wp-json/wp/v2/posts/" + id + "?acf_format=standard"

//////Fetch API//////
async function getApi(){
    try{
        const response = await fetch(url);
        const data = await response.json();

            //////Generate post//////
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

            //////Generate title//////
            title.innerHTML = `John Bottolfsens gate 14 | ${data.acf.heading}`


    
        //////MODAL//////
        var modal = document.getElementById("myModal");
        var img = document.querySelector(".image");
        var modalImg = document.getElementById("img");

        //////Open modal//////
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;

        //////Close modal//////
        window.addEventListener("click", function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        });

    }}
    catch (error){
        console.log(error);
        blogPost.innerHTML = ("We've fucked something up, please try again later or contact us trough the contact form", error);
    }
}

getApi();