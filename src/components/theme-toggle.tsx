import { Moon, Sun } from 'lucide-react'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ThemeToggle() {
  const [theme, setThemeState] = React.useState<
    'theme-light' | 'dark' | 'system'
  >(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as 'theme-light' | 'dark' | 'system'
    }
    return 'theme-light'
  })

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setThemeState(isDarkMode ? 'dark' : 'theme-light')
  }, [])

  React.useEffect(() => {
    const isDark =
      theme === 'dark' ||
      (theme === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative border-0 bg-transparent shadow-none dark:bg-transparent"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 text-zinc-800 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 dark:text-zinc-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-[9999] dark:bg-zinc-900">
        <DropdownMenuItem onClick={() => setThemeState('theme-light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
