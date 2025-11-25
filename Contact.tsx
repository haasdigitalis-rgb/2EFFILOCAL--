import React from 'react';
import { Phone, Mail, Calendar, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;
    
    const subject = `Nouveau contact Effilocal : ${company}`;
    const body = `Nom: ${name}%0D%0AEmail: ${email}%0D%0AEntreprise: ${company}%0D%0AMessage: ${message}`;
    
    // Open default mail client
    window.location.href = `mailto:olivier.haas@effilocal.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-white dark:bg-gray-900 py-24 scroll-mt-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-red rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-16 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">Prêt à booster votre visibilité locale ?</h2>
                <p className="text-red-100 text-lg mb-12">
                  Discutons de vos besoins. Que vous soyez un réseau d'enseignes ou une agence, nous avons la solution adaptée.
                </p>
                
                <div className="space-y-8">
                  <a href="tel:+33661728795" className="flex items-center group transition-transform hover:translate-x-2">
                    <div className="bg-red-700 p-3 rounded-full mr-4 group-hover:bg-white group-hover:text-brand-red transition-colors">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-red-200 text-sm">Appelez-nous</p>
                      <p className="font-semibold text-xl">06 61 72 87 95</p>
                    </div>
                  </a>
                  
                  <a href="mailto:olivier.haas@effilocal.com" className="flex items-center group transition-transform hover:translate-x-2">
                    <div className="bg-red-700 p-3 rounded-full mr-4 group-hover:bg-white group-hover:text-brand-red transition-colors">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-red-200 text-sm">Envoyez un email</p>
                      <p className="font-semibold text-xl break-all">olivier.haas@effilocal.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-12 bg-red-800/30 rounded-2xl p-6 backdrop-blur-sm border border-red-500/30 hover:bg-red-800/50 transition-colors cursor-pointer">
                 <a href="https://calendar.app.google/k63agnXQbMcGGE1J7" target="_blank" rel="noreferrer" className="block">
                    <div className="flex items-center gap-4 mb-3">
                        <Calendar className="h-8 w-8 text-white" />
                        <div>
                            <h3 className="font-bold text-lg">Prendre RDV Expert</h3>
                            <p className="text-red-100 text-sm">Accédez directement à l'agenda d'Olivier Haas</p>
                        </div>
                    </div>
                    <div className="flex items-center text-white font-semibold">
                        Réserver un créneau
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                 </a>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-10 lg:p-16 transition-colors duration-300">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nom complet</label>
                  <input type="text" id="name" required className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-gray-50 dark:bg-gray-700 dark:text-white focus:border-brand-red focus:ring-brand-red sm:text-sm transition-colors" placeholder="Votre nom" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email professionnel</label>
                  <input type="email" id="email" required className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-gray-50 dark:bg-gray-700 dark:text-white focus:border-brand-red focus:ring-brand-red sm:text-sm transition-colors" placeholder="vous@entreprise.com" />
                </div>
                 <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Entreprise / Agence</label>
                  <input type="text" id="company" required className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-gray-50 dark:bg-gray-700 dark:text-white focus:border-brand-red focus:ring-brand-red sm:text-sm transition-colors" placeholder="Nom de votre société" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea id="message" required rows={4} className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 dark:border-gray-600 shadow-sm bg-gray-50 dark:bg-gray-700 dark:text-white focus:border-brand-red focus:ring-brand-red sm:text-sm transition-colors" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                </div>
                <button type="submit" className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 dark:bg-black dark:hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors">
                  Envoyer la demande (Email)
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;