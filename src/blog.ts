/*
 * Defines a new type "Blog" with 6 properties
*/ 

type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
    // slug is used to link to a specific blog page 
}
const Blogs: Blog[] = [
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

const blogContainer = document.getElementById('blog-container');


// logic for creating and appending blog elements
Blogs.forEach((blog) => {
    // creates blog wrapper div
    const blogDiv = document.createElement("div"); // creates a new <div> element
    blogDiv.classList.add("blog-post");

    // creates blog image 
    const image = document.createElement("img"); // creates a new <img> element
    image.src = blog.image; 
    image.alt = blog.imageAlt;

    // creates blog title
    const title = document.createElement("h2");
    title.textContent = blog.title;

    // creates blog description
    const desc = document.createElement("p");
    desc.textContent = blog.description;

    // creates blog date
    const date = document.createElement("span");
    date.textContent = `Posted on ${blog.date}`;

    // this wraps the blog in a clickable link
    const link = document.createElement("a")
    link.href = `blogs/blog.html?slug=${blog.slug}`;
    link.appendChild(image);
    link.appendChild(title);
    link.appendChild(desc);
    link.appendChild(date);

    // add blogDiv and container 
    blogDiv.appendChild(link);
    blogContainer?.appendChild(blogDiv);

    // creates a clickable blog entry 
    


});
