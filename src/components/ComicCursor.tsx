'use client'

import { useEffect, useRef, useState } from 'react'

interface CursorTrail {
  id: number
  x: number
  y: number
  timestamp: number
}

export default function ComicCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [trail, setTrail] = useState<CursorTrail[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const trailIdRef = useRef(0)
  const cleanupRef = useRef<(() => void)[]>([])

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return

    let lastUpdate = Date.now()

    const checkIsInteractive = (element: HTMLElement | null): boolean => {
      if (!element) return false
      
      const tagName = element.tagName.toLowerCase()
      const isInteractiveTag = ['a', 'button', 'input', 'textarea', 'select'].includes(tagName)
      const hasInteractiveRole = element.getAttribute('role') === 'button'
      const hasInteractiveClass = element.classList.contains('comic-hover') ||
        element.classList.contains('comic-button') ||
        element.classList.contains('comic-chip')
      const hasInteractiveParent = element.closest('a, button, input, textarea, select, .comic-hover, .comic-button, .comic-chip, [role="button"]')
      
      return isInteractiveTag || hasInteractiveRole || hasInteractiveClass || !!hasInteractiveParent
    }

    const updateCursor = (e: MouseEvent) => {
      const now = Date.now()
      
      // Throttle updates for better performance
      if (now - lastUpdate < 16) return // ~60fps
      lastUpdate = now

      const target = e.target as HTMLElement
      setCursorPosition({ x: e.clientX, y: e.clientY })
      setIsHovering(checkIsInteractive(target))
      setIsVisible(true)

      // Add to trail
      const newTrailPoint: CursorTrail = {
        id: trailIdRef.current++,
        x: e.clientX,
        y: e.clientY,
        timestamp: now,
      }

      setTrail((prev) => {
        const updated = [...prev, newTrailPoint]
        
        // Keep only recent trail points (last 300ms) and limit length
        const filtered = updated
          .filter((point) => now - point.timestamp < 300)
          .slice(-12) // Limit to 12 trail points
        
        return filtered
      })
    }

    window.addEventListener('mousemove', updateCursor)

    // Cleanup trail periodically
    const cleanupInterval = setInterval(() => {
      const now = Date.now()
      setTrail((prev) => prev.filter((point) => now - point.timestamp < 300))
    }, 100)

    cleanupRef.current.push(() => {
      window.removeEventListener('mousemove', updateCursor)
      clearInterval(cleanupInterval)
    })

    return () => {
      cleanupRef.current.forEach((cleanup) => cleanup())
      cleanupRef.current = []
    }
  }, [])

  // Hide cursor on mobile/touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  if (typeof window === 'undefined' || isTouchDevice) {
    return null
  }

  return (
    <>
      {/* Main cursor */}
      <div
        className={`comic-cursor ${isHovering ? 'comic-cursor-hover' : ''} ${!isVisible ? 'comic-cursor-hidden' : ''}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      >
        {isHovering && (
          <>
            <div className="comic-cursor-action-line comic-cursor-action-line-1"></div>
            <div className="comic-cursor-action-line comic-cursor-action-line-2"></div>
            <div className="comic-cursor-action-line comic-cursor-action-line-3"></div>
          </>
        )}
      </div>

      {/* Cursor trail */}
      <div className="comic-cursor-trail-container">
        {trail.map((point, index) => {
          const opacity = (index / Math.max(trail.length, 1)) * 0.7
          const size = 4 + index * 0.4
          const age = Date.now() - point.timestamp
          const fadeOpacity = opacity * (1 - age / 300)
          const rotation = (point.id % 4) * 22.5 // Slight rotation variation for comic effect

          return (
            <div
              key={point.id}
              className="comic-cursor-trail"
              style={{
                left: `${point.x}px`,
                top: `${point.y}px`,
                opacity: Math.max(0, fadeOpacity),
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
              }}
            />
          )
        })}
      </div>
    </>
  )
}

