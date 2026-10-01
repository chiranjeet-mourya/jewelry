import React, { useMemo } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  Link as LinkIcon,
  Mail,
  Share2,
  Sparkles,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import blog1 from "../assets/blog/blog1.jpg"
import blog2 from "../assets/blog/blog2.jpg"

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Perfect Jewelry for Every Occasion",
    excerpt:
      "From everyday elegance to special celebrations, discover how to select jewelry that complements your style and occasion.",
    category: "Style Guide",
    date: "September 24, 2026",
    readTime: "5 min read",
    image: blog1,
    author: "The Jewelry House",
    content: [
      {
        type: "paragraph",
        text: "Jewelry has a unique ability to transform an outfit. A delicate necklace can add softness to a casual look, while a statement ring can instantly elevate an evening ensemble.",
      },
      {
        type: "heading",
        text: "Start with the occasion",
      },
      {
        type: "paragraph",
        text: "The first step in choosing jewelry is understanding where you are going. Everyday occasions often call for subtle pieces that are comfortable and versatile. Special events allow you to experiment with larger silhouettes, sparkling stones and more expressive designs.",
      },
      {
        type: "quote",
        text: "The right piece of jewelry should feel like an extension of your personal style.",
      },
      {
        type: "heading",
        text: "For everyday elegance",
      },
      {
        type: "paragraph",
        text: "Minimal necklaces, small hoops and refined rings are excellent choices for everyday wear. They work beautifully with both casual and professional outfits without overpowering your look.",
      },
      {
        type: "heading",
        text: "For special occasions",
      },
      {
        type: "paragraph",
        text: "When dressing for a celebration, consider pieces with more visual presence. Layered necklaces, elegant earrings or a statement ring can become the focal point of your outfit.",
      },
      {
        type: "heading",
        text: "Let your personality lead",
      },
      {
        type: "paragraph",
        text: "Trends can provide inspiration, but your jewelry collection should ultimately reflect you. Choose pieces that make you feel confident and comfortable. Timeless jewelry often becomes meaningful because it carries memories as well as beauty.",
      },
    ],
  },
  {
    id: 2,
    title: "The Timeless Beauty of Gold Jewelry",
    excerpt:
      "Explore why gold has remained one of the most loved materials in jewelry and how to style it beautifully.",
    category: "Jewelry Guide",
    date: "September 18, 2026",
    readTime: "4 min read",
    image: blog2,
    author: "The Jewelry House",
    content: [
      {
        type: "paragraph",
        text: "Gold has been admired for centuries for its warmth, beauty and timeless character. It continues to be one of the most versatile choices for modern jewelry wardrobes.",
      },
      {
        type: "heading",
        text: "Why gold never goes out of style",
      },
      {
        type: "paragraph",
        text: "Unlike many short-lived trends, gold works across generations. Its warm tone can complement both understated and luxurious looks.",
      },
      {
        type: "heading",
        text: "Styling gold jewelry",
      },
      {
        type: "paragraph",
        text: "Try pairing a fine gold chain with everyday clothing or combine multiple pieces when you want a more expressive appearance.",
      },
      {
        type: "quote",
        text: "Timeless design gives jewelry the ability to remain beautiful long after trends change.",
      },
    ],
  },
  {
    id: 3,
    title: "5 Ways to Style Your Favorite Necklace",
    excerpt:
      "Learn simple layering and styling techniques that can transform your everyday necklace collection.",
    category: "Styling",
    date: "September 12, 2026",
    readTime: "3 min read",
    image: blog2,
    author: "The Jewelry House",
    content: [
      {
        type: "paragraph",
        text: "A necklace can completely change the character of an outfit. With a few simple styling techniques, one favorite piece can become part of many different looks.",
      },
      {
        type: "heading",
        text: "1. Keep it minimal",
      },
      {
        type: "paragraph",
        text: "Wear a delicate necklace on its own for an effortless everyday look.",
      },
      {
        type: "heading",
        text: "2. Create layers",
      },
      {
        type: "paragraph",
        text: "Combine necklaces of different lengths to create depth while keeping the overall appearance balanced.",
      },
      {
        type: "heading",
        text: "3. Mix textures",
      },
      {
        type: "paragraph",
        text: "Combining subtle chains with a pendant can add visual interest without making the look feel heavy.",
      },
    ],
  },
  {
    id: 4,
    title: "Jewelry Care: Keep Your Pieces Looking Beautiful",
    excerpt:
      "Simple care and storage tips to help your favorite jewelry maintain its shine for years to come.",
    category: "Jewelry Care",
    date: "September 06, 2026",
    readTime: "6 min read",
    image: blog2,
    author: "The Jewelry House",
    content: [
      {
        type: "paragraph",
        text: "Beautiful jewelry deserves thoughtful care. A simple maintenance routine can help your favorite pieces stay polished and ready to wear.",
      },
      {
        type: "heading",
        text: "Store pieces separately",
      },
      {
        type: "paragraph",
        text: "Keep individual pieces separated whenever possible. This helps reduce scratching, tangling and unnecessary contact between different materials.",
      },
      {
        type: "heading",
        text: "Clean gently",
      },
      {
        type: "paragraph",
        text: "Use a soft, clean cloth to gently remove everyday residue. Avoid harsh household cleaners unless the jewelry manufacturer specifically recommends them.",
      },
      {
        type: "heading",
        text: "Give your jewelry a break",
      },
      {
        type: "paragraph",
        text: "Remove jewelry before activities where it may be exposed to excessive moisture, chemicals or physical impact.",
      },
    ],
  },
  {
    id: 5,
    title: "The Art of Choosing the Right Ring",
    excerpt:
      "A practical guide to finding a ring that matches your personality, lifestyle and personal style.",
    category: "Style Guide",
    date: "August 29, 2026",
    readTime: "5 min read",
    image: blog2,
    author: "The Jewelry House",
    content: [
      {
        type: "paragraph",
        text: "A ring is one of the most personal jewelry pieces you can own. Its shape, size and finish can say a lot about your individual style.",
      },
      {
        type: "heading",
        text: "Think about your everyday style",
      },
      {
        type: "paragraph",
        text: "If your wardrobe is minimal, a refined ring can blend naturally into your everyday outfits. If you enjoy expressive fashion, consider bolder shapes and details.",
      },
      {
        type: "heading",
        text: "Consider comfort",
      },
      {
        type: "paragraph",
        text: "The best ring is one that feels comfortable throughout your day. Think about your routine before selecting a particularly large or detailed design.",
      },
    ],
  },
  {
    id: 6,
    title: "Minimal Jewelry Is Having a Moment",
    excerpt:
      "Discover the beauty of subtle jewelry and how minimal pieces can create an effortlessly polished look.",
    category: "Trends",
    date: "August 21, 2026",
    readTime: "4 min read",
    image: blog2,
    author: "The Jewelry House",
    content: [
      {
        type: "paragraph",
        text: "Minimal jewelry continues to find a place in modern wardrobes because it combines simplicity with sophistication.",
      },
      {
        type: "heading",
        text: "Less can be more",
      },
      {
        type: "paragraph",
        text: "A simple chain, small earrings or a refined ring can provide just enough detail to complete an outfit.",
      },
      {
        type: "quote",
        text: "Elegance often comes from knowing when to stop.",
      },
    ],
  },
  {
    id: 7,
    title: "Gold or Silver: Which One Is Right for You?",
    excerpt:
      "Understand the differences between gold and silver jewelry and discover which style suits your wardrobe.",
    category: "Jewelry Guide",
    date: "August 15, 2026",
    readTime: "5 min read",
    image: blog2,
    author: "The Jewelry House",
    content: [
      {
        type: "paragraph",
        text: "Gold and silver each bring a different visual character to an outfit. Choosing between them can come down to personal preference, wardrobe and the mood you want to create.",
      },
      {
        type: "heading",
        text: "The warmth of gold",
      },
      {
        type: "paragraph",
        text: "Gold creates a warm and luxurious appearance and pairs naturally with earthy and neutral tones.",
      },
      {
        type: "heading",
        text: "The coolness of silver",
      },
      {
        type: "paragraph",
        text: "Silver offers a clean and contemporary appearance and can work especially well with monochrome wardrobes.",
      },
    ],
  },
  {
    id: 8,
    title: "Jewelry Trends Worth Knowing This Season",
    excerpt:
      "A look at elegant jewelry styles that can refresh your collection without compromising timeless appeal.",
    category: "Trends",
    date: "August 08, 2026",
    readTime: "4 min read",
    image: blog2,
    author: "The Jewelry House",
    content: [
      {
        type: "paragraph",
        text: "Seasonal trends can be a great source of inspiration when updating your jewelry collection. The key is finding trends that still feel authentic to your personal style.",
      },
      {
        type: "heading",
        text: "Statement silhouettes",
      },
      {
        type: "paragraph",
        text: "Larger earrings, sculptural rings and expressive necklaces can add personality to a simple outfit.",
      },
      {
        type: "heading",
        text: "Modern layering",
      },
      {
        type: "paragraph",
        text: "Layering remains an easy way to create a personalized look using pieces you already own.",
      },
    ],
  },
];

const BlogDetails = () => {
  const { id } = useParams();

  const currentIndex = blogPosts.findIndex((post) => post.id === Number(id));

  const post = currentIndex !== -1 ? blogPosts[currentIndex] : blogPosts[0];

  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  const nextPost =
    currentIndex >= 0 && currentIndex < blogPosts.length - 1
      ? blogPosts[currentIndex + 1]
      : null;

  const relatedPosts = useMemo(() => {
    return blogPosts
      .filter((item) => item.id !== post.id && item.category === post.category)
      .slice(0, 3);
  }, [post]);

  const currentUrl = window.location.href;

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        currentUrl,
      )}`,
      "_blank",
      "width=600,height=500",
    );
  };

  const shareEmail = () => {
    window.location.href = `mailto:?subject=${encodeURIComponent(
      post.title,
    )}&body=${encodeURIComponent(currentUrl)}`;
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      alert("Article link copied!");
    } catch (error) {
      console.error("Copy link error:", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#faf9f7]">

      <section className="bg-[#222] px-4 pb-12 pt-8 sm:pb-16 sm:pt-10">
        <div className="mx-auto container">
          <div className="flex flex-wrap items-center gap-2 text-[9px] uppercase tracking-wider">
            <Link
              to="/"
              className="text-white/40 transition hover:text-[#b58b4c]"
            >
              Home
            </Link>

            <ChevronRight size={11} className="text-white/20" />

            <Link
              to="/blog"
              className="text-white/40 transition hover:text-[#b58b4c]"
            >
              Journal
            </Link>

            <ChevronRight size={11} className="text-white/20" />

            <span className="max-w-[180px] truncate text-[#b58b4c] sm:max-w-none">
              {post.category}
            </span>
          </div>

          <div className="mx-auto mt-12 max-w-4xl text-center">
            <div className="flex items-center justify-center gap-3 text-[9px] font-bold uppercase tracking-[0.22em] text-[#b58b4c]">
              <span>{post.category}</span>

              <span className="h-1 w-1 rounded-full bg-[#b58b4c]" />

              <span>{post.readTime}</span>
            </div>

            <h1 className="mt-5 font-serif text-3xl leading-tight text-white sm:text-3xl lg:text-4xl">
              {post.title}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/50 sm:text-base">
              {post.excerpt}
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-[9px] uppercase tracking-wider text-white/40">
              <span className="flex items-center gap-2">
                <CalendarDays size={13} />
                {post.date}
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />

              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="-mt-1 overflow-hidden bg-white sm:-mt-4">
          <img
            src={post.image}
            alt={post.title}
            className="h-[300px] w-full object-cover sm:h-[480px] lg:h-[600px]"
            onError={(e) => {
              e.currentTarget.src = "/products/necklace-1.jpg";
            }}
          />
        </div>
      </section>

      <section className="mx-auto container px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[70px_minmax(0,760px)_1fr] lg:gap-14">

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-4 text-center text-[8px] font-bold uppercase tracking-[0.2em] text-gray-400">
                Share
              </p>

              <div className="flex flex-col items-center gap-2">
                <button
                  type="button"
                  onClick={shareFacebook}
                  className="flex h-10 w-10 items-center justify-center border border-gray-200 bg-white text-gray-500 transition hover:border-[#b58b4c] hover:bg-[#b58b4c] hover:text-white"
                  aria-label="Share on Facebook"
                >
                  <span className="text-xs font-bold">f</span>
                </button>

                <button
                  type="button"
                  onClick={shareEmail}
                  className="flex h-10 w-10 items-center justify-center border border-gray-200 bg-white text-gray-500 transition hover:border-[#b58b4c] hover:bg-[#b58b4c] hover:text-white"
                  aria-label="Share by email"
                >
                  <Mail size={15} />
                </button>

                <button
                  type="button"
                  onClick={copyLink}
                  className="flex h-10 w-10 items-center justify-center border border-gray-200 bg-white text-gray-500 transition hover:border-[#b58b4c] hover:bg-[#b58b4c] hover:text-white"
                  aria-label="Copy article link"
                >
                  <LinkIcon size={15} />
                </button>
              </div>
            </div>
          </aside>

          <article className="min-w-0">

            <div className="mb-8 flex items-center gap-3 border-b border-gray-200 pb-6 lg:hidden">
              <Share2 size={15} className="text-[#b58b4c]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                Share this story
              </span>

              <button
                type="button"
                onClick={shareFacebook}
                className="flex h-10 w-10 items-center justify-center border border-gray-200 bg-white text-gray-500 transition hover:border-[#b58b4c] hover:bg-[#b58b4c] hover:text-white"
                aria-label="Share on Facebook"
              >
                <span className="text-xs font-bold">f</span>
              </button>

              <button
                type="button"
                onClick={shareEmail}
                className="text-gray-400 transition hover:text-[#b58b4c]"
              >
                <Mail size={15} />
              </button>

              <button
                type="button"
                onClick={copyLink}
                className="text-gray-400 transition hover:text-[#b58b4c]"
              >
                <LinkIcon size={15} />
              </button>
            </div>

            <div className="mb-10 border-l-2 border-[#b58b4c] pl-5 sm:pl-7">
              <p className="font-serif text-xl leading-8 text-[#333] sm:text-2xl sm:leading-9">
                {post.excerpt}
              </p>
            </div>

            <div className="space-y-7">
              {post.content.map((block, index) => {
                if (block.type === "heading") {
                  return (
                    <h2
                      key={index}
                      className="pt-4 font-serif text-2xl text-[#222] sm:text-3xl"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "quote") {
                  return (
                    <blockquote
                      key={index}
                      className="my-10 border-y border-[#b58b4c]/30 py-8 text-center"
                    >
                      <Sparkles size={18} className="mx-auto text-[#b58b4c]" />

                      <p className="mx-auto mt-4 max-w-2xl font-serif text-xl italic leading-8 text-[#555] sm:text-2xl">
                        “{block.text}”
                      </p>
                    </blockquote>
                  );
                }

                return (
                  <p
                    key={index}
                    className="text-sm leading-8 text-gray-600 sm:text-base sm:leading-9"
                  >
                    {block.text}
                  </p>
                );
              })}
            </div>

            <div className="mt-12 border-t border-gray-200 pt-8">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#222] text-[#b58b4c]">
                  <Sparkles size={17} />
                </div>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-400">
                    Written by
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#222]">
                    {post.author}
                  </p>
                </div>
              </div>
            </div>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 border-t border-[#b58b4c] pt-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b58b4c]">
                Article Details
              </p>

              <div className="mt-5 space-y-5">
                <div>
                  <p className="text-[9px] uppercase tracking-wider text-gray-400">
                    Category
                  </p>

                  <p className="mt-1 text-xs font-semibold text-[#222]">
                    {post.category}
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-wider text-gray-400">
                    Published
                  </p>

                  <p className="mt-1 text-xs font-semibold text-[#222]">
                    {post.date}
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-wider text-gray-400">
                    Reading Time
                  </p>

                  <p className="mt-1 text-xs font-semibold text-[#222]">
                    {post.readTime}
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto grid container sm:grid-cols-2">
          {previousPost ? (
            <Link
              to={`/blog/${previousPost.id}`}
              className="group border-b border-gray-200 p-6 transition hover:bg-[#faf9f7] sm:border-b-0 sm:border-r sm:p-10"
            >
              <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
                <ArrowLeft size={13} />
                Previous Story
              </div>

              <h3 className="mt-3 font-serif text-xl leading-7 text-[#222] transition group-hover:text-[#b58b4c]">
                {previousPost.title}
              </h3>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          {nextPost && (
            <Link
              to={`/blog/${nextPost.id}`}
              className="group p-6 text-left transition hover:bg-[#faf9f7] sm:p-10 sm:text-right"
            >
              <div className="flex items-center justify-start gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 sm:justify-end">
                Next Story
                <ArrowRight size={13} />
              </div>

              <h3 className="mt-3 font-serif text-xl leading-7 text-[#222] transition group-hover:text-[#b58b4c]">
                {nextPost.title}
              </h3>
            </Link>
          )}
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="mx-auto container px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="text-center">
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#b58b4c]">
              You May Also Like
            </p>

            <h2 className="mt-2 font-serif text-3xl text-[#222] sm:text-4xl">
              Related Stories
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((related) => (
              <article key={related.id} className="group">
                <Link
                  to={`/blog/${related.id}`}
                  className="block aspect-[4/3] overflow-hidden bg-white"
                >
                  <img
                    src={related.image}
                    alt={related.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/products/necklace-1.jpg";
                    }}
                  />
                </Link>

                <div className="pt-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#b58b4c]">
                    {related.category}
                  </p>

                  <Link to={`/blog/${related.id}`}>
                    <h3 className="mt-2 font-serif text-xl leading-7 text-[#222] transition group-hover:text-[#b58b4c]">
                      {related.title}
                    </h3>
                  </Link>

                  <p className="mt-2 line-clamp-2 text-xs leading-6 text-gray-500">
                    {related.excerpt}
                  </p>

                  <Link
                    to={`/blog/${related.id}`}
                    className="mt-4 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider text-[#222] transition hover:text-[#b58b4c]"
                  >
                    Read Story
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="bg-[#222] px-4 py-12">
        <div className="text-center">
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#b58b4c]">
            Continue Exploring
          </p>

          <h2 className="mt-3 font-serif text-3xl text-white">
            More stories await
          </h2>

          <Link
            to="/blog"
            className="mx-auto mt-6 flex w-fit items-center gap-3 border border-white/20 px-6 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition hover:border-[#b58b4c] hover:bg-[#b58b4c]"
          >
            <ArrowLeft size={14} />
            Back To Journal
          </Link>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;
