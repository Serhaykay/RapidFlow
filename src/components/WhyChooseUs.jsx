import { useEffect, useRef } from 'react'
import { Zap, Clock, Star, HeartHandshake, TrendingUp, Lock } from 'lucide-react'

const reasons = [
  { icon: <Zap size={28} />, title: 'Operational Excellence', body: 'Streamlined processes, advanced technology, and an experienced team ensure every operation meets the highest standards of efficiency and precision.', color: '#F97316' },
  { icon: <Clock size={28} />, title: 'On-Time Delivery', body: 'We understand that energy delays cost money. Our logistics network guarantees on-time delivery with a 99.8% reliability rate.', color: '#3B82F6' },
  { icon: <Star size={28} />, title: 'Premium Product Quality', body: 'All products are sourced from certified refineries and tested to meet international quality standards before reaching our clients.', color: '#F59E0B' },
  { icon: <HeartHandshake size={28} />, title: 'Client-First Approach', body: 'We build long-term partnerships by listening to our clients, understanding their unique needs, and delivering tailored energy solutions.', color: '#10B981' },
  { icon: <TrendingUp size={28} />, title: 'Competitive Pricing', body: 'Our strategic supplier relationships and operational efficiency enable us to offer the most competitive pricing in the market.', color: '#8B5CF6' },
  { icon: <Lock size={28} />, title: 'Regulatory Compliance', body: 'Fully licensed by DPR, PPPRA, and other relevant Nigerian regulatory bodies — giving clients confidence and legal protection.', color: '#EF4444' },
]

export default function WhyChooseUs() {
  const headerRef = useRef(null)
  const cardRefs = useRef([])
  const ctaRef = useRef(null)

  useEffect(() => {
    const make = (threshold = 0.1) => new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); make().unobserve(e.target) } })
    }, { threshold })

    const hObs = make(0.1)
    if (headerRef.current) hObs.observe(headerRef.current)
    const cObs = make(0.08)
    cardRefs.current.forEach(el => { if (el) cObs.observe(el) })
    const ctaObs = make(0.1)
    if (ctaRef.current) ctaObs.observe(ctaRef.current)

    return () => { hObs.disconnect(); cObs.disconnect(); ctaObs.disconnect() }
  }, [])

  return (
    <section id="why-us" style={{ background: '#020B18', padding: '120px 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-divider" style={{ marginBottom: 80 }} />

        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Our Advantage</div>
          <h2
            className="font-heading"
            style={{ fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 800, color: '#fff', letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 20 }}
          >
            Why Industry Leaders{' '}
            <span className="gradient-text">Choose Rapidflow</span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
            We don't just supply energy — we deliver confidence, reliability,
            and a partnership built to last for the long term.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              ref={el => cardRefs.current[i] = el}
              className={`card-hover reveal stagger-${i + 1}`}
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 12,
                padding: '36px 30px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: reason.color, opacity: 0.7 }} />
              <div style={{ width: 58, height: 58, borderRadius: 12, background: `${reason.color}15`, border: `1px solid ${reason.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, color: reason.color }}>
                {reason.icon}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 12, lineHeight: 1.3 }}>{reason.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.52)' }}>{reason.body}</p>
              <div style={{ position: 'absolute', bottom: -10, right: 16, fontSize: 72, fontWeight: 900, color: 'rgba(255,255,255,0.025)', fontFamily: '"Playfair Display", serif', lineHeight: 1, pointerEvents: 'none' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          ref={ctaRef}
          className="reveal cta-banner"
          style={{
            marginTop: 72,
            padding: 'clamp(28px, 5vw, 52px) clamp(24px, 5vw, 48px)',
            borderRadius: 12,
            background: 'linear-gradient(135deg, rgba(249,115,22,0.12) 0%, rgba(234,88,12,0.08) 100%)',
            border: '1px solid rgba(249,115,22,0.2)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 24,
          }}
        >
          <div>
            <h3 className="font-heading" style={{ fontSize: 'clamp(22px, 3vw, 28px)', fontWeight: 700, color: '#fff', marginBottom: 8 }}>
              Ready to Power Your Operations?
            </h3>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 480, lineHeight: 1.6 }}>
              Partner with Rapidflow Core Energy and experience the difference of working with
              Nigeria's most reliable energy solutions provider.
            </p>
          </div>
          <div className="cta-banner-btns" style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">Start a Conversation</a>
            <a href="#services" className="btn-outline">View Services</a>
          </div>
        </div>
      </div>
    </section>
  )
}
