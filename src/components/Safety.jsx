import { ShieldCheck, AlertTriangle, Users, Leaf, ClipboardCheck, Flame } from 'lucide-react'

const safetyPillars = [
  {
    icon: <ShieldCheck size={28} color="#F97316" />,
    title: 'HSE Standards',
    body: 'Full compliance with OSHA, DPR, and international HSE standards across all our operations and facilities.',
  },
  {
    icon: <Users size={28} color="#F97316" />,
    title: 'Trained Personnel',
    body: 'Our entire workforce undergoes rigorous safety training, certification programs, and regular refresher courses.',
  },
  {
    icon: <ClipboardCheck size={28} color="#F97316" />,
    title: 'Risk Assessment',
    body: 'Systematic Hazard Identification and Risk Assessment (HIRA) is conducted before every major operation.',
  },
  {
    icon: <AlertTriangle size={28} color="#F97316" />,
    title: 'Emergency Response',
    body: 'Comprehensive Emergency Response Plans (ERP) are in place for all sites, with regular drills and simulations.',
  },
  {
    icon: <Leaf size={28} color="#F97316" />,
    title: 'Environmental Care',
    body: 'We are committed to minimizing our environmental footprint through responsible operations and spill prevention.',
  },
  {
    icon: <Flame size={28} color="#F97316" />,
    title: 'Fire Safety',
    body: 'All facilities are equipped with fire detection, suppression systems, and our teams are trained in firefighting.',
  },
]

export default function Safety() {
  return (
    <section
      id="safety"
      style={{
        position: 'relative',
        padding: '120px 0',
        overflow: 'hidden',
        background: '#0A1628',
      }}
    >
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=70')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.07,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(10,22,40,0.98) 0%, rgba(10,22,40,0.9) 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6" style={{ position: 'relative' }}>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <div className="section-tag">Safety First</div>
            <h2
              className="font-heading"
              style={{
                fontSize: 'clamp(30px, 4vw, 50px)',
                fontWeight: 800,
                color: '#fff',
                letterSpacing: '-1px',
                lineHeight: 1.15,
                marginBottom: 24,
              }}
            >
              Safety Is Not a Priority —{' '}
              <span className="gradient-text">It's Our Culture</span>
            </h2>

            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: 28 }}>
              At Rapidflow Core Energy, no business objective ever overrides safety. We
              operate with a zero-tolerance approach to unsafe acts and conditions, ensuring
              that every employee, contractor, and community we serve is protected.
            </p>

            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: 40 }}>
              Our Health, Safety, and Environment (HSE) management system is embedded in
              every layer of our operations — from procurement and logistics to terminal
              management and final delivery.
            </p>

            {/* Safety Record */}
            <div
              style={{
                display: 'flex',
                gap: 28,
                padding: '28px 32px',
                background: 'rgba(249,115,22,0.08)',
                borderRadius: 8,
                border: '1px solid rgba(249,115,22,0.2)',
              }}
            >
              {[
                { value: '0', label: 'LTI Incidents (2024)' },
                { value: '5M+', label: 'Safe Man-Hours' },
                { value: '100%', label: 'HSE Compliance Rate' },
              ].map((stat) => (
                <div key={stat.label} style={{ flex: 1, textAlign: 'center' }}>
                  <div className="font-heading" style={{ fontSize: 32, fontWeight: 800, color: '#F97316' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 4, fontWeight: 500, letterSpacing: '0.3px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Safety Pillars Grid */}
          <div className="grid grid-cols-2 gap-4">
            {safetyPillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="card-hover"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 10,
                  padding: '24px 22px',
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 10,
                    background: 'rgba(249,115,22,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                  }}
                >
                  {pillar.icon}
                </div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
                  {pillar.title}
                </h4>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: 'rgba(255,255,255,0.5)' }}>
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
