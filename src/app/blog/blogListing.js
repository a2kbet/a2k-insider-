"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogListing({ blogData }) {
  const blogsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const savedPage = localStorage.getItem("currentBlogPage");
    if (savedPage) {
      setCurrentPage(parseInt(savedPage, 10));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currentBlogPage", currentPage.toString());
  }, [currentPage]);

  const totalPages = Math.ceil(blogData.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogData.slice(startIndex, startIndex + blogsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#1a1b1b] flex flex-col justify-between">
      <div className="max-w-8xl mx-auto w-full px-10 py-10 text-white flex-grow">
        <h1 className="text-4xl font-bold mb-10 text-center">Our Blogs</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-black p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="relative w-full h-60 mb-4 rounded-lg overflow-hidden">
                <Link href={`/blog/${blog.slug}`} className="group block">
                  <div className="relative w-full h-60 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={blog.img || "/images/blog1.jpg"}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                </Link>
              </div>
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-400 mb-4">{blog.description}</p>
              <Link
                href={`/blog/${blog.slug}`}
                className="text-yellow-400 font-medium hover:text-yellow-300 transition"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center py-8 space-x-4 border-t border-gray-800">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded-full border ${
              currentPage === i + 1
                ? "bg-yellow-400 text-black font-semibold border-yellow-400"
                : "border-gray-600 text-gray-300 hover:bg-gray-800"
            } transition`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
