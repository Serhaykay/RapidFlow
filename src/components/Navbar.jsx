import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import logoImg from '../assets/logo-flow.png'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

const BREAKPOINT = 1024

export default function Navbar({ drawerOpen, setDrawerOpen }) {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < BREAKPOINT)
  const [closing, setClosing] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    const onResize = () => {
      const mobile = window.innerWidth < BREAKPOINT
      setIsMobile(mobile)
      if (!mobile) { setDrawerOpen(false); setClosing(false) }
    }
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize) }
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  const openDrawer = () => { setClosing(false); setDrawerOpen(true) }
  const closeDrawer = () => {
    setClosing(true)
    setTimeout(() => { setDrawerOpen(false); setClosing(false) }, 280)
  }

  const handleNavClick = (href) => {
    closeDrawer()
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 320)
  }

  const logoHeight = 80

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          background: '#ffffff',
          boxShadow: scrolled ? '0 2px 24px rgba(2,11,24,0.12)' : '0 1px 0 rgba(2,11,24,0.06)',
          transition: 'box-shadow 0.4s ease',
          padding: scrolled ? '0px 0' : '14px 0',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
          }}
        >
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <img
              src={logoImg}
              alt="Rapidflow Core Energy Limited"
              style={{ height: logoHeight, width: 'auto', display: 'block', objectFit: 'contain' }}
            />
          </a>

          {/* Desktop Nav Links — hidden on mobile */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 36, flex: 1, justifyContent: 'center' }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  style={{ color: '#0D1F3C' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#F97316'}
                  onMouseLeave={e => e.currentTarget.style.color = '#0D1F3C'}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}

          {/* Desktop CTA — hidden on mobile */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
              <a
                href="tel:+2349017424823"
                style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#0D1F3C', fontSize: 13, textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s', whiteSpace: 'nowrap' }}
                onMouseEnter={e => e.currentTarget.style.color = '#F97316'}
                onMouseLeave={e => e.currentTarget.style.color = '#0D1F3C'}
              >
                <Phone size={14} color="#F97316" />
                +234 901 742 4823
              </a>
              <a href="#contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: 13, whiteSpace: 'nowrap' }}>
                Get in Touch
              </a>
            </div>
          )}

          {/* Hamburger — only on mobile */}
          {isMobile && (
            <button
              onClick={openDrawer}
              aria-label="Open menu"
              style={{
                background: 'rgba(2,11,24,0.06)',
                border: 'none',
                borderRadius: 8,
                width: 42,
                height: 42,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#0D1F3C',
                flexShrink: 0,
              }}
            >
              <Menu size={22} />
            </button>
          )}
        </div>
      </nav>

      {/* Drawer Overlay */}
      {drawerOpen && (
        <div
          className="overlay-open"
          onClick={closeDrawer}
          style={{ position: 'fixed', inset: 0, background: 'rgba(2,11,24,0.5)', zIndex: 98, backdropFilter: 'blur(3px)' }}
        />
      )}

      {/* Side Drawer */}
      {drawerOpen && (
        <div
          className={closing ? 'drawer-close' : 'drawer-open'}
          style={{
            position: 'fixed',
            top: 0, right: 0, bottom: 0,
            width: 'min(300px, 82vw)',
            background: '#ffffff',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '-8px 0 48px rgba(2,11,24,0.2)',
          }}
        >
          {/* Drawer Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 20px', borderBottom: '1px solid rgba(2,11,24,0.07)' }}>
            <img src={logoImg} alt="Rapidflow" style={{ height: 40, width: 'auto', objectFit: 'contain', display: 'block' }} />
            <button
              onClick={closeDrawer}
              aria-label="Close menu"
              style={{ background: 'rgba(2,11,24,0.06)', border: 'none', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#0D1F3C' }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Drawer Links */}
          <div style={{ flex: 1, padding: '16px 20px 0', overflowY: 'auto' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#0D1F3C', textDecoration: 'none', padding: '15px 0', fontSize: 16, fontWeight: 600, borderBottom: '1px solid rgba(2,11,24,0.06)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#F97316'}
                onMouseLeave={e => e.currentTarget.style.color = '#0D1F3C'}
              >
                {link.label}
                <span style={{ color: '#F97316', fontSize: 18 }}>›</span>
              </a>
            ))}
          </div>

          {/* Drawer Footer */}
          <div style={{ padding: 20, borderTop: '1px solid rgba(2,11,24,0.07)' }}>
            <a
              href="tel:+2349017424823"
              style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#0D1F3C', textDecoration: 'none', fontSize: 14, fontWeight: 600, marginBottom: 14 }}
            >
              <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'rgba(249,115,22,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={14} color="#F97316" />
              </div>
              +234 901 742 4823
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '13px 24px' }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </>
  )
}
