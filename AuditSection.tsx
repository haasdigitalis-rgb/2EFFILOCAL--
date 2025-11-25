import React, { useState } from 'react';
import { Check, X, AlertCircle, MapPin, Trophy } from 'lucide-react';

const AuditSection: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, boolean | null>>({
    1: null, 2: null, 3: null, 4: null, 5: null
  });

  const handleAnswer = (id: number, value: boolean) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const criteria = [
    {
      id: 1,
      question: "Répondez-vous à TOUS vos avis (positifs et négatifs) ?",
      tip: "Les algorithmes favorisent les propriétaires actifs. Une réponse = un signal de confiance pour Google et vos clients.",
      critical: true
    },
    {
      id: 2,
      question: "Publiez-vous des Google Posts régulièrement (min. 1x/semaine) ?",
      tip: "Une fiche statique perd en visibilité. Les posts 'Actualités' ou 'Offres' boostent l'affichage.",
      critical: false
    },
    {
      id: 3,
      question: "Vos services sont-ils tous listés et optimisés ?",
      tip: "Ne mettez pas juste 'Plombier'. Mettez 'Réparation fuite', 'Installation chauffe-eau'. C'est là que se joue le SEO local.",
      critical: true
    },
    {
      id: 4,
      question: "Avez-vous ajouté vos Produits avec photos et catégories ?",
      tip: "Le 'Product Editor' prend une place énorme sur mobile. Sans produits, vous laissez la place aux concurrents.",
      critical: false
    },
    {
      id: 5,
      question: "Avez-vous plus de 10 Questions/Réponses (FAQ) ?",
      tip: "La section Q&A est souvent vide. Remplissez-la vous-même avec les questions fréquentes pour nourrir l'IA de Google.",
      critical: true
    }
  ];

  const score = Object.values(answers).filter(v => v === true).length;
  const isComplete = Object.values(answers).every(v => v !== null);

  return (
    <section id="audit" className="py-20 bg-gray-900 text-white relative overflow-hidden scroll-mt-32 border-t border-gray-800">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-800/50 skew-x-12 transform translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left: Context */}
          <div>
            <div className="inline-flex items-center gap-2 text-brand-red font-bold tracking-wider uppercase text-sm mb-4">
              <MapPin className="w-4 h-4" />
              Faites le test maintenant
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Votre fiche Google est-elle <span className="text-brand-red">vraiment</span> optimisée ?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Ouvrez un nouvel onglet, tapez le nom de votre établissement sur Google Maps, et vérifiez ces 5 points cruciaux. C'est la base de votre visibilité locale.
            </p>
            
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                <AlertCircle className="text-yellow-500" />
                Pourquoi cet audit ?
              </h3>
              <p className="text-gray-400 mb-4">
                Google ne classe pas les fiches au hasard. Il utilise des centaines de signaux. Si vous répondez "NON" à l'un de ces points, vous perdez des appels tous les jours au profit de vos concurrents.
              </p>
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-700">
                <span className="text-sm text-gray-500">Besoin d'un audit complet ?</span>
                <a href="#contact" onClick={scrollToContact} className="text-brand-red font-bold hover:underline">Contactez Effilocal →</a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Checklist */}
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl shadow-2xl p-8 transition-colors duration-300">
            <h3 className="text-xl font-bold mb-6 border-b dark:border-gray-700 pb-4">Les 5 piliers de l'Audit Express</h3>
            
            <div className="space-y-6">
              {criteria.map((item) => (
                <div key={item.id} className="animate-fadeIn">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <p className="font-medium text-lg">{item.id}. {item.question}</p>
                    <div className="flex gap-2 flex-shrink-0">
                      <button 
                        onClick={() => handleAnswer(item.id, true)}
                        className={`p-2 rounded-lg border transition-all ${answers[item.id] === true ? 'bg-green-600 text-white border-green-600' : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
                      >
                        <Check className="w-5 h-5" />
                      </button>
                      <button 
                         onClick={() => handleAnswer(item.id, false)}
                         className={`p-2 rounded-lg border transition-all ${answers[item.id] === false ? 'bg-brand-red text-white border-brand-red' : 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-600'}`}
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Feedback Display Logic */}
                  <div className={`overflow-hidden transition-all duration-500 ${answers[item.id] !== null ? 'max-h-32 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                    {answers[item.id] === false ? (
                        <div className="bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200 text-sm p-3 rounded-lg flex gap-2 items-start">
                            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            {item.tip}
                        </div>
                    ) : (
                         <div className="bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm p-3 rounded-lg flex gap-2 items-start">
                            <Check className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>Excellent ! C'est un signal positif envoyé à l'algorithme Google.</span>
                        </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Result Footer */}
            {isComplete && (
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center animate-blob">
                    <div className="inline-block p-4 bg-gray-50 dark:bg-gray-700 rounded-full mb-4">
                        {score === 5 ? (
                            <Trophy className="w-8 h-8 text-yellow-500" />
                        ) : (
                            <AlertCircle className="w-8 h-8 text-brand-red" />
                        )}
                    </div>
                    <h4 className="text-2xl font-bold mb-2">
                        Votre score : <span className={score === 5 ? 'text-green-600 dark:text-green-400' : 'text-brand-red'}>{score}/5</span>
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {score === 5 
                            ? "Bravo ! Vous êtes au top. Passons à l'étape suivante avec les Ads ?" 
                            : "Attention. Ces points manquants vous coûtent des clients chaque jour."}
                    </p>
                    <a 
                        href="https://calendar.app.google/k63agnXQbMcGGE1J7" 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-block bg-brand-red text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
                    >
                        Corriger mes erreurs avec un expert
                    </a>
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditSection;