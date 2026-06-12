'use client'

import { useEffect } from 'react'

const PAW_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><ellipse cx="6" cy="9" rx="2.1" ry="2.8"/><ellipse cx="11" cy="6.2" rx="2.1" ry="2.9"/><ellipse cx="16" cy="7.2" rx="2.1" ry="2.8"/><ellipse cx="19.6" cy="11.2" rx="1.9" ry="2.5"/><path d="M12 11c3 0 5.6 2.1 5.6 4.7 0 2.1-1.8 3.3-3.7 3.3-1 0-1.3-.4-1.9-.4s-.9.4-1.9.4c-1.9 0-3.7-1.2-3.7-3.3C6.4 13.1 9 11 12 11z"/></svg>`

export default function CustomCursor() {
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches
    const fine = matchMedia('(hover:hover) and (pointer:fine)').matches
    if (!fine || reduce) return

    const dot = document.createElement('div')
    dot.className = 'cursor-dot'
    const ring = document.createElement('div')
    ring.className = 'cursor-ring'
    document.body.append(dot, ring)

    let mx = innerWidth / 2, my = innerHeight / 2
    let rx = mx, ry = my, lastPaw = 0, side = 1, rafId = 0

    function onMove(e: MouseEvent) {
      mx = e.clientX; my = e.clientY
      dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`
      const now = performance.now()
      if (now - lastPaw > 110) {
        lastPaw = now; side *= -1
        const p = document.createElement('div')
        p.className = 'paw-trail'
        p.style.left = mx + side * 9 + 'px'
        p.style.top = my + side * 4 + 'px'
        p.style.setProperty('--rot', (Math.random() * 50 - 25) + 'deg')
        p.innerHTML = PAW_SVG
        document.body.appendChild(p)
        setTimeout(() => p.remove(), 900)
      }
    }

    function loop() {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`
      rafId = requestAnimationFrame(loop)
    }
    loop()

    const HOT = 'a,button,.svc-card,.spec,.tour-item,.float-card'
    const onOver = (e: MouseEvent) => { if ((e.target as Element).closest(HOT)) ring.classList.add('hot') }
    const onOut  = (e: MouseEvent) => { if ((e.target as Element).closest(HOT)) ring.classList.remove('hot') }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(rafId)
      dot.remove(); ring.remove()
    }
  }, [])

  return null
}
