import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

export function LanguageToggle() {
  const url = new URL(window.location.href)
  const currentPath = url.pathname
  const language = currentPath.startsWith('/pt') ? 'pt_br' : 'en'

  const toggleLanguage = () => {
    if (language === 'en') {
      url.pathname = currentPath.replace(/^\/(en|pt_br)/, '/pt_br')
    } else {
      url.pathname = currentPath.replace(/^\/(en|pt_br)/, '/en')
    }
    window.location.href = url.toString()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative border-0 bg-transparent shadow-none dark:bg-transparent"
        >
          {language === 'en' ? '🇺🇸' : '🇧🇷'}
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={toggleLanguage}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={toggleLanguage}>Português</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
