"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ShieldCheck, CheckCircle2, Phone, CreditCard, ArrowLeft, Smartphone } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ReservationPage() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState<"mtn" | "moov" | "card">("mtn");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <Link href="/explorer" className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-600 hover:text-[#0F382C]">
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à l'exploration</span>
          </Link>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            <ShieldCheck className="w-4 h-4" />
            <span>Paiement sécurisé ssl 256 bits</span>
          </div>
        </div>

        {isSuccess ? (
          /* Confirmation State */
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl border border-gray-200 shadow-xl text-center space-y-6 my-10">
            <div className="w-20 h-20 bg-[#ECFDF5] text-[#0F382C] rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            
            <div className="space-y-2">
              <span className="bg-[#FFF7ED] text-[#C2410C] text-xs font-extrabold px-3 py-1 rounded-full border border-[#FFEDD5]">
                Réservation Confirmée !
              </span>
              <h2 className="text-2xl font-black text-gray-900">
                Félicitations pour votre réservation
              </h2>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Votre paiement Mobile Money de <strong>52 500 FCFA</strong> a été validé avec succès. Votre billet digital avec QR Code a été envoyé par SMS & Email.
              </p>
            </div>

            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-200 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Expérience :</span>
                <span className="font-bold text-gray-900">Visite de Ganvié & Village lacustre</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Date :</span>
                <span className="font-bold text-gray-900">Samedi 18 Mai 2026 à 09h00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Code Billet QR :</span>
                <span className="font-mono font-bold text-[#E85D04]">AFK-2026-88492</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link 
                href="/dashboard/client" 
                className="px-6 py-3 bg-[#0F382C] text-white text-xs font-bold rounded-xl shadow hover:bg-[#1B5E46] transition-all"
              >
                Voir mon billet sur le Dashboard
              </Link>
              <Link 
                href="/" 
                className="px-6 py-3 bg-gray-100 text-gray-800 text-xs font-bold rounded-xl hover:bg-gray-200 transition-all"
              >
                Retourner à l'accueil
              </Link>
            </div>
          </div>
        ) : (
          /* Payment Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Column 1: Booking Summary */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
              <h2 className="font-extrabold text-base text-[#0F382C] pb-3 border-b border-gray-100">
                Récapitulatif de votre réservation
              </h2>

              <div className="flex gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=300&q=80" 
                  alt="Ganvié" 
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />
                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-gray-900 leading-snug">
                    Visite de Ganvié & Village lacustre
                  </h3>
                  <p className="text-xs text-gray-500">Samedi 18 Mai 2026 à 09h00</p>
                  <p className="text-xs font-semibold text-gray-700">2 voyageurs</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-100 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Prix par personne</span>
                  <span>25 000 FCFA</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Sous-total (2 pers.)</span>
                  <span>50 000 FCFA</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Frais de service & assurance</span>
                  <span>2 500 FCFA</span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-gray-900 pt-3 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-[#E85D04]">52 500 FCFA</span>
                </div>
              </div>
            </div>

            {/* Column 2: Payment Method Selector */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
              <h2 className="font-extrabold text-base text-[#0F382C] pb-3 border-b border-gray-100">
                Choisissez votre moyen de paiement
              </h2>

              <div className="space-y-3">
                
                {/* MTN Mobile Money */}
                <button
                  onClick={() => setPaymentMethod("mtn")}
                  className={`w-full p-4 rounded-xl border flex items-center gap-4 transition-all text-left ${
                    paymentMethod === "mtn"
                      ? "border-[#E85D04] bg-[#FFF7ED] ring-2 ring-[#E85D04]/30"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-amber-400 font-black text-black flex items-center justify-center text-xs shrink-0 shadow-sm">
                    MTN
                  </div>
                  <div className="flex-1">
                    <span className="block font-bold text-sm text-gray-900">MTN Mobile Money</span>
                    <span className="block text-xs text-gray-500">Payez avec votre compte MTN MoMo</span>
                  </div>
                </button>

                {/* Moov Money */}
                <button
                  onClick={() => setPaymentMethod("moov")}
                  className={`w-full p-4 rounded-xl border flex items-center gap-4 transition-all text-left ${
                    paymentMethod === "moov"
                      ? "border-[#E85D04] bg-[#FFF7ED] ring-2 ring-[#E85D04]/30"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-600 font-black text-white flex items-center justify-center text-xs shrink-0 shadow-sm">
                    Moov
                  </div>
                  <div className="flex-1">
                    <span className="block font-bold text-sm text-gray-900">Moov Money</span>
                    <span className="block text-xs text-gray-500">Payez avec votre compte Moov Money</span>
                  </div>
                </button>

                {/* Carte Bancaire */}
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`w-full p-4 rounded-xl border flex items-center gap-4 transition-all text-left ${
                    paymentMethod === "card"
                      ? "border-[#E85D04] bg-[#FFF7ED] ring-2 ring-[#E85D04]/30"
                      : "border-gray-200 hover:border-gray-300 bg-white"
                  }`}
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <span className="block font-bold text-sm text-gray-900">Carte Bancaire</span>
                    <span className="block text-xs text-gray-500">Visa, Mastercard et autres</span>
                  </div>
                </button>

              </div>
            </div>

            {/* Column 3: Payment Instructions & Action */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
              <h2 className="font-extrabold text-base text-[#0F382C] pb-3 border-b border-gray-100">
                Paiement {paymentMethod === "card" ? "Carte Bancaire" : "Mobile Money"}
              </h2>

              {paymentMethod !== "card" ? (
                <div className="space-y-4">
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 space-y-2">
                    <p className="font-bold flex items-center gap-1.5">
                      <Smartphone className="w-4 h-4 text-[#E85D04]" />
                      Instructions pour valider sur votre téléphone :
                    </p>
                    <ol className="list-decimal list-inside space-y-1.5 font-medium pl-1 text-amber-950">
                      <li>Composez le code <strong className="font-mono bg-white px-1 rounded border border-amber-300">*126#</strong></li>
                      <li>Sélectionnez "Paiement marchand"</li>
                      <li>Entrez le code marchand suivant : <strong className="font-mono bg-white px-1 rounded border border-amber-300">123456</strong></li>
                      <li>Entrez le montant : <strong className="font-mono bg-white px-1 rounded border border-amber-300">52 500 FCFA</strong></li>
                      <li>Entrez votre code PIN MoMo pour valider</li>
                    </ol>
                  </div>

                  <div className="pt-2">
                    <span className="text-xs text-gray-400 block font-medium">Total à payer</span>
                    <span className="text-3xl font-black text-[#0F382C]">52 500 FCFA</span>
                  </div>

                  <button
                    onClick={handlePay}
                    disabled={isProcessing}
                    className="w-full py-4 bg-[#E85D04] hover:bg-[#D9531E] text-white text-base font-extrabold rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <span className="animate-pulse">Validation en cours...</span>
                    ) : (
                      <span>Payer 52 500 FCFA</span>
                    )}
                  </button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); handlePay(); }} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Numéro de carte</label>
                    <input type="text" placeholder="4000 1234 5678 9010" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">Expiration</label>
                      <input type="text" placeholder="MM/YY" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl" />
                    </div>
                    <div>
                      <label className="block font-bold text-gray-700 mb-1">CVC</label>
                      <input type="text" placeholder="123" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl" />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full mt-4 py-4 bg-[#0F382C] text-white text-base font-extrabold rounded-xl shadow-lg"
                  >
                    {isProcessing ? "Traitement..." : "Payer 52 500 FCFA par Carte"}
                  </button>
                </form>
              )}

              <p className="text-center text-xs text-emerald-700 font-semibold flex items-center justify-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Paiement 100% sécurisé
              </p>
            </div>

          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
