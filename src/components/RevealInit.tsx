'use client'

import { useEffect } from 'react'

export default function RevealInit() {
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches
    if (reduce) {
      document.querySelectorAll('.reveal,.reveal-pop').forEach(el => el.classList.add('in'))
      return
    }

    const els = [...document.querySelectorAll<HTMLElement>('.reveal,.reveal-pop')]

    function revealEl(el: HTMLElement) {
      el.classList.add('in')
      io.unobserve(el)
      if (document.visibilityState !== 'visible') {
        el.style.transition = 'none'
        el.style.opacity = '1'
        el.style.transform = 'none'
      }
    }

    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) revealEl(e.target as HTMLElement) }),
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' }
    )
    els.forEach(el => io.observe(el))

    function revealInView() {
      const h = window.innerHeight
      els.forEach(el => {
        if (el.classList.contains('in')) return
        const r = el.getBoundingClientRect()
        if (r.height > 0 && r.top < h * 0.92 && r.bottom > 0) revealEl(el)
      })
    }

    window.addEventListener('scroll', revealInView, { passive: true })
    window.addEventListener('resize', revealInView)
    document.addEventListener('visibilitychange', () => { if (!document.hidden) revealInView() })
    let polls = 0
    const id = setInterval(() => { revealInView(); if (++polls > 32) clearInterval(id) }, 140)
    revealInView()

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', revealInView)
      window.removeEventListener('resize', revealInView)
      clearInterval(id)
    }
  }, [])

  return null
}
