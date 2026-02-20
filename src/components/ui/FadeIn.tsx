'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  duration?: number
  once?: boolean
}

const TRANSLATE: Record<NonNullable<FadeInProps['direction']>, string> = {
  up: 'translate3d(0, 24px, 0)',
  down: 'translate3d(0, -24px, 0)',
  left: 'translate3d(24px, 0, 0)',
  right: 'translate3d(-24px, 0, 0)',
  none: 'translate3d(0, 0, 0)',
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 600,
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translate3d(0, 0, 0)' : TRANSLATE[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export function FadeInStagger({
  children,
  className,
  staggerDelay = 100,
  direction = 'up' as FadeInProps['direction'],
  duration = 600,
}: {
  children: ReactNode[]
  className?: string
  staggerDelay?: number
  direction?: FadeInProps['direction']
  duration?: number
}) {
  return (
    <>
      {children.map((child, i) => (
        <FadeIn
          key={i}
          className={className}
          delay={i * staggerDelay}
          direction={direction}
          duration={duration}
        >
          {child}
        </FadeIn>
      ))}
    </>
  )
}
