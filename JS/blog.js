const blogPost = document.querySelector(".blog-post");
const title = document.querySelector("title");


const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

//////URL//////
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
                <h1>${data.acf.heading}</h1>
                <p>${data.acf.paragraph}</p>
                <img class="image" src="${data.acf.image}" />
                <h2>Shopping List</h2>
                <p>${data.acf.shoppinglist}</p>
            </div>
            
            <div id="myModal" class="modal">
                <img class="modal-content" id="img" src="${data.acf.image}">
            </div>
            `
            console.log(data);
            

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