import React from 'react';

const BRANDS = [
  { name: 'Photomaton', domain: 'photomaton.fr' },
  { name: 'Michelin', domain: 'michelin.com' },
  { name: 'Alain Afflelou', domain: 'afflelou.com' },
  { name: 'Grand Vision', domain: 'grandvision.com' },
  { name: 'Grand Optical', domain: 'grandoptical.com' },
  { name: 'Sephora', domain: 'sephora.fr' },
  { name: 'Nicolas', domain: 'nicolas.com' },
  { name: 'Engie', domain: 'engie.com' },
  { name: 'Pandora', domain: 'pandora.net' },
  { name: 'Yves Rocher', domain: 'yves-rocher.fr' },
  { name: 'La Grande Récré', domain: 'lagranderecre.fr' },
  { name: 'Besson Chaussures', domain: 'besson-chaussures.com' },
  { name: 'Naf Naf', domain: 'nafnaf.com' },
  { name: 'Uriage', domain: 'uriage.com' },
  { name: 'Groupe Partouche', domain: 'partouche.com' },
  { name: 'Micromania', domain: 'micromania.fr' },
  { name: 'LPB Woman', domain: 'lpbwoman.com' },
  { name: 'Sandro', domain: 'sandro-paris.com' },
];

const TrustSection: React.FC = () => {
  return (
    <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-brand-red font-bold tracking-wider uppercase text-xs bg-red-50 dark:bg-red-900/20 px-3 py-1 rounded-full">
          Depuis 2015
        </span>
        <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
          10 ans d'expertise aux côtés des leaders
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Nous avons accompagné et continuons d'accompagner les plus grandes enseignes dans leur stratégie locale.
        </p>
      </div>

      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 transition-colors duration-300"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 transition-colors duration-300"></div>

        {/* Infinite Scroll Container */}
        <div className="flex overflow-hidden">
          <div className="flex animate-scroll gap-12 items-center whitespace-nowrap py-4">
            {/* First Loop */}
            {BRANDS.map((brand, idx) => (
              <div key={`brand-1-${idx}`} className="flex-shrink-0 group relative">
                <img
                  src={`https://logo.clearbit.com/${brand.domain}?size=80&greyscale=true`}
                  alt={brand.name}
                  className="h-10 w-auto opacity-40 grayscale hover:grayscale-0 hover:opacity-100 dark:invert dark:hover:invert-0 dark:brightness-150 transition-all duration-300 filter"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
            {/* Second Loop for seamless scroll */}
            {BRANDS.map((brand, idx) => (
              <div key={`brand-2-${idx}`} className="flex-shrink-0 group relative">
                <img
                  src={`https://logo.clearbit.com/${brand.domain}?size=80&greyscale=true`}
                  alt={brand.name}
                  className="h-10 w-auto opacity-40 grayscale hover:grayscale-0 hover:opacity-100 dark:invert dark:hover:invert-0 dark:brightness-150 transition-all duration-300 filter"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
             {/* Third Loop for safety on wide screens */}
             {BRANDS.map((brand, idx) => (
              <div key={`brand-3-${idx}`} className="flex-shrink-0 group relative">
                <img
                  src={`https://logo.clearbit.com/${brand.domain}?size=80&greyscale=true`}
                  alt={brand.name}
                  className="h-10 w-auto opacity-40 grayscale hover:grayscale-0 hover:opacity-100 dark:invert dark:hover:invert-0 dark:brightness-150 transition-all duration-300 filter"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;