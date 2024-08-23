import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Chettinadu Castle",
    paragraph:
      "Opp to Chettinadu Vidya Mandir School, Trichy-Rameshwaram Highway",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "https://maps.app.goo.gl/ffLGAjo2rgdirB9M7",
      designation: "Graphic Designer",
    },
    tags: ["Top Selling"],
    publishDate: "2023",
  },
  {
    id: 2,
    title: "Chettinadu Temple City",
    paragraph:
      "Opp to Chettinadu Vidya Mandir School, Trichy-Rameshwaram Highway",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "https://maps.app.goo.gl/w323vEviCECJKEtJ9",
      designation: "Graphic Designer",
    },
    tags: ["Top Selling"],
    publishDate: "2023",
  },
  {
    id: 3,
    title: "Chettinadu Metro City",
    paragraph:
      "Opp to Chettinadu Vidya Mandir School, Trichy-Rameshwaram Highway",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "https://maps.app.goo.gl/fKuvhb5kAHkWpHv27",
      designation: "Graphic Designer",
    },
    tags: ["Recently Launched"],
    publishDate: "2023",
  },
];
export default blogData;
