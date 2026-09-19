import { Link, useLocation, useNavigate } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { Home } from '../routes/index'
import { SiteFooter } from './site-footer'
import {
  FolderOpen,
  House,
  Mail,
  UserRound,
  Github,
  Linkedin,
  Sparkles,
  Maximize2,
  Minimize2,
  X,
} from 'lucide-react'

const shortcuts = [
  { to: '/', label: 'Home', icon: House },
  { to: '/work', label: 'Work', icon: FolderOpen },
  { to: '/about', label: 'About me', icon: UserRound },
  { to: '/contact', label: 'Contact', icon: Mail },
] as const

export function Workspace({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const isOpen = pathname !== '/'
  const [maximized, setMaximized] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const returnFocus = useRef<HTMLElement | null>(null)
  const wasOpen = useRef(false)
  const homeScroll = useRef(0)

  useEffect(() => {
    if (isOpen) return
    const rememberScroll = () => {
      homeScroll.current = window.scrollY
    }
    document.addEventListener('click', rememberScroll, true)
    return () => document.removeEventListener('click', rememberScroll, true)
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      if (!wasOpen.current) {
        returnFocus.current = document.activeElement as HTMLElement
        window.scrollTo({ top: homeScroll.current, behavior: 'instant' })
      }
      contentRef.current?.scrollTo(0, 0)
      closeRef.current?.focus({ preventScroll: true })
    } else if (wasOpen.current) {
      setMaximized(false)
      window.scrollTo({ top: homeScroll.current, behavior: 'instant' })
      returnFocus.current?.focus({ preventScroll: true })
    }
    wasOpen.current = isOpen
  }, [pathname, isOpen])

  useEffect(() => {
    if (!isOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !event.defaultPrevented) {
        event.preventDefault()
        void navigate({ to: '/', resetScroll: false })
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, navigate])
  const page = pathname.startsWith('/work/')
    ? 'Work / Case study'
    : (shortcuts.find((item) => item.to === pathname)?.label ?? 'Portfolio')

  return (
    <div className={`desktop${maximized && isOpen ? ' desktop--maximized' : ''}`}>
      <nav className="desktop-shortcuts" aria-label="Workspace shortcuts">
        {shortcuts.map(({ to, label, icon: Icon }) => (
          <Link
            resetScroll={false}
            key={to}
            to={to}
            activeOptions={{ exact: to === '/' }}
            activeProps={{ 'aria-current': 'page' }}
          >
            <span className="shortcut-icon">
              <Icon aria-hidden="true" />
            </span>
            <span>{label}</span>
          </Link>
        ))}
        <a
          href="https://github.com/oyedelehabeeb"
          target="_blank"
          rel="noreferrer"
        >
          <span className="shortcut-icon">
            <Github aria-hidden="true" />
          </span>
          <span>GitHub ↗</span>
        </a>
        <a
          href="https://www.linkedin.com/in/habeeb-oyedele-6907582b4"
          target="_blank"
          rel="noreferrer"
        >
          <span className="shortcut-icon">
            <Linkedin aria-hidden="true" />
          </span>
          <span>LinkedIn ↗</span>
        </a>
      </nav>
      <div
        className="workspace-window workspace-home"
        inert={isOpen}
        aria-hidden={isOpen || undefined}
      >
        <div className="window-titlebar">
          <div>
            <Sparkles size={14} aria-hidden="true" />
            <span>Habeeb’s workspace</span>
            <span className="window-path">/ Home</span>
          </div>
          <span className="window-lights" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </div>
        <Home inactive={isOpen} />
        <SiteFooter />
      </div>
      {isOpen && (
        <section
          className={`workspace-window floating-window${maximized ? ' floating-window--maximized' : ''}`}
          role="dialog"
          aria-labelledby="floating-window-title"
        >
          <div className="window-titlebar floating-titlebar">
            <div>
              <FolderOpen size={14} aria-hidden="true" />
              <span id="floating-window-title">{page}</span>
            </div>
            <div className="window-controls">
              <button
                type="button"
                className="window-control window-control--resize"
                aria-label={maximized ? 'Restore window' : 'Maximize window'}
                title={maximized ? 'Restore window' : 'Maximize window'}
                onClick={() => setMaximized((value) => !value)}
              >
                {maximized ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
              </button>
              <button
                ref={closeRef}
                type="button"
                className="window-control window-control--close"
                aria-label="Close window and return home"
                title="Close window (Esc)"
                onClick={() => void navigate({ to: '/', resetScroll: false })}
              >
                <X size={17} />
              </button>
            </div>
          </div>
          <div className="floating-content" ref={contentRef} key={pathname}>
            {children}
          </div>
        </section>
      )}
      <p className="desktop-caption">
        A little workspace for things I’ve built.
      </p>
    </div>
  )
}
