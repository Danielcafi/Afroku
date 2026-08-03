"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ARTISANAT_PRODUCTS } from "@/data/mockData";
import { ShoppingBag, Star, ShieldCheck, MapPin, Truck, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [cartCount, setCartCount] = useState(0);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const handleAddToCart = (name: string) => {
    setCartCount(prev => prev + 1);
    setAddedItem(name);
    setTimeout(() => setAddedItem(null), 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-[#0F382C] text-white py-12 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-xl">
            <span className="bg-[#10B981] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Made in Bénin
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              Marketplace de l'Artisanat Béninois
            </h1>
            <p className="text-sm text-emerald-100/80 leading-relaxed">
              Achetez directement auprès des maîtres artisans d'Abomey, Ouidah et Natitingou. Tam-tams, masques vaudou, tissus Kanvo et sculptures livrés ou à retirer sur place.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-center shrink-0">
            <ShoppingBag className="w-10 h-10 text-[#10B981] mx-auto mb-2" />
            <span className="text-xl font-extrabold text-white block">{cartCount} articles</span>
            <span className="text-xs text-emerald-200">Dans votre panier</span>
          </div>
        </div>
      </section>

      {/* Notification toast */}
      {addedItem && (
        <div className="fixed bottom-6 right-6 bg-[#0F382C] text-white px-5 py-3 rounded-2xl shadow-2xl z-50 flex items-center gap-3 text-xs font-bold border border-emerald-400 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>"{addedItem}" ajouté à votre panier avec succès !</span>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 pb-4 text-xs font-bold">
          {["Tous", "Instruments Musique", "Masques & Sculptures", "Tenues & Textiles", "Sculptures & Bronze"].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl transition-all ${
                selectedCategory === cat 
                  ? "bg-[#0F382C] text-white shadow-sm" 
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTISANAT_PRODUCTS
            .filter(p => selectedCategory === "Tous" || p.category === selectedCategory)
            .map(product => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group"
              >
                <div className="relative h-56 w-full bg-gray-100 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#ECFDF5] text-[#0F382C] border border-[#A7F3D0] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
                    Authentique Bénin
                  </span>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#10B981]" />
                      {product.artisanName}
                    </p>
                    <h3 className="font-extrabold text-base text-gray-900 group-hover:text-[#10B981] transition-colors leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 block font-medium">Prix direct artisan</span>
                      <span className="text-lg font-black text-[#0F382C]">
                        {product.price.toLocaleString()} FCFA
                      </span>
                    </div>

                    <button
                      onClick={() => handleAddToCart(product.name)}
                      className="px-3.5 py-2 bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold rounded-xl shadow transition-all flex items-center gap-1 cursor-pointer"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Acheter</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Delivery Rassurance */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="space-y-1">
            <Truck className="w-6 h-6 text-[#0F382C] mx-auto" />
            <h4 className="font-extrabold text-sm text-gray-900">Livraison à l'hôtel ou Aéroport</h4>
            <p className="text-xs text-gray-500">Récupérez vos achats directement pendant votre voyage au Bénin.</p>
          </div>
          <div className="space-y-1">
            <ShieldCheck className="w-6 h-6 text-[#10B981] mx-auto" />
            <h4 className="font-extrabold text-sm text-gray-900">Certificat d'Authenticité</h4>
            <p className="text-xs text-gray-500">Chaque objet d'art est accompagné d'un certificat d'artisan béninois.</p>
          </div>
          <div className="space-y-1">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
            <h4 className="font-extrabold text-sm text-gray-900">Paiement Mobile Money Direct</h4>
            <p className="text-xs text-gray-500">Règlement instantané sécurisé par MTN MoMo ou Moov Money.</p>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
