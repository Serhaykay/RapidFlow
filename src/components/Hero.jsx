import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: '#020B18',
      }}
    >
      {/* Background Image — increased opacity for clarity */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=90')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.38,
        }}
      />

      {/* Dark Gradient Overlay — lightened to let image show through more */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(2,11,24,0.82) 0%, rgba(13,31,60,0.65) 50%, rgba(2,11,24,0.78) 100%)',
        }}
      />

      {/* Orange accent line top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg, transparent, #F97316, #EA580C, transparent)',
        }}
      />

      {/* Geometric Accents */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '10%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Content — centered */}
      <div
        className="max-w-7xl mx-auto px-6 relative"
        style={{ paddingTop: 100, paddingBottom: 80, width: '100%', textAlign: 'center' }}
      >
        {/* Tag */}
        <div
          className="section-tag animate-fade-in-up"
          style={{ animationDelay: '0.1s', display: 'inline-flex', margin: '0 auto 24px' }}
        >
          Nigeria's Premier Energy Partner
        </div>

        {/* Headline */}
        <h1
          className="font-heading animate-fade-in-up"
          style={{
            fontSize: 'clamp(42px, 7vw, 82px)',
            fontWeight: 900,
            lineHeight: 1.08,
            letterSpacing: '-2px',
            color: '#ffffff',
            marginBottom: 28,
            animationDelay: '0.2s',
          }}
        >
          Powering Energy.{' '}
          <span className="gradient-text">Delivering</span>
          <br />
          <span className="gradient-text">Excellence.</span>
        </h1>

        {/* Sub */}
        <p
          className="animate-fade-in-up"
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: 'rgba(255,255,255,0.68)',
            maxWidth: 600,
            margin: '0 auto 48px',
            animationDelay: '0.35s',
            fontWeight: 400,
          }}
        >
          Rapidflow Core Energy Limited is a leading force in Nigeria's energy sector —
          supplying ATK, AGO, and LPG with precision, reliability, and excellence
          across the region.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-in-up flex flex-wrap gap-4 hero-cta-row"
          style={{ animationDelay: '0.5s', justifyContent: 'center' }}
        >
          <a href="#services" className="btn-primary">
            Explore Our Services <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn-outline">
            Contact Us Today
          </a>
        </div>

        {/* Stats Row */}
        <div
          className="animate-fade-in-up flex flex-wrap gap-10 mt-16"
          style={{ animationDelay: '0.65s', justifyContent: 'center' }}
        >
          {[
            { value: '15+', label: 'Years of Excellence' },
            { value: '50+', label: 'Partner Networks' },
            { value: '99.8%', label: 'Delivery Reliability' },
            { value: '24/7', label: 'Operations Support' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                className="font-heading"
                style={{ fontSize: 34, fontWeight: 700, color: '#F97316', lineHeight: 1.1 }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', fontWeight: 500, letterSpacing: '0.5px', marginTop: 4 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        style={{
          position: 'absolute',
          bottom: 36,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          color: 'rgba(255,255,255,0.4)',
          textDecoration: 'none',
          animation: 'bounce 2s infinite',
        }}
      >
        <span style={{ fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={18} />
      </a>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(6px); }
        }
      `}</style>
    </section>
  )
}
