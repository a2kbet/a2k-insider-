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
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div className="max-w-8xl mx-auto w-full px-10 py-10 text-black flex-grow">
        <h1 className="text-4xl font-bold mb-10 text-center">Our Blogs</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentBlogs.map((blog) => (
            <div
              key={blog.slug}
              className="bg-white p-6 rounded-xl border border-black/10 transition"
            >
              <div className="relative w-full h-60 mb-4 rounded-lg overflow-hidden">
                <Link href={`/blog/${blog.slug}`} className="group block">
                  <div className="relative w-full h-60 rounded-lg overflow-hidden">
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

              <h2 className="text-2xl font-semibold mb-2 text-black">
                {blog.title}
              </h2>

              <p className="text-black/70 mb-4">{blog.description}</p>

              <Link
                href={`/blog/${blog.slug}`}
                className="text-black font-medium underline hover:opacity-70 transition"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center py-8 space-x-4 border-t border-black/10">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 rounded-full border transition ${
              currentPage === i + 1
                ? "bg-black text-white border-black font-medium"
                : "border-black/30 text-black/70 hover:bg-black hover:text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
