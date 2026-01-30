import { notFound } from "next/navigation";
import blogData from "../blogData";
import Blog1 from "../content/Blog1";
import Blog2 from "../content/Blog2";
import Blog3 from "../content/Blog3";
import Blog4 from "../content/Blog4";
import Blog5 from "../content/Blog5";
import Blog6 from "../content/Blog6";
import Blog7 from "../content/Blog7";
import Blog8 from "../content/Blog8";
import Blog9 from "../content/Blog9";
import Blog10 from "../content/Blog10";
import Blog11 from "../content/Blog11";
import Blog12 from "../content/Blog12";
import Blog13 from "../content/Blog13";
import Blog14 from "../content/Blog14";
import Blog15 from "../content/Blog15";
import Blog16 from "../content/Blog16";
import Blog17 from "../content/Blog17";
import Blog18 from "../content/Blog18";
import Blog19 from "../content/Blog19";
import Blog20 from "../content/Blog20";
import Blog21 from "../content/Blog21";
import Blog22 from "../content/Blog22";
import Blog23 from "../content/Blog23";
import Blog24 from "../content/Blog24";
import Blog25 from "../content/Blog25";
import Blog26 from "../content/Blog26";
import Blog28 from "../content/Blog28";
import Blog27 from "../content/Blog27";
import Blog29 from "../content/Blog29";
import Blog30 from "../content/Blog30";
import Blog31 from "../content/Blog31";
import Blog32 from "../content/Blog32";
import Blog33 from "../content/Blog33";
import Blog34 from "../content/Blog34";
import Blog35 from "../content/Blog35";
import Blog36 from "../content/Blog36";
import Blog37 from "../content/Blog37";
import Blog38 from "../content/Blog38";
import Blog39 from "../content/Blog39";
import Blog40 from "../content/Blog40";
import Blog41 from "../content/Blog41";
import Blog42 from "../content/Blog42";
import Blog43 from "../content/Blog43";
import Blog44 from "../content/Blog44";
import Blog45 from "../content/Blog45";
import Blog46 from "../content/Blog46";
import Blog47 from "../content/Blog47";
import Blog48 from "../content/Blog48";
import Blog49 from "../content/Blog49";
import Blog50 from "../content/Blog50";
import Blog51 from "./../content/Blog51";
import Blog52 from "./../content/Blog52";
import Blog53 from "../content/Blog53";
import Blog54 from "../content/Blog54";
import Blog55 from "../content/Blog55";
import Blog56 from "../content/Blog56";

const componentsMap = {
  "is-online-gambling-legal-in-india": Blog1,
  "how-to-deposit-with-upi-online-casinos-india": Blog2,
  "trusted-online-casinos-for-indians": Blog3,
  "casino-licenses-for-indian-players": Blog4,
  "safe-licensed-online-casino-india": Blog5,
  "how-to-play-aviator-game-online-casinos": Blog6,
  "how-to-manage-your-casino-account": Blog7,
  "top-strategies-to-win-online-roulette-baccarat-dragon-tiger": Blog8,
  "how-to-register-and-verify-your-account-in-online-casinos": Blog9,
  "how-to-avoid-scams-in-online-casinos": Blog10,
  "what-type-of-slots-should-i-play": Blog11,
  "casino-game-rules": Blog12,
  "best-time-to-play-in-a-casino": Blog13,
  "benefits-of-placing-a-bet": Blog14,
  "how-to-stay-safe-while-playing-casino-games-online": Blog15,
  "symbols-in-gambling-guide": Blog16,
  "enhance-your-online-casino-journey-with-reliable-gaming-insights": Blog17,
  "upi-casinos-in-india": Blog18,
  "how-to-play-andar-bahar-online-for-real-money": Blog19,
  "best-numbers-on-roulette": Blog20,
  "igt-slot-machine-guide": Blog21,
  "virtual-cockfighting-games-online": Blog22,
  "online-slots-real-money-vs-play-money": Blog23,
  "how-to-draw-a-treasure-map": Blog24,
  "roulette-prediction-chart": Blog25,
  "how-to-start-playing-casino-games-online-india": Blog26,
  "best-bets-for-new-players": Blog27,
  "casino-cheat-sheet": Blog28,
  "how-to-check-casino-license-before-you-play-online": Blog29,
  "fishing-casino-game": Blog30,
  "how-to-play-live-casino-games-baccarat-roulette-dragon-tiger": Blog31,
  "how-to-start-playing-slot-games-online": Blog32,
  "how-maximize-casino-experience-bonuses-and-offers": Blog33,
  "highest-wins-in-online-casino-history": Blog34,
  "advantage-play-in-blackjack-legal-strategies": Blog35,
  "how-much-is-a-jack-worth-in-blackjack": Blog36,
  "gambling-world-records-biggest-wins-and-bets": Blog37,
  "master-advanced-blackjack-techniques": Blog38,
  "top-common-blackjack-mistakes-to-avoid": Blog39,
  "inside-sports-betting-syndicates": Blog40,
  "maximize-betting-profits-using-bet-splits-wisely": Blog41,
  "how-to-recover-from-gambling-loss-smartly": Blog42,
  "smart-sports-betting-strategies-with-your-head": Blog43,
  "rtp-decoded-guide-slot-machine-success": Blog44,
  "stop-loss-and-take-profit-slots-strategy": Blog45,
  "cold-machine-fallacy-slots": Blog46,
  "learn-the-sports-betting-basics": Blog47,
  "how-to-choose-safe-legitimate-online-casino": Blog48,
  "roulette-beginners-number-layout": Blog49,
  "psychology-of-folding-casino-strategy": Blog50,
  "best-wbbl-betting-odds-match-predictions": Blog51,
  "best-strategies-for-betting-on-knockout-matches-2026": Blog52,
  "live-casino-madness-evo-sexy-ez-live": Blog53,
  "desi-classics-to-live-dealers-teen-patti-andar-bahar-guide": Blog54,
  "complete-cricket-betting-blueprint-wbbl-knockout-npl-predictions": Blog55,
  "how-to-bet-on-npl-matches-expert-tips-todays-picks": Blog56,
};

export async function generateStaticParams() {
  return blogData.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogData.find((item) => item.slug === slug);

  if (!blog) return notFound();

  return {
    title: blog.title,
    description: blog.description,
    alternates: {
      canonical: blog.url,
    },
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: blog.url,
      images: [blog.img],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: [blog.img],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = blogData.find((item) => item.slug === slug);
  if (!blog) return notFound();

  const BlogComponent = componentsMap[slug];

  // Schema definitions
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.description,
    image: blog.img,
    author: { "@type": "Person", name: blog.author },
    publisher: {
      "@type": "Organization",
      name: blog.publisher,
      logo: { "@type": "ImageObject", url: "https://www.a2k.fun/logo.png" },
    },
    mainEntityOfPage: blog.url,
  };

  const faqSchema =
    blog.faqs?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: blog.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.a2k.fun",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.a2k.fun/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: blog.url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-white text-black">
        {/* Blog Banner */}
        <div className="relative w-screen left-1/2 right-1/2 -ml-[50.5vw] -mr-[50vw] h-[400px] md:h-[480px] overflow-hidden">
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Title */}
        <div className="max-w-7xl mx-auto mt-10 mb-7 text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            {blog.title}
          </h1>
        </div>

        {/* Content + Suggested Reads */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 px-6 md:px-12 py-5">
          {/* Blog Content */}
          <article className="lg:col-span-8 space-y-10 text-lg md:text-xl text-black/70 leading-relaxed">
            {BlogComponent ? <BlogComponent /> : <p>No content found</p>}
          </article>

          {/* Suggested Reads */}
          <div className="lg:col-span-4 mt-8 space-y-6">
            <h3 className="text-4xl font-bold text-black mb-7">
              Suggested Reads
            </h3>

            {[...blogData]
              .reverse()
              .filter((b) => b.slug !== slug)
              .slice(0, 5)
              .map((s) => (
                <a
                  key={s.slug}
                  href={`/blog/${s.slug}`}
                  className="block p-4 bg-white border border-black/10 rounded-xl hover:bg-black/5 transition"
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-36 object-cover rounded-lg mb-3 border border-black/10"
                  />
                  <h4 className="text-lg font-semibold text-black">
                    {s.title}
                  </h4>
                  <p className="text-black/60 text-sm mt-1 line-clamp-3">
                    {s.description}
                  </p>
                </a>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
