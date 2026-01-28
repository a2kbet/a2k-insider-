// // app/sitemap.js
// import blogData from './blog/blogData';

// export const dynamic = 'force-static';
// export const revalidate = false;

// export default function sitemap() {
//   const baseUrl = 'https://www.a2k.fun';

//   const staticPages = [
//     {
//       url: `${baseUrl}/`,
//       lastModified: new Date().toISOString().split('T')[0],
//       changeFrequency: 'daily',
//       priority: 1.0,
//     },
//     {
//       url: `${baseUrl}/guide`,
//       lastModified: new Date().toISOString().split('T')[0],
//       changeFrequency: 'weekly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/blog`,
//       lastModified: new Date().toISOString().split('T')[0],
//       changeFrequency: 'daily',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/downloadapp`,
//       lastModified: new Date().toISOString().split('T')[0],
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//   ];

//   // ✅ Smart handling for both `url` and `slug`
//   const blogPages = blogData
//     .filter((blog) => blog.slug || blog.url)
//     .map((blog) => ({
//       url: blog.url
//         ? blog.url // already a complete URL
//         : `${baseUrl}/blog/${blog.slug}/`, // fallback if url missing
//       lastModified: new Date().toISOString().split('T')[0],
//       changeFrequency: 'weekly',
//       priority: 0.7,
//     }));

//   return [...staticPages, ...blogPages];
// }

// app/sitemap.js
import blogData from "./blog/blogData";

export const dynamic = "force-static";
export const revalidate = false;

export default function sitemap() {
  const baseUrl = "https://a2k.fun"; // no www

  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/guide`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/downloadapp`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Ensure all blog URLs use baseUrl without www
  const blogPages = blogData
    .filter((blog) => blog.slug)
    .map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}/`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  return [...staticPages, ...blogPages];
}
