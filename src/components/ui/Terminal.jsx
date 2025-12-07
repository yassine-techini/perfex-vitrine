import { useState, useEffect } from 'react'

export default function Terminal() {
  const [messages, setMessages] = useState([])
  const [isTyping, setIsTyping] = useState(false)

  const chatSequence = [
    { role: 'user', content: 'Montre-moi les factures impayées' },
    { role: 'assistant', content: '3 factures en retard détectées.\nTotal: 12 450 €' },
    { role: 'user', content: 'Envoie des relances automatiques' },
    { role: 'assistant', content: '✓ 3 emails de relance envoyés\n✓ Suivi programmé dans 7 jours' },
  ]

  useEffect(() => {
    let timeouts = []
    let currentDelay = 1000

    const playSequence = () => {
      setMessages([])
      
      chatSequence.forEach((msg, index) => {
        // Show typing indicator before user messages
        if (msg.role === 'user') {
          timeouts.push(setTimeout(() => setIsTyping(true), currentDelay))
          currentDelay += 800
        }

        // Show message
        timeouts.push(setTimeout(() => {
          setIsTyping(false)
          setMessages(prev => [...prev, msg])
        }, currentDelay))

        currentDelay += msg.role === 'user' ? 1500 : 2000
      })

      // Reset and replay
      timeouts.push(setTimeout(() => {
        currentDelay = 1000
        playSequence()
      }, currentDelay + 2000))
    }

    playSequence()

    return () => timeouts.forEach(clearTimeout)
  }, [])

  return (
    <div className="terminal h-full flex flex-col">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500">PERFEX.AI</span>
          <span className="text-xs px-2 py-0.5 bg-perfex-green/20 text-perfex-green">LIVE</span>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 min-h-[300px]">
        {messages.map((msg, i) => (
          <div key={i} className="flex gap-3 animate-fade-in">
            <span className={msg.role === 'user' ? 'terminal-prompt-user' : 'terminal-prompt-ai'}>
              {msg.role === 'user' ? 'USER →' : 'PERFEX →'}
            </span>
            <span className="text-gray-300 whitespace-pre-line">{msg.content}</span>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex gap-3">
            <span className="terminal-prompt-user">USER →</span>
            <span className="text-gray-500 animate-typing">typing...</span>
          </div>
        )}

        {messages.length === 0 && !isTyping && (
          <div className="text-gray-600 text-xs">
            // Démonstration en cours...
          </div>
        )}
      </div>

      {/* Input */}
      <div className="mt-8 pt-6 border-t border-gray-800">
        <div className="flex items-center gap-2 text-gray-500">
          <span>$</span>
          <span className="flex-1 text-gray-400">Demandez n'importe quoi...</span>
          <span className="animate-pulse">_</span>
        </div>
      </div>
    </div>
  )
}
