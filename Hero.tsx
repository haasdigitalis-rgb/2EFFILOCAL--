import React from 'react';
import { Map, TrendingUp, Store, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 dark:bg-blue-900/20 rounded-full opacity-60 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-red-50 dark:bg-red-900/20 rounded-full opacity-60 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm text-gray-800 dark:text-gray-200 text-xs font-bold tracking-wide uppercase mb-8">
              <span className="w-2 h-2 bg-brand-red rounded-full mr-2 animate-pulse"></span>
              Partenaire Drive-to-Store des Réseaux
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6">
              La clé de la réussite pour vos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-600">Franchises & Points de Vente</span>.
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Effilocal transforme votre présence locale en moteur de croissance. De la gestion parfaite de vos fiches Google pour les IA, à l'activation du <strong>Combo Magique</strong> (GBP + Ads + Landing Pages).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://calendar.app.google/k63agnXQbMcGGE1J7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-brand-red hover:bg-red-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Prendre RDV avec un expert
                <Calendar className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#magic-combo"
                onClick={(e) => scrollToSection(e, 'magic-combo')}
                className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 dark:border-gray-700 text-base font-medium rounded-xl text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm hover:shadow-md"
              >
                Le Combo Magique
              </a>
            </div>
          </div>

          <div className="relative lg:ml-10 mt-10 lg:mt-0">
             {/* Composition visuelle plus business */}
            <div className="relative mx-auto w-full max-w-[500px]">
               {/* Card 1: Google Profile */}
               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 p-4 mb-4 transform rotate-[-2deg] z-20 relative transition-colors">
                  <div className="flex items-center gap-4 border-b border-gray-100 dark:border-gray-700 pb-4 mb-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                          <Map className="w-6 h-6" />
                      </div>
                      <div>
                          <div className="font-bold text-gray-900 dark:text-white">Google Business Profile</div>
                          <div className="text-xs text-green-600 dark:text-green-400 font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
                              Optimisé pour l'IA
                          </div>
                      </div>
                  </div>
                  <div className="flex gap-2 mb-2">
                      <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full"></div>
                      <div className="h-2 w-1/3 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
                  </div>
                  <div className="h-2 w-2/3 bg-gray-100 dark:bg-gray-700 rounded-full"></div>
               </div>

               {/* Card 2: Ads & Traffic */}
               <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 p-4 w-3/4 ml-auto transform rotate-[3deg] z-10 -mt-8 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                      <div className="font-bold text-gray-900 dark:text-white text-sm">Campagnes Locales</div>
                      <div className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full">+45% Trafic</div>
                  </div>
                  <div className="flex items-end gap-1 h-16 mt-2">
                      <div className="w-1/5 bg-brand-red opacity-20 h-1/2 rounded-t"></div>
                      <div className="w-1/5 bg-brand-red opacity-40 h-2/3 rounded-t"></div>
                      <div className="w-1/5 bg-brand-red opacity-60 h-3/4 rounded-t"></div>
                      <div className="w-1/5 bg-brand-red opacity-80 h-4/5 rounded-t"></div>
                      <div className="w-1/5 bg-brand-red h-full rounded-t relative">
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-[10px] py-1 px-2 rounded">ROI</div>
                      </div>
                  </div>
               </div>

               {/* Floating Element */}
               <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 animate-bounce duration-[3000ms] transition-colors">
                  <Store className="w-6 h-6 text-brand-red mx-auto mb-1" />
                  <div className="text-xs font-bold text-center text-gray-900 dark:text-white">Visites<br/>Magasin</div>
               </div>
            </div>
            
            {/* Decorative blobs */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-100/50 to-red-100/50 dark:from-blue-900/20 dark:to-red-900/20 rounded-full filter blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
