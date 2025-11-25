import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section id="expertise" className="bg-gray-900 py-16 text-white relative overflow-hidden scroll-mt-32 border-t border-gray-800">
       {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Le "Must Have" pour les enseignes de réseaux</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Les constats sont clairs : la recherche locale est la première étape du parcours d'achat physique.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-700">
          {STATS.map((stat, index) => (
            <div key={index} className="pt-8 md:pt-0 px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-500 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;