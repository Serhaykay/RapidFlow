import { useEffect, useRef } from 'react'
import { ArrowRight, Plane, Car, Flame } from 'lucide-react'

const services = [
  {
    icon: <Plane size={36} color="#F97316" />,
    title: 'Aviation Turbine Kerosene',
    abbr: 'ATK / Jet A-1',
    tag: 'Aviation Fuel',
    description:
      'We supply certified Aviation Turbine Kerosene (Jet A-1) to domestic and international airlines, military aviation units, and private aviation operators across Nigeria. Our ATK meets strict international quality specifications — ASTM D1655 and DEF STAN 91-091 — ensuring airworthiness and engine performance.',
    features: ['ASTM D1655 & DEF STAN Certified', 'Airline & Military Supply', 'Controlled Cold-Chain Handling', 'Prompt Turnaround at Airports'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&q=80',
  },
  {
    icon: <Car size={36} color="#F97316" />,
    title: 'Automotive Gas Oil',
    abbr: 'AGO / Diesel',
    tag: 'Industrial Fuel',
    description:
      'Our Automotive Gas Oil (diesel) is sourced from certified depots and delivered directly to industries, manufacturing plants, construction firms, transport companies, and commercial clients. We handle bulk volumes with reliable scheduling and zero-compromise on product integrity.',
    features: ['Low Sulphur Diesel Available', 'Bulk & Retail Supply', 'Same-Day Dispatch Available', 'Compliant with DPR Standards'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
  },
  {
    icon: <Flame size={36} color="#F97316" />,
    title: 'Liquefied Petroleum Gas',
    abbr: 'LPG / Cooking Gas',
    tag: 'Gas Distribution',
    description:
      'Rapidflow Core Energy supplies Liquefied Petroleum Gas for domestic, commercial, and industrial use across Kwara State and the wider North-Central region. From household cylinders to bulk industrial tanks, we ensure safe, consistent, and affordable LPG delivery to your doorstep.',
    features: ['Domestic & Industrial Supply', 'Bulk Tank Installations', 'Safe Cylinder Handling', 'North-Central Distribution'],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
  },
]

export default function Services() {
  const headerRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    const make = (threshold = 0.08) => new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); make().unobserve(e.target) } })
    }, { threshold })

    const hObs = make(0.1)
    if (headerRef.current) hObs.observe(headerRef.current)
    const cObs = make(0.08)
    cardRefs.current.forEach(el => { if (el) cObs.observe(el) })

    return () => { hObs.disconnect(); cObs.disconnect() }
  }, [])

  return (
    <section id="services" style={{ background: '#020B18', padding: '120px 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-divider" style={{ marginBottom: 80 }} />

        {/* Header */}
        <div ref={headerRef} className="reveal grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="section-tag">What We Supply</div>
            <h2
              className="font-heading"
              style={{ fontSize: 'clamp(28px, 4vw, 50px)', fontWeight: 800, color: '#fff', letterSpacing: '-1px', lineHeight: 1.15 }}
            >
              Premium{' '}
              <span className="gradient-text">Petroleum Products</span>
              <br />
              Across Nigeria
            </h2>
          </div>
          <div>
            <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>
              From aviation jet fuel to diesel and cooking gas, we supply certified,
              high-quality petroleum products to aviation, industrial, and domestic
              clients — with reliability at every step.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {services.map((service, i) => (
            <div
              key={service.title}
              ref={el => cardRefs.current[i] = el}
              className={`card-hover reveal stagger-${i + 1} service-card-grid`}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 420px',
                borderRadius: 12,
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Content */}
              <div
                className="service-content"
                style={{
                  padding: 'clamp(28px, 5vw, 52px) clamp(24px, 5vw, 48px)',
                  order: i % 2 === 0 ? 1 : 2,
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#F97316',
                    background: 'rgba(249,115,22,0.1)',
                    padding: '4px 12px',
                    borderRadius: 2,
                    display: 'inline-block',
                    marginBottom: 24,
                  }}
                >
                  {service.tag}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 8 }}>
                  <div
                    style={{
                      width: 58,
                      height: 58,
                      borderRadius: 12,
                      background: 'rgba(249,115,22,0.1)',
                      border: '1px solid rgba(249,115,22,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-heading" style={{ fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: 4 }}>
                      {service.title}
                    </h3>
                    <span style={{ fontSize: 12, color: '#F97316', fontWeight: 600, letterSpacing: '1px' }}>{service.abbr}</span>
                  </div>
                </div>

                <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(255,255,255,0.58)', marginBottom: 24, marginTop: 20 }}>
                  {service.description}
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px', marginBottom: 28 }}>
                  {service.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#F97316', flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <a href="#contact" className="btn-primary" style={{ padding: '12px 24px', fontSize: 13 }}>
                  Request a Quote <ArrowRight size={14} />
                </a>
              </div>

              {/* Image */}
              <div
                className="service-img"
                style={{ position: 'relative', order: i % 2 === 0 ? 2 : 1, minHeight: 340 }}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: i % 2 === 0
                      ? 'linear-gradient(to left, transparent 50%, rgba(2,11,24,0.15) 100%)'
                      : 'linear-gradient(to right, transparent 50%, rgba(2,11,24,0.15) 100%)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
