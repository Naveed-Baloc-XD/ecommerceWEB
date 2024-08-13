import React from "react";
import BlogCard from "./BlogCard";
const BlogSec = () => {
  const data = [
    {
      img: "/post__1.webp",
      title: "Healthy Food Healthy Life",
      date: "Aug 01, 2024",
      comment: 8,
    },
    {
      img: "/post__2.webp",
      title: "Healthy Food Healthy Life",
      date: "Aug 03, 2024",
      comment: 18,
    },
    {
      img: "/post__3.webp",
      title: "Healthy Food Healthy Life",
      date: "Aug 04, 2024",
      comment: 22,
    },
  ];
  return (
    <div className="container pb-16">
      <h2 className="font-bold text-2xl">Latest News</h2>
      <p className="text-gray-500">
        Present posts in a best way to highlight intresting movments of your
        blog.
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
          {data.map((el) => (
            <BlogCard
              key={el.date}
              img={el.img}
              title={el.title}
              date={el.date}
              comment={el.comment}
            />
          ))}
        </div>
      </p>
    </div>
  );
};

export default BlogSec;
