/*
 * Defines a new type "Blog" with 6 properties
*/
var Blogs = [
    {
        title: "Best Restoom Rating!",
        date: "October 15th, 2025",
        description: "This is a super objective breakdown of the best restroom I've rated so far.",
        image: "BestRestroomRating.jpg",
        imageAlt: "Madonna Inn Restroom",
        slug: "best-restroom-rating"
    },
    {
        title: "Best Roblox Game!",
        date: "October 15th, 2025",
        description: "This is objectively the best Roblox game ever.",
        image: "BestRobloxGame.png",
        imageAlt: "Modern Restroom Tester Roblox Game",
        slug: "best-roblox-game"
    }
];
var blogContainer = document.getElementById('blog-container');
// logic for creating and appending blog elements
Blogs.forEach(function (blog) {
    // creates blog wrapper div
    var blogDiv = document.createElement("div"); // creates a new <div> element
    blogDiv.classList.add("blog-post");
    // creates blog image 
    var image = document.createElement("img"); // creates a new <img> element
    image.src = blog.image;
    image.alt = blog.imageAlt;
    // creates blog title
    var title = document.createElement("h2");
    title.textContent = blog.title;
    // creates blog description
    var desc = document.createElement("p");
    desc.textContent = blog.description;
    // creates blog date
    var date = document.createElement("span");
    date.textContent = "Posted on ".concat(blog.date);
    // this wraps the blog in a clickable link
    var link = document.createElement("a");
    link.href = "blogs/".concat(blog.slug, ".html");
    link.appendChild(image);
    link.appendChild(title);
    link.appendChild(desc);
    link.appendChild(date);
    // add blogDiv and container 
    blogDiv.appendChild(link);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogDiv);
    // creates a clickable blog entry 
});
