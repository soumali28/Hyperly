"use client";
import React, { useState } from "react";
import Navbar from "../navbar";

const Create = () => {
  const [selectedButton, setSelectedButton] = useState<string>("templates");

  const handleButtonClick = (type: string) => {
    setSelectedButton(type);
  };

  const colorPalettes = [
    ["#FF5733", "#33FF57", "#5733FF"],
    ["#F4D03F", "#2E86C1", "#E74C3C"],
    ["#3498DB", "#E74C3C", "#2E4053"],
    ["#FF5733", "#33FF57", "#5733FF"],
  ];
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="flex justify-center items-center relative">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="join">
              <button
                className={`btn join-item w-44 rounded-none ${
                  selectedButton === "templates" ? "bg-gray-900" : ""
                }`}
                onClick={() => handleButtonClick("templates")}
              >
                Templates
              </button>
              <button
                className={`btn join-item w-44 rounded-none ${
                  selectedButton === "styles" ? "bg-gray-900" : ""
                }`}
                onClick={() => handleButtonClick("styles")}
              >
                Styles
              </button>
            </div>
            <ul
              className={`menu p-4 w-80 min-h-full bg-base-200 text-base-content ${
                selectedButton === "templates" ? "" : "hidden"
              }`}
            >
              {/* Sidebar content here */}
              <li>
                <a>
                  <div className="card w-46 bg-base-100 shadow-xl image-full">
                    <figure>
                      <img
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a>
                  <div className="card card-compact w-46 bg-base-100 shadow-xl">
                    <figure>
                      <img
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">Shoes!</h2>
                      <p>If a dog chews shoes whose shoes does he choose?</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>

            <ul
              className={`menu p-4 w-90 min-h-full bg-base-200 text-base-content ${
                selectedButton === "styles" ? "" : "hidden"
              }`}
            >
              <li>
                <p>Fonts:</p>
                <div>
                  <div className="carousel carousel-end rounded-box">
                    <div className="carousel-item mx-2">
                      <div className="bg-slate-700 p-4 rouded rounded-md">
                        <p className="bg-color-slate-900">Ariel</p>
                      </div>
                    </div>
                    <div className="carousel-item mx-2">
                      <div className="bg-slate-700 p-4 rouded rounded-md">
                        <p className="bg-color-slate-900">Monsarat</p>
                      </div>
                    </div>
                    <div className="carousel-item mx-2">
                      <div className="bg-slate-700 p-4 rouded rounded-md">
                        <p className="bg-color-slate-900">Roboto</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="">
                <p>Font-Size:</p>
                <input
                  type="range"
                  min={0}
                  max="100"
                  value="25"
                  className="range"
                  step="25"
                />
                <div className="w-full flex justify-between text-xs px-2">
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                  <span>|</span>
                </div>
              </li>
              <li className="">
                <p>Upload:</p>
                <input
                  type="file"
                  className="file-input file-input-bordered max-w-xs"
                />
              </li>
              <li>
                <p>Color Palettes:</p>
                <div>
                  {colorPalettes.map((palette, index) => (
                    <div
                      key={index}
                      className="flex flex-col  justify-center items-center p-2 bg-white rounded shadow-md mt-2"
                    >
                      {palette.map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className="w-8 h-8 rounded-full m-2"
                          style={{ backgroundColor: color }}
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          <div>
            <canvas
              className="bg-white absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2"
              width="600"
              height="314"
            ></canvas>
            {/* <p>1200 x 628</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
