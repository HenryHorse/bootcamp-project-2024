export type Blog = {
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
        image: "/assets/images/giraffes.png",
        imageAlt: "giraffe",
        slug: "life"
    },
    {
        title: "Catan: The Harbor Problem",
        date: "10/21/2024",
        description: "Randomly generating fair harbors on a Catan board is a difficult problem.",
        image: "/assets/images/catan.png",
        imageAlt: "catan",
        slug: "catan"
    }
];

export default blogs;

