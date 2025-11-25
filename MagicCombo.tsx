import React from 'react';
import { MapPin, Target, MousePointer2, ArrowRight } from 'lucide-react';

const MagicCombo: React.FC = () => {
  return (
    <section id="magic-combo" className="py-24 bg-white dark:bg-gray-900 scroll-mt-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-brand-red rounded-full text-sm font-semibold mb-4">
            Stratégie Exclusive Effilocal
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Le "Combo Magique" Drive-to-Store
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            Pour les réseaux de franchise, la visibilité ne suffit plus. Il faut convertir. Notre approche intègre trois leviers indissociables pour maximiser vos visites en point de vente.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8 items-start">
          {/* Connecting Lines for Desktop */}
          <div className="hidden md:block absolute top-12 left-[20%] w-[30%] h-[2px] bg-gradient-to-r from-brand-red/20 to-brand-red/20 border-t-2 border-dashed border-brand-red/30 z-0"></div>
          <div className="hidden md:block absolute top-12 right-[20%] w-[30%] h-[2px] bg-gradient-to-r from-brand-red/20 to-brand-red/20 border-t-2 border-dashed border-brand-red/30 z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-100 dark:border-blue-900 flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-all duration-300 group-hover:border-blue-500 dark:group-hover:border-blue-500">
              <MapPin className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1. La Fondation</h3>
            <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide mb-2">Google Business Profile</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed px-4">
              Une présence organique irréprochable. C'est votre vitrine digitale. Sans elle, aucun trafic n'est possible.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
             <div className="absolute -top-4 bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-bounce">
                Booster
            </div>
            <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full border-4 border-orange-100 dark:border-orange-900 flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-all duration-300 group-hover:border-orange-500 dark:group-hover:border-orange-500">
              <Target className="w-10 h-10 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2. L'Accélération</h3>
            <p className="text-sm font-bold text-orange-500 uppercase tracking-wide mb-2">Campagnes Ads Locales</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed px-4">
              On diffuse vos offres sur Maps, Search et YouTube dans un rayon précis autour du point de vente.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center group">
            <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full border-4 border-green-100 dark:border-green-900 flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-all duration-300 group-hover:border-green-500 dark:group-hover:border-green-500">
              <MousePointer2 className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3. La Conversion</h3>
            <p className="text-sm font-bold text-green-600 dark:text-green-400 uppercase tracking-wide mb-2">Landing Pages Locales</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed px-4">
              On ne renvoie pas vers la Home Page ! Chaque magasin a sa page dédiée optimisée pour transformer le clic en visite GPS.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 transition-colors">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Pourquoi ça marche ?</h4>
                    <p className="text-gray-600 dark:text-gray-300">La combinaison assure que vous capturez l'internaute quelque soit son intention : <br/>recherche de marque (Fiche), recherche de produit (Ads) ou besoin d'info (Landing Page).</p>
                </div>
                <div className="flex-shrink-0">
                     <a
                        href="#contact"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gray-900 hover:bg-gray-800 dark:bg-black dark:hover:bg-gray-900 transition-colors shadow-lg"
                      >
                        Déployer cette stratégie
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MagicCombo;