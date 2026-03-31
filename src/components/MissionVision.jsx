import { useEffect, useRef } from 'react'
import { Target, Eye, Gem } from 'lucide-react'

const items = [
  {
    icon: <Target size={32} color="#F97316" />,
    label: 'Our Mission',
    title: 'Delivering Reliable Energy Solutions',
    body: 'To provide seamless, efficient, and sustainable energy solutions to our clients by leveraging cutting-edge technology, strategic partnerships, and operational excellence — ensuring energy security and fueling economic growth across Nigeria.',
    accent: '#F97316',
  },
  {
    icon: <Eye size={32} color="#1E90FF" />,
    label: 'Our Vision',
    title: "Becoming West Africa's Leading Energy Company",
    body: "To be the most trusted and innovative energy solutions company in West Africa — recognized for our integrity, operational excellence, and commitment to powering the continent's sustainable development.",
    accent: '#1E90FF',
  },
  {
    icon: <Gem size={32} color="#22C55E" />,
    label: 'Core Values',
    title: 'Excellence, Integrity & Safety',
    body: 'We operate with unwavering integrity, pursue operational excellence, prioritize the safety of people and the environment, foster innovation, and build lasting partnerships based on trust and mutual respect.',
    accent: '#22C55E',
  },
]

export default function MissionVision() {
  const headerRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target) } }, { threshold: 0.1 })
    if (headerRef.current) obs.observe(headerRef.current)

    const cardObs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); cardObs.unobserve(e.target) } })
    }, { threshold: 0.08 })
    cardRefs.current.forEach(el => { if (el) cardObs.observe(el) })

    return () => { obs.disconnect(); cardObs.disconnect() }
  }, [])

  return (
    <section id="mission" style={{ background: 'linear-gradient(180deg, #020B18 0%, #0A1628 50%, #020B18 100%)', padding: '120px 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Our Foundation</div>
          <h2
            className="font-heading"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, color: '#fff', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 20 }}
          >
            Guided by Purpose,{' '}
            <span className="gradient-text">Driven by Values</span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Every decision we make is grounded in our mission, shaped by our vision,
            and governed by the values that define who we are.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={item.label}
              ref={el => cardRefs.current[i] = el}
              className={`card-hover reveal stagger-${i + 1}`}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12,
                padding: '40px 32px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: item.accent, opacity: 0.8 }} />
              <div style={{ width: 64, height: 64, borderRadius: 12, background: `${item.accent}15`, border: `1px solid ${item.accent}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28 }}>
                {item.icon}
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: item.accent, marginBottom: 12 }}>
                {item.label}
              </div>
              <h3 className="font-heading" style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 16, lineHeight: 1.25 }}>
                {item.title}
              </h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.75, color: 'rgba(255,255,255,0.55)' }}>{item.body}</p>
              <div style={{ position: 'absolute', bottom: -20, right: -20, width: 80, height: 80, borderRadius: '50%', background: `${item.accent}08`, pointerEvents: 'none' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
