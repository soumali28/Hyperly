"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import Create from "../create/page";

const List = () => {
  // contains the array of posts
  const [publishedItems, setPublishedItems] = useState<{ content: string; date: string }[]>([]);


  //   fetch the items from the local storage
  useEffect(() => {
    const itemsString = localStorage.getItem("publishedItems");
    const items = itemsString
      ? JSON.parse(itemsString)
      : [];
    setPublishedItems(items);
  }, []);
  return (
    <>
      <Navbar />
      <h3 className="flex justify-center items-center text-xl">
        Posts Scheduled:
      </h3>
      <div>
        {/* list of all the items  */}
        {publishedItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center shadow shadow-md"
          >
            <div className="p-4 m-8">
              <p>Content: {item.content}</p>
              <span>Date: {item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
