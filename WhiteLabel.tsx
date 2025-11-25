import React from 'react';
import { ShieldCheck, Zap, TrendingUp, DollarSign } from 'lucide-react';

const WhiteLabel: React.FC = () => {
  return (
    <section id="white-label" className="py-20 bg-gray-50 dark:bg-gray-950 scroll-mt-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 transition-colors duration-300">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-bold uppercase mb-6 w-fit">
                Spécial Agences & Réseaux
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Solution en Marque Blanche Intégrale
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Vous êtes une agence de communication ou web ? Complétez votre offre de service et générez de la marge additionnelle sans effort technique. Nous opérons en marque blanche totale.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <ShieldCheck className="h-6 w-6 text-brand-red" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-bold text-gray-900 dark:text-white">Fidélisation Client</h4>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Devenez le partenaire indispensable de la visibilité locale.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-brand-red" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-bold text-gray-900 dark:text-white">Performance</h4>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Augmentez le trafic et le CA de vos clients.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-brand-red" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-bold text-gray-900 dark:text-white">Rapidité</h4>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Modifications faites dans la foulée (4/5 jours ouvrés max).</p>
                  </div>
                </div>
                 <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <DollarSign className="h-6 w-6 text-brand-red" />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-base font-bold text-gray-900 dark:text-white">Revenus Récurrents</h4>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Nouveaux axes de facturation mensuelle.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 dark:bg-black p-10 lg:p-16 text-white flex flex-col justify-center border-l dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-8">Exemple de Pricing Agence</h3>
              <div className="space-y-6">
                <div className="bg-gray-800 dark:bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-lg">Administration</h4>
                    <span className="text-brand-red font-bold text-xl">9€ <span className="text-sm text-gray-400 font-normal">HT/mois</span></span>
                  </div>
                  <p className="text-gray-400 text-sm">Récupération accès, mises à jour illimitées, gestion des horaires.</p>
                  <div className="mt-3 text-xs text-green-400 font-mono">Prix conseillé: 15€/mois</div>
                </div>

                <div className="bg-gray-800 dark:bg-gray-900 rounded-xl p-6 border border-gray-700">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-lg">Animation Commerciale</h4>
                    <span className="text-brand-red font-bold text-xl">6€ <span className="text-sm text-gray-400 font-normal">HT/mois</span></span>
                  </div>
                  <p className="text-gray-400 text-sm">Google Posts, produits, actus, optimisation SEO.</p>
                  <div className="mt-3 text-xs text-green-400 font-mono">Prix conseillé: 10€/mois</div>
                </div>

                 <div className="bg-gray-800 dark:bg-gray-900 rounded-xl p-6 border border-gray-700 opacity-80">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-lg">Gestion des Avis</h4>
                    <span className="text-gray-300 font-bold text-sm">Sur devis</span>
                  </div>
                  <p className="text-gray-400 text-sm">Réponses personnalisées, analyse sémantique, reporting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhiteLabel;