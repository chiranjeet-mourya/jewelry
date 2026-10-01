import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  Search,
  Sparkles,
  Tag,
} from "lucide-react";
import { Link } from "react-router-dom";

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
    featured: true,
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
  },
];

const categories = [
  "All",
  "Style Guide",
  "Jewelry Guide",
  "Styling",
  "Jewelry Care",
  "Trends",
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" ||
        post.category === activeCategory;

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        !searchText ||
        post.title.toLowerCase().includes(searchText) ||
        post.excerpt.toLowerCase().includes(searchText) ||
        post.category.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <main className="min-h-screen bg-[#faf9f7]">

      <section className="relative overflow-hidden bg-[#222] px-4 py-16 sm:py-20 lg:py-24">

        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#b58b4c]/20" />

        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-[#b58b4c]/10" />

        <div className="relative mx-auto container">

          <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider">
            <Link
              to="/"
              className="text-white/40 transition hover:text-[#b58b4c]"
            >
              Home
            </Link>

            <ChevronRight
              size={12}
              className="text-white/20"
            />

            <span className="text-[#b58b4c]">
              Journal
            </span>
          </div>

          <div className="mx-auto mt-10 container text-center">
            <div className="mx-auto mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#b58b4c]/10 text-[#b58b4c]">
              <Sparkles size={17} />
            </div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#b58b4c]">
              The Jewelry Journal
            </p>

            <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Stories of
              <span className="block text-[#b58b4c]">
                timeless beauty
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
              Discover jewelry inspiration, styling ideas, care guides
              and stories behind the pieces you love.
            </p>
          </div>
        </div>
      </section>

      {featuredPost && (
        <section className="mx-auto container px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
          <div className="grid overflow-hidden bg-white shadow-sm lg:grid-cols-2">

            <Link
              to={`/blog/${featuredPost.id}`}
              className="group relative block min-h-[300px] overflow-hidden sm:min-h-[420px]"
            >
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src =
                    "/products/necklace-1.jpg";
                }}
              />

              <div className="absolute left-5 top-5 bg-[#b58b4c] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                Featured Story
              </div>
            </Link>


            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#b58b4c]">
                <Tag size={12} />
                {featuredPost.category}
              </div>

              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#222] sm:text-4xl">
                {featuredPost.title}
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-500">
                {featuredPost.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-[10px] text-gray-400">
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={13} />
                  {featuredPost.date}
                </span>

                <span className="h-1 w-1 rounded-full bg-gray-300" />

                <span className="flex items-center gap-1.5">
                  <Clock3 size={13} />
                  {featuredPost.readTime}
                </span>
              </div>

              <Link
                to={`/blog/${featuredPost.id}`}
                className="mt-8 flex w-fit items-center gap-3 bg-[#222] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#b58b4c]"
              >
                Read Story
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto container px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#b58b4c]">
              Latest Stories
            </p>

            <h2 className="mt-2 font-serif text-3xl text-[#222] sm:text-4xl">
              From our journal
            </h2>
          </div>

          <div className="relative w-full lg:w-72">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search articles..."
              className="h-11 w-full border border-gray-200 bg-white pl-11 pr-4 text-xs text-[#222] outline-none transition focus:border-[#b58b4c]"
            />
          </div>
        </div>

        <div className="mt-8 overflow-x-auto border-b border-gray-200 pb-4">
          <div className="flex min-w-max items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.16em] transition ${
                  activeCategory === category
                    ? "bg-[#222] text-white"
                    : "bg-white text-gray-500 hover:bg-[#b58b4c] hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="mt-10 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts
              .filter((post) => post.id !== featuredPost?.id)
              .map((post) => (
                <article
                  key={post.id}
                  className="group"
                >
                  <Link
                    to={`/blog/${post.id}`}
                    className="relative block aspect-[4/3] overflow-hidden bg-white"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src =
                          "/products/necklace-1.jpg";
                      }}
                    />

                    <span className="absolute left-4 top-4 bg-white px-3 py-2 text-[8px] font-bold uppercase tracking-[0.15em] text-[#222]">
                      {post.category}
                    </span>
                  </Link>

                  <div className="pt-5">
                    <div className="flex items-center gap-3 text-[9px] uppercase tracking-wider text-gray-400">
                      <span className="flex items-center gap-1">
                        <CalendarDays size={11} />
                        {post.date}
                      </span>

                      <span className="h-1 w-1 rounded-full bg-gray-300" />

                      <span className="flex items-center gap-1">
                        <Clock3 size={11} />
                        {post.readTime}
                      </span>
                    </div>

                    <Link
                      to={`/blog/${post.id}`}
                      className="block"
                    >
                      <h3 className="mt-3 font-serif text-xl leading-7 text-[#222] transition group-hover:text-[#b58b4c]">
                        {post.title}
                      </h3>
                    </Link>

                    <p className="mt-3 line-clamp-2 text-xs leading-6 text-gray-500">
                      {post.excerpt}
                    </p>

                    <Link
                      to={`/blog/${post.id}`}
                      className="mt-5 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#222] transition hover:text-[#b58b4c]"
                    >
                      Read More
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </article>
              ))}
          </div>
        ) : (

          <div className="flex min-h-[300px] items-center justify-center text-center">
            <div>
              <Search
                size={32}
                strokeWidth={1.3}
                className="mx-auto text-[#b58b4c]"
              />

              <h3 className="mt-5 font-serif text-2xl text-[#222]">
                No stories found
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Try another search or category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
                className="mt-5 bg-[#222] px-5 py-3 text-[9px] font-bold uppercase tracking-wider text-white transition hover:bg-[#b58b4c]"
              >
                View All Stories
              </button>
            </div>
          </div>
        )}
      </section>

      <section className="bg-[#222] px-4 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Sparkles
            size={19}
            className="mx-auto text-[#b58b4c]"
          />

          <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[#b58b4c]">
            Stay Inspired
          </p>

          <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
            Jewelry inspiration,
            <span className="block text-[#b58b4c]">
              delivered to you
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-xs leading-6 text-white/40">
            Subscribe for styling inspiration, jewelry care tips,
            new collection stories and exclusive updates.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-7 flex max-w-md flex-col gap-2 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="h-12 flex-1 border border-white/10 bg-white/5 px-4 text-xs text-white outline-none placeholder:text-white/30 focus:border-[#b58b4c]"
            />

            <button
              type="submit"
              className="h-12 bg-[#b58b4c] px-6 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#222]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Blog;