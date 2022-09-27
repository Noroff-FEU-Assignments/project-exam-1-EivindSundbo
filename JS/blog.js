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
        console.log(data);
        

            //////Generate post//////
            blogPost.innerHTML =
            `
            <div class="blog-post-item">
                <div class="main-content">
                    <img class="image" src="${data.acf.image}" />
                    <div class="post-text-content">
                        <h1>${data.acf.heading}</h1>
                        <h2>${data.acf.description}</h2>
                        <p class="post-paragraph">${data.acf.paragraph}</p>
                    </div>
                </div>
                
            </div>
            <div class="shoppinglist">
                <h3>Shoppinglist</h3>
                <p>${data.acf.shoppinglist}</p>                
            </div>
            <div class="buttons">
                    <div class="button">
                        <div>
                            <a href="list.html">
                            <span>Back to posts</span>
                            </a>
                        </div>
                    </div>
                    <div class="button ghost-button">
                        <div>
                            <a href="contact.html">
                            <span>Contact me</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="quote">
                <p>${data.acf.quote}</p>
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
        blogPost.innerHTML = ("I've fucked something up, please try again later or contact us trough the contact form", error);
    }
}

getApi();