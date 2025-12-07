import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    entreprise: '',
    telephone: '',
    sujet: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const WORKER_URL = 'https://perfex-contact-form.yassine-techini.workers.dev'

  const subjects = [
    'Demande de démonstration',
    'Demande de devis',
    'Question technique',
    'Partenariat',
    'Autre'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch(WORKER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Erreur lors de l\'envoi')
      }

      setSubmitted(true)
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        entreprise: '',
        telephone: '',
        sujet: '',
        message: ''
      })
    } catch (err) {
      setError(err.message || 'Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses = "w-full px-4 py-3 border-2 border-black bg-transparent focus:outline-none focus:bg-black focus:text-white transition-colors placeholder:text-black/40"
  const labelClasses = "block text-xs font-bold tracking-widest mb-2"

  if (submitted) {
    return (
      <div className="min-h-screen bg-perfex-bg text-perfex-black">
        {/* Header */}
        <header className="border-b-2 border-black p-6 lg:p-8">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
              <div className="w-10 h-10 bg-black flex items-center justify-center">
                <span className="font-display text-white text-xl">P</span>
              </div>
              <span className="text-2xl font-display tracking-tighter">PERFEX</span>
            </Link>
            <Link to="/" className="text-sm font-bold hover:text-perfex-red transition-colors">
              ← RETOUR
            </Link>
          </div>
        </header>

        <div className="max-w-2xl mx-auto p-8 lg:p-16 text-center">
          <span className="text-8xl">✅</span>
          <h1 className="text-4xl lg:text-6xl font-display tracking-tighter mt-8 mb-6">
            MESSAGE ENVOYÉ !
          </h1>
          <p className="text-xl leading-relaxed opacity-70 mb-8">
            Votre message a bien été envoyé à notre équipe.
          </p>
          <p className="text-lg mb-8">
            Nous vous répondrons dans les plus brefs délais à l'adresse email que vous avez indiquée.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setSubmitted(false)}
              className="px-8 py-4 border-2 border-black font-bold tracking-wide hover:bg-black hover:text-white transition-colors"
            >
              NOUVEAU MESSAGE
            </button>
            <Link
              to="/"
              className="px-8 py-4 bg-black text-white font-bold tracking-wide hover:bg-perfex-red transition-colors"
            >
              RETOUR À L'ACCUEIL
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-perfex-bg text-perfex-black">
      {/* Header */}
      <header className="border-b-2 border-black p-6 lg:p-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-70 transition-opacity">
            <div className="w-10 h-10 bg-black flex items-center justify-center">
              <span className="font-display text-white text-xl">P</span>
            </div>
            <span className="text-2xl font-display tracking-tighter">PERFEX</span>
          </Link>
          <Link to="/" className="text-sm font-bold hover:text-perfex-red transition-colors">
            ← RETOUR
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-5">
          {/* Left - Info */}
          <div className="lg:col-span-2 p-8 lg:p-12 lg:border-r-2 border-black">
            <span className="text-xs font-mono tracking-widest text-black/40">// CONTACT</span>
            <h1 className="text-4xl lg:text-5xl font-display tracking-tighter mt-4 mb-8">
              PARLONS DE
              <br />
              <span className="text-perfex-red">VOTRE PROJET</span>
            </h1>

            <p className="text-lg leading-relaxed opacity-70 mb-12">
              Vous souhaitez en savoir plus sur Perfex ou discuter de vos besoins ?
              Remplissez le formulaire et nous vous recontacterons rapidement.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-bold tracking-widest mb-2 opacity-40">EMAIL</h3>
                <a
                  href="mailto:contact@devfactory.ai"
                  className="text-lg font-bold hover:text-perfex-red transition-colors"
                >
                  contact@devfactory.ai
                </a>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-widest mb-2 opacity-40">RÉSEAUX</h3>
                <div className="flex gap-3">
                  {[
                    { name: 'X', url: 'https://twitter.com/devfactory' },
                    { name: 'IN', url: 'https://linkedin.com/company/devfactory' },
                    { name: 'GH', url: 'https://github.com/devfactory' },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border-2 border-black flex items-center justify-center font-bold text-xs hover:bg-black hover:text-white transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold tracking-widest mb-2 opacity-40">BUREAUX</h3>
                <p className="opacity-70">France & Tunisie</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3 p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nom" className={labelClasses}>NOM *</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="prenom" className={labelClasses}>PRÉNOM *</label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    value={formData.prenom}
                    onChange={handleChange}
                    required
                    placeholder="Votre prénom"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>EMAIL *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre@email.com"
                  className={inputClasses}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="entreprise" className={labelClasses}>ENTREPRISE</label>
                  <input
                    type="text"
                    id="entreprise"
                    name="entreprise"
                    value={formData.entreprise}
                    onChange={handleChange}
                    placeholder="Nom de votre entreprise"
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className={labelClasses}>TÉLÉPHONE</label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="+33 6 12 34 56 78"
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="sujet" className={labelClasses}>SUJET *</label>
                <select
                  id="sujet"
                  name="sujet"
                  value={formData.sujet}
                  onChange={handleChange}
                  required
                  className={`${inputClasses} cursor-pointer`}
                >
                  <option value="">Sélectionnez un sujet</option>
                  {subjects.map((subject, i) => (
                    <option key={i} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClasses}>MESSAGE *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Décrivez votre projet ou posez-nous vos questions..."
                  className={`${inputClasses} resize-none`}
                />
              </div>

              {error && (
                <div className="p-4 bg-red-100 border-2 border-red-500 text-red-700 text-sm">
                  ⚠️ {error}
                </div>
              )}

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-5 bg-black text-white font-bold text-lg tracking-wide hover:bg-perfex-red transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      ENVOI EN COURS...
                    </>
                  ) : (
                    <>
                      ENVOYER LE MESSAGE
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-center opacity-50">
                En soumettant ce formulaire, vous acceptez notre{' '}
                <Link to="/confidentialite" className="underline hover:text-perfex-red">
                  politique de confidentialité
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
