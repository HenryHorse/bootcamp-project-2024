type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
}

const blogs: Blog[] = [
    {
        title: "What is the meaning of life?",
        date: "10/20/2024",
        description: "This blog discusses the meaning of life",
        image: "/src/assets/giraffes.png",
        imageAlt: "giraffe",
        slug: "/src/pages/blog_posts/life.html"
    },
    {
        title: "Catan: The Harbor Problem",
        date: "10/21/2024",
        description: "Randomly generating fair harbors on a Catan board is a difficult problem.",
        image: "/src/assets/catan.png",
        imageAlt: "catan",
        slug: "/src/pages/blog_posts/catan.html"
    }
];




function appendBlog(container_id: string) {
    const blogContainer = document.getElementById(container_id);
    blogContainer?.classList.add("grid", "grid-cols-1", "gap-8", "md:grid-cols-2", "lg:grid-cols-3", "p-6")

    blogs.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
    });

    blogs.forEach(blog => {
        const blogElement = document.createElement('div');
        blogElement.classList.add('blog-entry');
        blogElement.classList.add("blog-entry", "bg-white", "shadow-md", "rounded-lg", "overflow-hidden", "p-6")

        const titleElement = document.createElement('h2');
        titleElement.textContent = blog.title;
        titleElement.classList.add("text-2xl", "font-bold", "text-center")

        const dateElement = document.createElement('p');
        dateElement.textContent = blog.date;
        dateElement.classList.add("text-center")

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = blog.description;

        const imageElement = document.createElement('img');
        imageElement.src = blog.image;
        imageElement.alt = blog.imageAlt;
        imageElement.classList.add("w-full", "h-48", "object-contain")

        const linkElement = document.createElement('a');
        linkElement.href = blog.slug;
        linkElement.textContent = "To find out more...";
        linkElement.classList.add("text-blue-700", "underline");


        blogElement.appendChild(titleElement);
        blogElement.appendChild(dateElement);
        blogElement.appendChild(descriptionElement);
        blogElement.appendChild(imageElement);
        blogElement.appendChild(linkElement);


        blogContainer?.appendChild(blogElement);
    });
}


appendBlog("blog-container");