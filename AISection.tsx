import React from 'react';
import { Bot, Database, Search, Sparkles } from 'lucide-react';

const AISection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-gray-900 to-gray-900"></div>
        <div className="grid grid-cols-12 h-full w-full absolute top-0 left-0 opacity-20">
             {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className="border-r border-gray-700 h-full"></div>
             ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 text-xs font-bold uppercase mb-6">
              <Sparkles className="w-3 h-3" />
              Innovation & Référencement
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ne nourrissez pas seulement Google,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">nourrissez les IA.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Aujourd'hui, la recherche locale ne passe plus uniquement par des mots-clés. ChatGPT, Google Gemini, Siri et l'Expérience Générative de Recherche (SGE) lisent vos fiches.
            </p>
            <p className="text-gray-400 mb-8">
              Si vos données (horaires, attributs, produits, avis) ne sont pas structurées et parfaites, vous êtes invisible pour les assistants intelligents. <strong>Effilocal transforme vos fiches en données de confiance pour les IA.</strong>
            </p>
            
            <div className="flex flex-wrap gap-4">
               <div className="bg-gray-800/50 backdrop-blur px-4 py-2 rounded-lg border border-gray-700 flex items-center gap-3">
                  <Bot className="w-5 h-5 text-blue-400" />
                  <span className="text-sm font-medium">ChatGPT & Gemini Ready</span>
               </div>
               <div className="bg-gray-800/50 backdrop-blur px-4 py-2 rounded-lg border border-gray-700 flex items-center gap-3">
                  <Search className="w-5 h-5 text-purple-400" />
                  <span className="text-sm font-medium">Optimisé SGE</span>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-1 shadow-2xl border border-gray-700">
                <div className="bg-gray-900 rounded-xl p-6 overflow-hidden relative">
                    {/* Chat UI Simulation */}
                    <div className="space-y-4">
                        <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                                <span className="text-xs">Moi</span>
                            </div>
                            <div className="bg-gray-800 rounded-2xl rounded-tl-none px-4 py-2 text-sm text-gray-200 max-w-[80%]">
                                Trouve-moi un magasin de bricolage ouvert maintenant avec de bons avis à Bordeaux.
                            </div>
                        </div>

                        <div className="flex gap-3 flex-row-reverse">
                             <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                                <Sparkles className="w-4 h-4 text-white" />
                            </div>
                            <div className="bg-blue-900/20 border border-blue-500/30 rounded-2xl rounded-tr-none px-4 py-3 text-sm text-gray-200 max-w-[90%]">
                                <p className="mb-2">D'après mes analyses, je vous recommande <strong>BricoPro Bordeaux Centre</strong>.</p>
                                <ul className="space-y-1 text-blue-200 text-xs mb-2 list-disc pl-4">
                                    <li>Actuellement ouvert (ferme à 20h00)</li>
                                    <li>Note de 4.8/5 sur 150 avis récents</li>
                                    <li>Offre promotionnelle en cours sur le rayon peinture</li>
                                </ul>
                                <div className="mt-3 p-2 bg-gray-800 rounded border border-gray-700 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-gray-700 rounded flex-shrink-0"></div>
                                    <div className="flex-1">
                                        <div className="h-2 bg-gray-600 rounded w-3/4 mb-1"></div>
                                        <div className="h-2 bg-gray-600 rounded w-1/2"></div>
                                    </div>
                                    <div className="text-blue-400 text-xs font-bold">Itinéraire ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Overlay showing data feeding */}
                    <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                         <div className="absolute top-10 right-10">
                             <Database className="w-12 h-12 text-brand-red opacity-20 animate-pulse" />
                         </div>
                    </div>
                </div>
            </div>
            {/* Connector Lines */}
            <div className="absolute -z-10 top-1/2 -left-10 w-20 h-[1px] bg-gradient-to-r from-transparent to-blue-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;