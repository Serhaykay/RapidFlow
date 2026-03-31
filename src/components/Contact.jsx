import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, Building2 } from 'lucide-react'

const PHONE = '+2349017424823'
const PHONE_DISPLAY = '+234 901 742 4823'
const EMAIL = 'Rapidflowcoreenergy@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    const body = new FormData()
    body.append('name', form.name)
    body.append('email', form.email)
    body.append('company', form.company)
    body.append('service', form.service)
    body.append('message', form.message)
    body.append('_subject', `New Enquiry from ${form.name} — Rapidflow Core Energy`)
    body.append('_template', 'table')
    body.append('_captcha', 'false')

    try {
      await fetch(`https://formsubmit.co/${EMAIL}`, {
        method: 'POST',
        body,
      })
    } catch (_) {}

    setSubmitting(false)
    setSubmitted(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 6,
    color: '#fff',
    fontSize: 14,
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  }

  const labelStyle = {
    display: 'block',
    fontSize: 12,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: 8,
  }

  return (
    <section id="contact" style={{ background: '#020B18', padding: '120px 0' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="section-divider" style={{ marginBottom: 80 }} />

        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Get In Touch</div>
          <h2
            className="font-heading"
            style={{
              fontSize: 'clamp(30px, 4vw, 50px)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-1px',
              lineHeight: 1.15,
              marginBottom: 16,
            }}
          >
            Let's Talk{' '}
            <span className="gradient-text">Energy Solutions</span>
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.55)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Reach out to discuss how Rapidflow Core Energy can power your business forward.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginBottom: 48 }}>

              {/* Address */}
              <div style={{ display: 'flex', gap: 16, padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: 46, height: 46, borderRadius: 8, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={22} color="#F97316" />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', color: '#F97316', textTransform: 'uppercase', marginBottom: 6 }}>Head Office</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Ilorin, Kwara State</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Nigeria</div>
                </div>
              </div>

              {/* Phone — clickable dialer */}
              <div style={{ display: 'flex', gap: 16, padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: 46, height: 46, borderRadius: 8, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Phone size={22} color="#F97316" />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', color: '#F97316', textTransform: 'uppercase', marginBottom: 6 }}>Phone</div>
                  <a
                    href={`tel:${PHONE}`}
                    style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#F97316'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', gap: 16, padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: 46, height: 46, borderRadius: 8, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={22} color="#F97316" />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', color: '#F97316', textTransform: 'uppercase', marginBottom: 6 }}>Email</div>
                  <a
                    href={`mailto:${EMAIL}`}
                    style={{ display: 'block', fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#F97316'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div style={{ display: 'flex', gap: 16, padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div style={{ width: 46, height: 46, borderRadius: 8, background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Clock size={22} color="#F97316" />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '1.5px', color: '#F97316', textTransform: 'uppercase', marginBottom: 6 }}>Business Hours</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>Mon – Fri: 8:00 AM – 6:00 PM</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>24/7 Operations Support Line</div>
                </div>
              </div>
            </div>

            {/* Regional Offices */}
            <div style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 10 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <Building2 size={18} color="#F97316" />
                <span style={{ fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: '1px', textTransform: 'uppercase' }}>Regional Offices</span>
              </div>
              {['Lagos State', 'Abuja, FCT', 'Port Harcourt, Rivers State'].map((office) => (
                <div key={office} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#F97316' }} />
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>{office}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ gridColumn: 'span 3' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '48px 40px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, #F97316, #EA580C)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                    <Send size={28} color="white" />
                  </div>
                  <h3 className="font-heading" style={{ fontSize: 26, fontWeight: 700, color: '#fff', marginBottom: 12 }}>
                    Message Sent!
                  </h3>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                    Thank you for reaching out. Our team will respond to{' '}
                    <strong style={{ color: '#F97316' }}>{form.email}</strong>{' '}
                    within 24 business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', company: '', service: '', message: '' }) }}
                    style={{ marginTop: 24, background: 'none', border: '1px solid rgba(249,115,22,0.4)', color: '#F97316', padding: '10px 24px', borderRadius: 4, cursor: 'pointer', fontSize: 14, fontWeight: 600 }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={labelStyle}>Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Adeyemi"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#F97316'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#F97316'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>
                  </div>

                  <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div>
                      <label style={labelStyle}>Company Name</label>
                      <input
                        type="text"
                        placeholder="Your Company Ltd"
                        value={form.company}
                        onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#F97316'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Service Interest</label>
                      <select
                        value={form.service}
                        onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                        style={{ ...inputStyle, background: 'rgba(10,22,40,0.95)', color: form.service ? '#fff' : 'rgba(255,255,255,0.4)' }}
                        onFocus={e => e.target.style.borderColor = '#F97316'}
                        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                      >
                        <option value="">Select a service</option>
                        <option value="Aviation Turbine Kerosene (ATK)">Aviation Turbine Kerosene (ATK)</option>
                        <option value="Automotive Gas Oil (AGO/Diesel)">Automotive Gas Oil (AGO / Diesel)</option>
                        <option value="Liquefied Petroleum Gas (LPG)">Liquefied Petroleum Gas (LPG)</option>
                        <option value="Other Inquiry">Other Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: 28 }}>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your energy requirements and how we can help..."
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                      onFocus={e => e.target.style.borderColor = '#F97316'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '15px 32px', opacity: submitting ? 0.7 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}
                  >
                    {submitting ? 'Sending…' : 'Send Message'} <Send size={16} />
                  </button>

                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 14, textAlign: 'center' }}>
                    Your message will be sent to {EMAIL}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
