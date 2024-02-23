"use-client";
import React from "react";
import Navbar from "./navbar";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h3 className="text-lg font-bold m-8">Dashboard</h3>
        <div className="grid grid-cols-3 gap-2 items-center">
          <div className="card col-span-1 w-96 bg-base-100 shadow-2xl m-8">
            <Link href="/create">
              <figure className="px-10 pt-10">
                <Image
                  src="/linkedin.png"
                  width={300}
                  height={150}
                  alt="create content"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title">Create!</h2>
                <p>Create persoalised linkedin posts</p>
                <div className="card-actions">
                  <button className="btn btn-primary">Create Now</button>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-span-2">
            <p className="text-center">Post Analytics</p>
            <div className="flex justify-center items-center">
              <iframe
                className="rounded rounded-md"
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7100471509747449856"
                height="300"
                width="500"
                frameBorder="0"
                allowFullScreen
                title="Embedded post"
              ></iframe>
              <div className="stats stats-vertical shadow">
                <div className="stat">
                  <div className="stat-title">Views</div>
                  <div className="stat-value">31K</div>
                  <div className="stat-desc">Jan 1st - Feb 1st</div>
                </div>

                <div className="stat">
                  <div className="stat-title">New Users</div>
                  <div className="stat-value">4,200</div>
                  <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>

                <div className="stat">
                  <div className="stat-title">Engagement</div>
                  <div className="stat-value">1.2%</div>
                  <div className="stat-desc">↘︎ 90 (14%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
