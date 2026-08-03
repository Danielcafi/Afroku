"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BLOG_POSTS } from "@/data/mockData";
import { Clock, ArrowRight, Search, BookOpen } from "lucide-react";
import Link from "next/link";

const CATEGORIES = ["Tous", "Événements", "Nature & Safari", "Gastronomie", "Tourisme Durable", "Histoire & Patrimoine", "Artisanat"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = BLOG_POSTS.filter((post) => {
    const matchCategory = activeCategory === "Tous" || post.category === activeCategory;
    const matchSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#ECFDF5]">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-gray-950 via-[#0F382C] to-gray-900 text-white py-14 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto text-center space-y-4 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <BookOpen className="w-5 h-5 text-[#10B981]" />
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#10B981]">
              Blog & Actualités
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black">
            Le Bénin <span className="text-[#10B981]">décrypté</span>
          </h1>
          <p className="text-sm text-gray-300 max-w-xl mx-auto">
            Guides pratiques, récits culturels et conseils de terrain pour vivre le Bénin comme un local.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-white border-b border-gray-200 py-4 px-4 sm:px-6 lg:px-8 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-[#0F382C] text-white shadow-sm"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-xl text-xs w-full sm:w-72">
            <Search className="w-4 h-4 text-gray-400 shrink-0" />
            <input 
              type="text" 
              placeholder="Rechercher un article..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent focus:outline-none w-full text-gray-800"
            />
          </div>

        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Results count */}
        <div className="flex items-center justify-between text-xs font-semibold text-gray-500">
          <span><strong>{filtered.length}</strong> article{filtered.length > 1 ? "s" : ""} trouvé{filtered.length > 1 ? "s" : ""}</span>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between"
            >
              {/* Image */}
              <div className="relative h-52 w-full bg-gray-100 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-3 left-3 bg-[#10B981] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-extrabold text-base text-gray-900 group-hover:text-[#10B981] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-xs">
                  <div className="flex items-center gap-3 text-gray-400">
                    <span className="font-medium">{post.author}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime} min
                    </span>
                  </div>
                  <span className="flex items-center gap-1 font-bold text-[#0F382C] group-hover:text-[#10B981] transition-colors">
                    Lire <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="text-center py-20 space-y-3">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto" />
            <h3 className="font-extrabold text-lg text-gray-900">Aucun article trouvé</h3>
            <p className="text-sm text-gray-500">Essayez de modifier vos filtres ou votre recherche.</p>
          </div>
        )}

        {/* Info Box */}
        <div className="bg-[#ECFDF5] p-6 rounded-2xl border border-[#A7F3D0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-[#0F382C] shrink-0" />
            <div>
              <h4 className="font-extrabold text-sm text-gray-900">Vous avez une histoire à raconter ?</h4>
              <p className="text-xs text-gray-600">Partagez votre expérience du Bénin avec notre communauté de voyageurs.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-4 py-2.5 bg-[#0F382C] hover:bg-[#1B5E46] text-white text-xs font-bold rounded-xl shrink-0 transition-all"
          >
            Nous contacter
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
