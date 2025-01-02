import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Features', href: '/features' },
    { name: 'Auctions', href: '/auctions' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img 
              src="/placeholder.svg?height=40&width=120" 
              alt="TPA Logo" 
              className="h-12"
            />
          </div>
          
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition duration-150 ease-in-out font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <Button variant="outline" className="ml-4 border-blue-500 text-blue-500 hover:bg-blue-50">
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

