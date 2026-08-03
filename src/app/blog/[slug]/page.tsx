"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BLOG_POSTS } from "@/data/mockData";
import { Clock, ArrowLeft, Calendar, Tag, Share2, BookOpen } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-[#ECFDF5]">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto" />
            <h1 className="text-2xl font-black text-gray-900">Article introuvable</h1>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-[#10B981] hover:text-[#059669]">
              <ArrowLeft className="w-4 h-4" /> Retour au blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const related = BLOG_POSTS.filter((p) => p.id !== post.id && p.category === post.category).slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col bg-[#ECFDF5]">
      <Navbar />

      {/* Hero Image */}
      <section className="relative h-[400px] sm:h-[500px] overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
          <div className="max-w-4xl mx-auto space-y-4">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-bold text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Retour au blog
            </Link>
            <span className="bg-[#10B981] text-white text-[10px] font-extrabold px-3 py-1 rounded-full">
              {post.category}
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {post.publishedAt}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime} min de lecture
              </span>
              <span>Par {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Article Body (mock content) */}
        <article className="bg-white rounded-2xl border border-gray-200/80 p-6 sm:p-10 space-y-6">
          <p className="text-base text-gray-700 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              Le Bénin est un pays d&apos;une richesse culturelle inouïe, où chaque region offre des découvertes uniques. 
              Des plages du littoral aux montagnes de l&apos;Atacora, en passant par les savanes du Nord, 
              ce petit pays d&apos;Afrique de l&apos;Ouest recèle des trésors qui attendent d&apos;être explorés.
            </p>
            <h2 className="text-xl font-black text-[#0F382C] pt-4">Un patrimoine culturel unique</h2>
            <p>
              Le Bénin est le berceau du vodoun, une spiritualité millénaire qui influence profondément la culture 
              et les traditions du pays. Les cérémonies, les rituels et les festivals sont autant d&apos;occasions 
              de découvrir cette spiritualité fascinante.
            </p>
            <h2 className="text-xl font-black text-[#0F382C] pt-4">Des paysages variés</h2>
            <p>
              Du lac Nokoué aux chutes de Tanougou, en passant par la Pendjari, le Bénin offre une diversité 
              de paysages qui surprend les visiteurs. La nature y est préservée et offre des rencontres inoubliables 
              avec la faune africaine.
            </p>
            <h2 className="text-xl font-black text-[#0F382C] pt-4">Nos conseils pratiques</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Meilleure période pour visiter : de novembre à février</li>
              <li>Langue officielle : français (langues locales : fon, yoruba, bariba)</li>
              <li>Monnaie : Franc CFA (XOF)</li>
              <li>Sécurité : pays généralement sûr pour les touristes</li>
              <li>Visa : vérifiez les conditions d&apos;entrée selon votre nationalité</li>
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-gray-100">
            <Tag className="w-4 h-4 text-gray-400" />
            {post.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Share */}
          <div className="flex items-center gap-3 pt-4">
            <span className="text-xs font-bold text-gray-500">Partager :</span>
            <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-[#10B981] hover:text-white text-gray-400 flex items-center justify-center transition-all">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </article>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-xl font-black text-[#0F382C]">Articles similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/blog/${r.slug}`}
                  className="group bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col"
                >
                  <div className="relative h-44 bg-gray-100 overflow-hidden">
                    <img 
                      src={r.image} 
                      alt={r.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 space-y-2">
                    <span className="text-[10px] font-extrabold text-[#10B981] uppercase tracking-wider">{r.category}</span>
                    <h3 className="font-extrabold text-sm text-gray-900 group-hover:text-[#10B981] transition-colors leading-snug line-clamp-2">
                      {r.title}
                    </h3>
                    <div className="flex items-center gap-3 text-[11px] text-gray-400">
                      <span>{r.publishedAt}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{r.readTime} min</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
