import { useEffect, useRef } from 'react'

export function useScrollAnimation(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view')
          observer.unobserve(el)
        }
      },
      { threshold: options.threshold || 0.12, rootMargin: options.rootMargin || '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

export function useStaggerAnimation(count, options = {}) {
  const refs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: options.threshold || 0.1, rootMargin: '0px 0px -30px 0px' }
    )

    refs.current.forEach((el) => { if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [count])

  const setRef = (i) => (el) => { refs.current[i] = el }
  return setRef
}
