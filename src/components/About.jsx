import { useEffect, useRef } from 'react'
import { CheckCircle2, Award, Globe2 } from 'lucide-react'

const highlights = [
  'Incorporated under Nigerian law with full regulatory compliance',
  'Serving industrial, commercial, and government clients nationwide',
  'ATK, AGO, and LPG supply with certified product quality',
  'ISO-aligned operations with rigorous safety standards',
  'Committed to Nigerian content and local workforce development',
]

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in-view'); obs.unobserve(el) } }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

export default function About() {
  const leftRef = useReveal()
  const rightRef = useReveal()

  return (
    <section id="about" style={{ background: '#020B18', padding: '120px 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-divider" style={{ marginBottom: 80 }} />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div ref={leftRef} className="reveal-left" style={{ position: 'relative' }}>
            <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', height: 'clamp(340px, 45vw, 520px)' }}>
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=85"
                alt="Oil refinery operations at Rapidflow Core Energy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(2,11,24,0.6) 0%, transparent 60%)' }} />
            </div>

            {/* Floating stat card — hidden on mobile via CSS */}
            <div
              className="about-floating-card"
              style={{
                position: 'absolute',
                bottom: -28,
                right: -28,
                background: 'linear-gradient(135deg, #F97316, #EA580C)',
                padding: '24px 28px',
                borderRadius: 8,
                boxShadow: '0 20px 60px rgba(249,115,22,0.35)',
              }}
            >
              <div className="font-heading" style={{ fontSize: 44, fontWeight: 900, color: '#fff', lineHeight: 1 }}>
                15<span style={{ fontSize: 22 }}>+</span>
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', fontWeight: 500, marginTop: 6 }}>
                Years of Industry<br />Leadership
              </div>
            </div>

            {/* Decorative border — hidden on mobile */}
            <div
              className="about-deco-border"
              style={{
                position: 'absolute',
                top: -14,
                left: -14,
                right: 56,
                bottom: 56,
                border: '2px solid rgba(249,115,22,0.2)',
                borderRadius: 8,
                pointerEvents: 'none',
                zIndex: -1,
              }}
            />
          </div>

          {/* Right: Content */}
          <div ref={rightRef} className="reveal-right">
            <div className="section-tag">Who We Are</div>
            <h2
              className="font-heading"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, lineHeight: 1.15, color: '#fff', marginBottom: 24, letterSpacing: '-1px' }}
            >
              A Trusted Name in{' '}
              <span className="gradient-text">Nigeria's Energy</span> Sector
            </h2>

            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: 20 }}>
              Rapidflow Core Energy Limited is a dynamic energy company headquartered in
              Ilorin, Kwara State, operating at the forefront of Nigeria's petroleum industry.
              We specialize in the supply and distribution of ATK, AGO, and LPG across Nigeria.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: 36 }}>
              Our operations are anchored on reliability, transparency, and cutting-edge
              infrastructure — enabling us to deliver energy solutions that power industries,
              businesses, and communities across Nigeria.
            </p>

            {/* Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
              {highlights.map((item, i) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckCircle2 size={18} color="#F97316" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Mini stats */}
            <div style={{ display: 'flex', gap: 28, padding: '20px 0', borderTop: '1px solid rgba(249,115,22,0.15)', flexWrap: 'wrap' }}>
              {[
                { icon: <Award size={22} color="#F97316" />, value: 'ISO Aligned', label: 'Operations' },
                { icon: <Globe2 size={22} color="#F97316" />, value: 'National', label: 'Coverage' },
              ].map((item) => (
                <div key={item.value} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  {item.icon}
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{item.value}</div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
