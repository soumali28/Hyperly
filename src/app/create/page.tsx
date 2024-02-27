"use client";
import React, { useState } from "react";
import Navbar from "../navbar";
import { useRouter } from "next/navigation";

const Create = () => {
  const router = useRouter();

  // states for content and date
  const [content, setContent] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a new item
    const newItem = {
      content,
      date: selectedDate,
    };

    // Retrieve existing items from localStorage
    const existingItemsString = localStorage.getItem("publishedItems");
    const existingItems = existingItemsString
      ? JSON.parse(existingItemsString)
      : [];

    // Save the new item to localStorage
    localStorage.setItem(
      "publishedItems",
      JSON.stringify([...existingItems, newItem])
    );

    // Redirect to the List page
    router.push("/list");

    // Reset the fields after submission
    setContent("");
    setSelectedDate("");

    console.log("Content:", content);
    console.log("Selected Dates:", selectedDate);
    //localStorage.removeItem("publishedItems");
  };

  return (
    <div>
      <Navbar />
      <form
        className="flex flex-col justify-center items-center m-8"
        onSubmit={handleSubmit}
      >
        <div className="m-4">
          <label>Write something:</label>
          <input
            type="text"
            placeholder="lorem ipsum"
            value={content}
            onChange={handleContentChange}
          />
        </div>
        <div className="m-4">
          <label>Choose date:</label>
          <input
            type="datetime-local"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Create;
