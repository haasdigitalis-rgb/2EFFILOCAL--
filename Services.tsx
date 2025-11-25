import React from 'react';
import { CheckCircle } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-950 scroll-mt-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-brand-red tracking-wide uppercase">Exécution Opérationnelle</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Gestion déléguée de A à Z
          </p>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            Nous prenons en main la technicité et la chronophagie de la gestion locale pour vous laisser vous concentrer sur votre métier.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="flex flex-col h-full bg-white dark:bg-gray-900 rounded-2xl shadow-md border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-1">
                <div className="p-8 flex-1">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color} bg-opacity-10 dark:bg-opacity-20 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-wider">{service.subtitle}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed min-h-[80px]">
                    {service.description}
                  </p>
                  
                  <div className="border-t border-gray-50 dark:border-gray-800 pt-6">
                    <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-brand-red mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{feature}</span>
                        </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;