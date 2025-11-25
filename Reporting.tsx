import React from 'react';
import { PhoneCall, Navigation, TrendingUp, MousePointerClick } from 'lucide-react';

const Reporting: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-xs font-bold uppercase mb-6">
              ROI Mesurable
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-6">
              Oubliez les "Vues".<br/>
              <span className="text-brand-red">Mesurez le Business.</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Pour une franchise ou un réseau, un simple "lead" formulaire est souvent tiède. Nous focalisons nos rapports sur l'action physique et immédiate.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-orange-50 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:bg-brand-red group-hover:text-white transition-colors shadow-sm">
                  <PhoneCall className="h-7 w-7" />
                </div>
                <div className="ml-5">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Appels Téléphoniques > Leads Web</h4>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    C'est le KPI ultime. Un client qui appelle depuis la fiche Google a une intention d'achat immédiate. C'est un <strong>prospect chaud à 100%</strong>, bien plus qualifié qu'un formulaire de contact.
                  </p>
                </div>
              </div>
              <div className="flex items-start group">
                 <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-green-600 dark:text-green-400 group-hover:bg-brand-red group-hover:text-white transition-colors shadow-sm">
                  <Navigation className="h-7 w-7" />
                </div>
                <div className="ml-5">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">Demandes d'Itinéraires</h4>
                  <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Le vrai "Drive-to-Store". L'internaute a activé son GPS. Il arrive physiquement dans votre point de vente dans les minutes qui suivent.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            {/* Dashboard UI */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 md:p-10 relative z-10 transition-colors">
              <div className="flex items-center justify-between mb-8 border-b border-gray-200 dark:border-gray-700 pb-6">
                <div>
                    <div className="font-bold text-2xl text-gray-900 dark:text-white">Performance Réseau</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Octobre 2023 • Comparatif M-1</div>
                </div>
                <div className="flex -space-x-2">
                     {[1,2,3].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-800"></div>
                     ))}
                </div>
              </div>

              {/* Highlighted Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                 <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-sm border-l-4 border-orange-500 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                        <div className="p-2 bg-orange-100 dark:bg-orange-900/40 rounded-lg text-orange-600 dark:text-orange-300">
                            <PhoneCall className="w-6 h-6" />
                        </div>
                        <span className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 text-xs font-bold px-2 py-1 rounded-full">+18%</span>
                    </div>
                    <div className="text-3xl font-extrabold text-gray-900 dark:text-white">6,798</div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Appels générés</div>
                    <div className="mt-2 text-xs text-gray-400 dark:text-gray-500">Leads chauds entrants</div>
                 </div>

                 <div className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-sm border-l-4 border-green-500 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                        <div className="p-2 bg-green-100 dark:bg-green-900/40 rounded-lg text-green-600 dark:text-green-300">
                            <Navigation className="w-6 h-6" />
                        </div>
                        <span className="bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300 text-xs font-bold px-2 py-1 rounded-full">+24%</span>
                    </div>
                    <div className="text-3xl font-extrabold text-gray-900 dark:text-white">15,393</div>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Visites GPS lancées</div>
                    <div className="mt-2 text-xs text-gray-400 dark:text-gray-500">Trafic physique direct</div>
                 </div>
              </div>

              {/* Secondary Metrics */}
              <div className="grid grid-cols-2 gap-4">
                   <div className="bg-white dark:bg-gray-700 px-4 py-3 rounded-xl border border-gray-100 dark:border-gray-600 flex items-center justify-between transition-colors">
                        <div className="flex items-center gap-2">
                            <MousePointerClick className="w-4 h-4 text-blue-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">Clics Site Web</span>
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white">9,914</span>
                   </div>
                   <div className="bg-white dark:bg-gray-700 px-4 py-3 rounded-xl border border-gray-100 dark:border-gray-600 flex items-center justify-between transition-colors">
                        <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-purple-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">Vues Fiches</span>
                        </div>
                        <span className="font-bold text-gray-900 dark:text-white">6.4M</span>
                   </div>
              </div>
            </div>
            
            {/* Background decorative blobs */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-brand-red rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reporting;