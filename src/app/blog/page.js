import blogData from "./blogData";
import BlogListing from "./blogListing";

export const metadata = {
  title: "Our Blogs | a2k.fun",
};

export async function generateStaticParams() {
  return blogData.map((item) => ({ slug: item.slug }));
}

export default function BlogPage() {
  const reversedData = [...blogData].reverse();

  return <BlogListing blogData={reversedData} />;
}
