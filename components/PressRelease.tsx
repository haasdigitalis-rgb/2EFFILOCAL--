import React, { useState, useRef } from 'react';
import { Volume2, FileText, Share2, Globe, Square, Loader2 } from 'lucide-react';

// Press Release specific color palette - Mediterranean Modern
const colors = {
  primaryBlue: '#2C5F6F',
  beigeRose: '#E8B4A0',
  terracotta: '#D4856F',
  brick: '#C1876B',
};

const AXES = ['Santé', 'Économie', 'Cadre de vie', 'Sécurité', 'Jeunesse'];

const PressRelease: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [selectedLang, setSelectedLang] = useState('fr');
  const [translations, setTranslations] = useState<Record<string, string>>({});
  const audioRef = useRef<HTMLAudioElement>(null);

  // Note: API key should be provided via environment variable
  const apiKey = '';

  const getText = (key: string, defaultText: string) => {
    return translations[key] || defaultText;
  };

  // AI Chatbot function
  const askGemini = async () => {
    if (!question.trim() || !apiKey) return;

    setIsLoading(true);
    setAiResponse('');

    const systemPrompt = `Tu es l'assistant virtuel officiel de la campagne d'Olivier HAAS (Municipales 2026 Portiragnes).
    Ton but: convaincre et informer avec un ton chaleureux et transparent.
    Axes: Santé, Économie, Cadre de vie, Sécurité, Jeunesse.
    Réponds court (max 50 mots). Signe "L'équipe d'Olivier Haas".`;

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: 'Question: ' + question }] }],
            systemInstruction: { parts: [{ text: systemPrompt }] },
          }),
        }
      );

      const data = await response.json();
      const aiText = data.candidates[0].content.parts[0].text;
      setAiResponse(aiText);
    } catch (error) {
      setAiResponse('Erreur de connexion.');
    } finally {
      setIsLoading(false);
    }
  };

  // Summary generation
  const generateSummary = async () => {
    setModalTitle("L'essentiel à retenir");
    setModalContent('Analyse en cours...');
    setModalOpen(true);

    if (!apiKey) {
      setModalContent('Clé API non configurée.');
      return;
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text:
                      'Résume ce texte en 3 points clés percutants (format liste HTML <ul><li>) pour un journaliste pressé : Olivier HAAS, conseiller municipal de Portiragnes depuis 2020, annonce sa candidature aux élections municipales 2026. Liste "La Force du Renouveau". 5 axes: Santé, Économie, Cadre de vie, Sécurité, Jeunesse.',
                  },
                ],
              },
            ],
          }),
        }
      );
      const data = await response.json();
      const aiText = data.candidates[0].content.parts[0].text;
      setModalContent(aiText);
    } catch (error) {
      setModalContent('Erreur lors de la génération.');
    }
  };

  // Audio Brief generation
  const generateAudioBrief = async () => {
    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
      setIsAudioPlaying(false);
      return;
    }

    if (!apiKey) return;

    setIsGeneratingAudio(true);

    const scriptPrompt =
      "Agis comme un présentateur radio enthousiaste. Écris un script de 30 secondes résumant ce communiqué de presse pour annoncer la candidature d'Olivier Haas aux élections municipales 2026 de Portiragnes avec sa liste 'La Force du Renouveau'. Texte fluide, pas d'emojis.";

    try {
      // First generate the script
      const textResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: scriptPrompt }] }],
          }),
        }
      );
      const textData = await textResponse.json();
      const script = textData.candidates[0].content.parts[0].text;

      // Then convert to speech
      const ttsResponse = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: script }] }],
            generationConfig: {
              responseModalities: ['AUDIO'],
              speechConfig: {
                voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Fenrir' } },
              },
            },
          }),
        }
      );

      const ttsData = await ttsResponse.json();
      if (ttsData.candidates?.[0]?.content?.parts?.[0]?.inlineData) {
        const audioBase64 = ttsData.candidates[0].content.parts[0].inlineData.data;
        if (audioRef.current) {
          audioRef.current.src = 'data:audio/mp3;base64,' + audioBase64;
          audioRef.current.play();
          setIsAudioPlaying(true);
        }
      }
    } catch (error) {
      console.error('Audio generation error:', error);
    } finally {
      setIsGeneratingAudio(false);
    }
  };

  // Social Media Kit generation
  const generateSocialKit = async () => {
    setModalTitle('Kit Réseaux Sociaux');
    setModalContent('Création des posts en cours...');
    setModalOpen(true);

    if (!apiKey) {
      setModalContent('Clé API non configurée.');
      return;
    }

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: "Génère 3 posts (Facebook, Twitter, LinkedIn) prêts à l'emploi pour annoncer la candidature d'Olivier Haas aux municipales 2026 de Portiragnes avec sa liste 'La Force du Renouveau'. 5 axes: Santé, Économie, Cadre de vie, Sécurité, Jeunesse. Utilise des emojis. Format JSON {facebook: '', twitter: '', linkedin: ''}.",
                  },
                ],
              },
            ],
            generationConfig: { responseMimeType: 'application/json' },
          }),
        }
      );
      const data = await response.json();
      const posts = JSON.parse(data.candidates[0].content.parts[0].text);

      setModalContent(`
        <div style="background: #f9f9f9; padding: 15px; margin-bottom: 15px; border-radius: 8px; border: 1px solid #eee;">
          <strong style="color: ${colors.primaryBlue};">Facebook</strong>
          <p>${posts.facebook}</p>
        </div>
        <div style="background: #f9f9f9; padding: 15px; margin-bottom: 15px; border-radius: 8px; border: 1px solid #eee;">
          <strong style="color: ${colors.primaryBlue};">Twitter (X)</strong>
          <p>${posts.twitter}</p>
        </div>
        <div style="background: #f9f9f9; padding: 15px; margin-bottom: 15px; border-radius: 8px; border: 1px solid #eee;">
          <strong style="color: ${colors.primaryBlue};">LinkedIn</strong>
          <p>${posts.linkedin}</p>
        </div>
      `);
    } catch (error) {
      setModalContent('Erreur lors de la création des posts.');
    }
  };

  // Translation function
  const translateContent = async (lang: string) => {
    setSelectedLang(lang);
    if (lang === 'fr') {
      setTranslations({});
      return;
    }

    if (!apiKey) return;

    const elements = {
      'title-main': 'ÉLECTIONS MUNICIPALES 2026',
      'title-sub': 'Olivier HAAS présente « La Force du Renouveau »',
      'text-intro':
        'Olivier HAAS, conseiller municipal de Portiragnes depuis 2020, annonce officiellement sa candidature aux élections municipales et communautaires qui se tiendront les 15 et 22 mars 2026.',
      'text-para1':
        'À la tête de la liste « La Force du Renouveau », il s\'entoure d\'une équipe de femmes et d\'hommes engagés, représentant toutes les sensibilités de la commune.',
      'title-axes': '5 AXES PRIORITAIRES',
      quote:
        'Nous voulons construire ensemble l\'avenir de Portiragnes. Notre démarche repose sur l\'écoute, la proximité et la transparence. Chaque Portiragnais aura sa place dans ce projet collectif.',
      'title-vote': 'VOTRE VOIX COMPTE',
    };

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Traduis ce JSON en langue code "${lang}". Garde les clés exactes. JSON: ${JSON.stringify(elements)}`,
                  },
                ],
              },
            ],
            generationConfig: { responseMimeType: 'application/json' },
          }),
        }
      );
      const data = await response.json();
      const translated = JSON.parse(data.candidates[0].content.parts[0].text);
      setTranslations(translated);
    } catch (error) {
      console.error('Translation error:', error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      askGemini();
    }
  };

  const handleAudioEnded = () => {
    setIsAudioPlaying(false);
  };

  return (
    <section id="communique" className="py-16 scroll-mt-32 transition-colors duration-300" style={{ backgroundColor: '#F5F7F8' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Container */}
        <div
          className="bg-white rounded-lg shadow-xl relative overflow-hidden"
          style={{ borderTop: `6px solid ${colors.terracotta}` }}
        >
          <div className="p-8 sm:p-12">
            {/* Header */}
            <header className="flex flex-col-reverse md:flex-row justify-between items-start mb-10 pb-8 border-b border-gray-100">
              <div className="flex-1 md:pr-5 mt-5 md:mt-0">
                {/* Press Label */}
                <span
                  className="text-white text-xs font-bold uppercase tracking-wider px-3 py-1 inline-block mb-4"
                  style={{ backgroundColor: colors.primaryBlue }}
                >
                  Communiqué de presse
                </span>

                {/* Date */}
                <span className="block text-sm font-medium mb-2" style={{ color: colors.brick }}>
                  Portiragnes, le 26 janvier 2026
                </span>

                {/* Title */}
                <h1
                  className="text-3xl sm:text-4xl font-extrabold my-2 leading-tight"
                  style={{ color: colors.primaryBlue, letterSpacing: '-0.5px' }}
                >
                  {getText('title-main', 'ÉLECTIONS MUNICIPALES 2026')}
                </h1>

                {/* Subtitle */}
                <h2 className="text-lg sm:text-xl font-semibold mt-1" style={{ color: colors.terracotta }}>
                  {getText('title-sub', 'Olivier HAAS présente « La Force du Renouveau »')}
                </h2>
              </div>

              {/* Right Column: Photo + Toolbar */}
              <div className="flex flex-col items-center md:items-end gap-4">
                {/* Portrait */}
                <div className="flex-shrink-0">
                  <div
                    className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden"
                    style={{
                      border: `4px solid white`,
                      boxShadow: `0 0 0 4px ${colors.beigeRose}`,
                    }}
                  >
                    <img
                      src="portrait-ai-1769297265258.jpg"
                      alt="Olivier Haas"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = '<span style="font-size: 3rem;">👤</span>';
                      }}
                    />
                  </div>
                </div>

                {/* Smart Toolbar */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                  <button
                    onClick={generateAudioBrief}
                    disabled={isGeneratingAudio}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${
                      isAudioPlaying
                        ? 'text-white'
                        : 'bg-white hover:text-white'
                    }`}
                    style={{
                      borderColor: colors.beigeRose,
                      color: isAudioPlaying ? 'white' : colors.primaryBlue,
                      backgroundColor: isAudioPlaying ? colors.terracotta : undefined,
                    }}
                    onMouseEnter={(e) => {
                      if (!isAudioPlaying) {
                        e.currentTarget.style.backgroundColor = colors.beigeRose;
                        e.currentTarget.style.color = 'white';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isAudioPlaying) {
                        e.currentTarget.style.backgroundColor = 'white';
                        e.currentTarget.style.color = colors.primaryBlue;
                      }
                    }}
                  >
                    {isGeneratingAudio ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : isAudioPlaying ? (
                      <Square className="w-3.5 h-3.5" />
                    ) : (
                      <Volume2 className="w-3.5 h-3.5" />
                    )}
                    {isGeneratingAudio ? 'Génération...' : isAudioPlaying ? 'Stop Audio' : 'Audio Brief'}
                  </button>

                  <button
                    onClick={generateSummary}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border bg-white transition-all"
                    style={{ borderColor: colors.beigeRose, color: colors.primaryBlue }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.beigeRose;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                      e.currentTarget.style.color = colors.primaryBlue;
                    }}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Résumé
                  </button>

                  <button
                    onClick={generateSocialKit}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border bg-white transition-all"
                    style={{ borderColor: colors.beigeRose, color: colors.primaryBlue }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.beigeRose;
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                      e.currentTarget.style.color = colors.primaryBlue;
                    }}
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    Kit Social
                  </button>

                  <div className="relative">
                    <select
                      value={selectedLang}
                      onChange={(e) => translateContent(e.target.value)}
                      className="flex items-center gap-1.5 px-3 py-1.5 pr-7 rounded-full text-xs font-semibold border bg-white transition-all cursor-pointer appearance-none"
                      style={{ borderColor: colors.beigeRose, color: colors.primaryBlue }}
                    >
                      <option value="fr">FR</option>
                      <option value="en">EN</option>
                      <option value="es">ES</option>
                      <option value="de">DE</option>
                    </select>
                    <Globe className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: colors.primaryBlue }} />
                  </div>
                </div>

                <audio ref={audioRef} onEnded={handleAudioEnded} className="hidden" />
              </div>
            </header>

            {/* Content */}
            <div className="space-y-6">
              {/* Intro */}
              <p
                className="font-medium text-lg pl-5 border-l-4"
                style={{ color: colors.primaryBlue, borderColor: colors.brick }}
              >
                {getText(
                  'text-intro',
                  'Olivier HAAS, conseiller municipal de Portiragnes depuis 2020, annonce officiellement sa candidature aux élections municipales et communautaires qui se tiendront les 15 et 22 mars 2026.'
                )}
              </p>

              <p className="text-gray-700">
                {getText(
                  'text-para1',
                  'À la tête de la liste'
                )}{' '}
                <strong style={{ color: colors.terracotta }}>« La Force du Renouveau »</strong>
                {getText('text-para1', '').includes('Force du Renouveau')
                  ? ''
                  : ", il s'entoure d'une équipe de femmes et d'hommes engagés, représentant toutes les sensibilités de la commune."}
              </p>

              {/* 5 Axes */}
              <div className="text-center mt-10">
                <h3
                  className="text-lg uppercase tracking-wider font-semibold relative pb-3"
                  style={{ color: colors.primaryBlue }}
                >
                  {getText('title-axes', '5 AXES PRIORITAIRES')}
                  <span
                    className="block w-10 h-0.5 mx-auto mt-2"
                    style={{ backgroundColor: colors.beigeRose }}
                  />
                </h3>

                <div className="flex flex-wrap gap-3 justify-center mt-6">
                  {AXES.map((axe, index) => (
                    <span
                      key={axe}
                      className="px-5 py-2.5 rounded-full text-sm font-semibold border bg-white transition-all"
                      style={{
                        borderColor: index % 2 === 0 ? colors.brick : colors.primaryBlue,
                        color: index % 2 === 0 ? colors.brick : colors.primaryBlue,
                      }}
                    >
                      {axe}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI Assistant Section */}
              <div
                className="rounded-xl p-6 mt-10 relative overflow-hidden"
                style={{ backgroundColor: '#fcfcfc', border: `2px solid ${colors.beigeRose}` }}
              >
                <div
                  className="absolute top-0 left-0 w-full h-1"
                  style={{
                    background: `linear-gradient(90deg, ${colors.primaryBlue}, ${colors.terracotta})`,
                  }}
                />

                <div className="flex items-center gap-2 mb-3 font-bold" style={{ color: colors.primaryBlue }}>
                  <span>✨</span> Assistant de Campagne
                </div>

                <p className="text-gray-500 text-sm mb-4">
                  Une question sur le programme ? Notre IA vous répond en direct.
                </p>

                <div className="flex flex-col sm:flex-row gap-2 mb-4">
                  <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ex: Que proposez-vous pour la jeunesse ?"
                    className="flex-1 px-4 py-3 border border-gray-200 rounded-md text-base"
                  />
                  <button
                    onClick={askGemini}
                    disabled={isLoading || !question.trim()}
                    className="px-5 py-3 rounded-md font-semibold text-white flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: colors.terracotta }}
                    onMouseEnter={(e) => {
                      if (!isLoading) e.currentTarget.style.backgroundColor = colors.brick;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = colors.terracotta;
                    }}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Réflexion...
                      </>
                    ) : (
                      <>Demander ✨</>
                    )}
                  </button>
                </div>

                {(aiResponse || isLoading) && (
                  <div
                    className="bg-white p-4 rounded-md text-sm"
                    style={{ borderLeft: `3px solid ${colors.primaryBlue}`, color: '#444' }}
                  >
                    {isLoading ? (
                      <em>
                        Réflexion en cours<span className="animate-pulse">...</span>
                      </em>
                    ) : (
                      <div dangerouslySetInnerHTML={{ __html: aiResponse.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>') }} />
                    )}
                  </div>
                )}
              </div>

              {/* Quote */}
              <blockquote
                className="relative text-center p-10 rounded-lg mt-10"
                style={{ backgroundColor: 'rgba(232, 180, 160, 0.15)' }}
              >
                <span
                  className="absolute top-0 left-1/2 -translate-x-1/2 text-8xl opacity-30 font-serif"
                  style={{ color: colors.terracotta }}
                >
                  «
                </span>
                <p className="relative z-10 italic text-lg" style={{ color: colors.primaryBlue }}>
                  {getText(
                    'quote',
                    "Nous voulons construire ensemble l'avenir de Portiragnes. Notre démarche repose sur l'écoute, la proximité et la transparence. Chaque Portiragnais aura sa place dans ce projet collectif."
                  )}
                </p>
                <footer
                  className="mt-5 font-bold uppercase text-sm tracking-wider"
                  style={{ color: colors.brick }}
                >
                  — Olivier HAAS
                </footer>
              </blockquote>

              {/* CTA Box */}
              <div
                className="rounded-lg p-8 text-center mt-10 text-white"
                style={{
                  background: `linear-gradient(135deg, ${colors.primaryBlue}, #1a3a45)`,
                }}
              >
                <h3 className="text-white text-lg uppercase tracking-wider font-semibold mb-4">
                  {getText('title-vote', 'VOTRE VOIX COMPTE')}
                  <span
                    className="block w-10 h-0.5 mx-auto mt-2"
                    style={{ backgroundColor: colors.terracotta }}
                  />
                </h3>
                <p className="mb-3">
                  Un formulaire est disponible en ligne sur{' '}
                  <a
                    href="https://campagnesportiragnes.fr"
                    className="font-bold border-b pb-0.5 transition-colors"
                    style={{ color: colors.beigeRose, borderColor: colors.beigeRose }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.borderColor = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = colors.beigeRose;
                      e.currentTarget.style.borderColor = colors.beigeRose;
                    }}
                  >
                    campagnesportiragnes.fr
                  </a>{' '}
                  afin de recueillir vos idées, avis et recommandations.
                </p>
                <p className="text-sm opacity-90">
                  Votre participation est essentielle pour nous afin de construire un projet au service de
                  Portiragnes.
                  <br />
                  Des <strong>cafés participatifs</strong> seront également organisés dans les semaines à venir.
                </p>
              </div>
            </div>

            {/* Footer */}
            <footer
              className="mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-5 text-sm"
              style={{ borderTop: `2px solid ${colors.beigeRose}` }}
            >
              <div className="text-center sm:text-left">
                <strong>CONTACT PRESSE</strong>
                <br />
                Site :{' '}
                <a
                  href="https://campagnesportiragnes.fr"
                  className="font-semibold"
                  style={{ color: colors.primaryBlue }}
                >
                  campagnesportiragnes.fr
                </a>
                <br />
                Email :{' '}
                <a
                  href="mailto:contact@campagnesportiragnes.fr"
                  className="font-semibold"
                  style={{ color: colors.primaryBlue }}
                >
                  contact@campagnesportiragnes.fr
                </a>
              </div>
              <div
                className="font-black uppercase tracking-widest text-xl"
                style={{ color: colors.terracotta }}
              >
                LA FORCE DU RENOUVEAU
              </div>
            </footer>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center z-50"
          style={{ backgroundColor: 'rgba(44, 95, 111, 0.6)', backdropFilter: 'blur(2px)' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalOpen(false);
          }}
        >
          <div
            className="bg-white p-8 rounded-xl max-w-xl w-11/12 shadow-2xl relative max-h-[80vh] overflow-y-auto"
            style={{ borderTop: `5px solid ${colors.terracotta}` }}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-4 text-2xl text-gray-400 hover:text-gray-600"
            >
              &times;
            </button>
            <h3 className="font-bold text-xl mb-4" style={{ color: colors.primaryBlue }}>
              {modalTitle}
            </h3>
            <div dangerouslySetInnerHTML={{ __html: modalContent }} />
          </div>
        </div>
      )}
    </section>
  );
};

export default PressRelease;
