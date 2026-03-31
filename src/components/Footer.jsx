import { Zap, Mail, Phone, MapPin, Globe, Share2, Link, ExternalLink } from 'lucide-react'
import logoImg from '../assets/logo-flow.png'

const footerLinks = {
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact Us', href: '#contact' },
  ],
  Services: [
    { label: 'Aviation Turbine Kerosene', href: '#services' },
    { label: 'Automotive Gas Oil', href: '#services' },
    { label: 'Liquefied Petroleum Gas', href: '#services' },
  ],
  'Get In Touch': [
    { label: '+234 901 742 4823', href: 'tel:+2349017424823' },
    { label: 'Rapidflowcoreenergy@gmail.com', href: 'mailto:Rapidflowcoreenergy@gmail.com' },
    { label: 'Ilorin, Kwara State', href: '#contact' },
  ],
}

const socialLinks = [
  { icon: <Globe size={18} />, href: '#', label: 'Website' },
  { icon: <Share2 size={18} />, href: '#', label: 'Share' },
  { icon: <Link size={18} />, href: '#', label: 'LinkedIn' },
  { icon: <ExternalLink size={18} />, href: '#', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer style={{ background: '#020B18', borderTop: '1px solid rgba(249,115,22,0.15)' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '260px 1fr 1fr 1fr', gap: 48 }}>
          {/* Brand Column */}
          <div>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <img
                src={logoImg}
                alt="Rapidflow Core Energy Logo"
                style={{
                  width: 200,
                  height: 100,
                  borderRadius: 8,
                  objectFit: 'contain',
                  flexShrink: 0,
                  boxShadow: '0 2px 8px #F97316',
                }}
              />
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: 'rgba(255,255,255,0.5)', marginBottom: 24 }}>
              Your trusted energy partner in Kwara State — supplying ATK, AGO, and LPG
              with reliability, safety, and excellence.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 28 }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 6,
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.6)',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(249,115,22,0.15)'
                    e.currentTarget.style.borderColor = 'rgba(249,115,22,0.3)'
                    e.currentTarget.style.color = '#F97316'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Contact Mini */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a
                href="tel:+2349017424823"
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.45)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#F97316'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >
                <Phone size={13} color="#F97316" /> +234 901 742 4823
              </a>
              <a
                href="mailto:Rapidflowcoreenergy@gmail.com"
                style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.45)', fontSize: 13, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#F97316'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >
                <Mail size={13} color="#F97316" /> Rapidflowcoreenergy@gmail.com
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.45)', fontSize: 13 }}>
                <MapPin size={13} color="#F97316" /> Ilorin, Kwara State
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 20 }}>
                {title}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={{
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#F97316'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '20px 24px' }}>
        <div
          className="max-w-7xl mx-auto"
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}
        >
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} Rapidflow Core Energy Limited. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a
                key={item}
                href="#"
                style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#F97316'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
