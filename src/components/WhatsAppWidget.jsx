import { useState } from 'react'

const PHONE = '2349017424823'
const WA_URL = `https://wa.me/${PHONE}?text=Hello%20Rapidflow%20Core%20Energy%2C%20I%20would%20like%20to%20make%20an%20enquiry.`

export default function WhatsAppWidget({ drawerOpen }) {
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 32,
        right: drawerOpen ? 'auto' : 32,
        left: drawerOpen ? 16 : 'auto',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: drawerOpen ? 'flex-start' : 'flex-end',
        gap: 12,
        transition: 'left 0.3s ease, right 0.3s ease',
      }}
    >
      {/* Tooltip */}
      <div
        style={{
          background: '#fff',
          color: '#111',
          padding: '10px 16px',
          borderRadius: 10,
          fontSize: 13,
          fontWeight: 600,
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          whiteSpace: 'nowrap',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0) scale(1)' : 'translateY(6px) scale(0.95)',
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          pointerEvents: 'none',
          position: 'relative',
        }}
      >
        Chat with us on WhatsApp
        {/* Arrow */}
        <div style={{
          position: 'absolute',
          bottom: -6,
          right: drawerOpen ? 'auto' : 22,
          left: drawerOpen ? 22 : 'auto',
          width: 12,
          height: 12,
          background: '#fff',
          transform: 'rotate(45deg)',
          borderRadius: 2,
        }} />
      </div>

      {/* WhatsApp Button */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: hovered
            ? '0 8px 40px rgba(37,211,102,0.5), 0 4px 16px rgba(0,0,0,0.3)'
            : '0 4px 24px rgba(37,211,102,0.35), 0 2px 8px rgba(0,0,0,0.2)',
          transform: hovered ? 'scale(1.12)' : 'scale(1)',
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          textDecoration: 'none',
          animation: 'wa-pulse 2.5s infinite',
        }}
      >
        {/* WhatsApp SVG Icon */}
        <svg
          width="30"
          height="30"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 2C8.268 2 2 8.268 2 16c0 2.49.656 4.826 1.8 6.84L2 30l7.36-1.772A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
            fill="white"
          />
          <path
            d="M23.6 20.4c-.3-.15-1.78-.878-2.058-.978-.278-.1-.48-.15-.682.15-.2.3-.782.978-.958 1.178-.176.2-.352.226-.652.076-.3-.15-1.268-.468-2.414-1.49-.892-.796-1.494-1.778-1.67-2.078-.176-.3-.018-.462.132-.61.136-.135.3-.353.45-.53.15-.178.2-.3.3-.5.1-.2.05-.376-.025-.528-.075-.15-.682-1.644-.934-2.252-.246-.59-.496-.51-.682-.52-.176-.008-.376-.01-.577-.01-.2 0-.527.075-.803.375-.276.3-1.053 1.028-1.053 2.508 0 1.48 1.078 2.91 1.228 3.11.15.2 2.12 3.236 5.135 4.538.718.31 1.278.496 1.714.636.72.228 1.376.196 1.894.118.578-.086 1.78-.728 2.032-1.43.25-.702.25-1.304.175-1.43-.075-.126-.275-.2-.575-.35z"
            fill="#25D366"
          />
        </svg>
      </a>

      <style>{`
        @keyframes wa-pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          70% { box-shadow: 0 0 0 14px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
      `}</style>
    </div>
  )
}
