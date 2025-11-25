import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-2xl font-bold tracking-tight">
            effi<span className="text-brand-red">local</span>
          </span>
          <p className="text-gray-400 text-sm mt-2">L'agence Drive-to-Store depuis 8 ans.</p>
          <a href="tel:+33661728795" className="text-gray-400 text-sm mt-1 block hover:text-white transition-colors">06 61 72 87 95</a>
        </div>
        
        <div className="flex space-x-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
          <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          <a href="https://dtscafe.substack.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Blog Drive-to-Store</a>
        </div>
        
        <div className="mt-4 md:mt-0 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Effilocal. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;