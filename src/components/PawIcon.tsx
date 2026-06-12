import type { SVGProps } from 'react'

export default function PawIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <ellipse cx="6"    cy="9"    rx="2.1" ry="2.8" />
      <ellipse cx="11"   cy="6.2"  rx="2.1" ry="2.9" />
      <ellipse cx="16"   cy="7.2"  rx="2.1" ry="2.8" />
      <ellipse cx="19.6" cy="11.2" rx="1.9" ry="2.5" />
      <path d="M12 11c3 0 5.6 2.1 5.6 4.7 0 2.1-1.8 3.3-3.7 3.3-1 0-1.3-.4-1.9-.4s-.9.4-1.9.4c-1.9 0-3.7-1.2-3.7-3.3C6.4 13.1 9 11 12 11z" />
    </svg>
  )
}
