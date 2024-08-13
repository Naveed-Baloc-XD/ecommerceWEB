import React from "react";

const BlogCard = (props) => {
  return (
    <section className="space-y-4 overflow-hidden rounded-lg ">
      <p className="w-[100%]">
        <img
          className="rounded-lg hover:scale-105 duration-500"
          src={props.img}
          alt="post"
        />
      </p>
      <p className="text-mcolor font-medium">
        <span>{props.date} / </span>
        <span>{props.comment} Comments</span>
      </p>
      <h3 className="font-bold text-xl">{props.title}</h3>
    </section>
  );
};

export default BlogCard;
