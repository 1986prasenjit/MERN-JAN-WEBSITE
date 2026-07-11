'use client'

import Link from 'next/link'

const Mail = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

const MapPin = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
  </svg>
)

const Phone = () => (
  <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.75 7L14 3.25l-10 10V17h3.75L17.75 7zm2.96-2.96c.39-.39.39-1.02 0-1.41L18.37.29c-.39-.39-1.02-.39-1.41 0L15 2.25 19.75 7l1.96-1.96z" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Column - About & Contact */}
          <div className="space-y-8">
            {/* Logo/Brand */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">Your Brand</h2>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Building innovative solutions to transform your business. We&apos;re committed to excellence and customer success.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-3">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider">Contact Us</h3>
              <div className="space-y-2 text-sm text-slate-400">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 flex-shrink-0 text-slate-300" />
                  <span>123 Business Street, Suite 100<br />New York, NY 10001</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="flex-shrink-0 text-slate-300" />
                  <a href="tel:+1-555-123-4567" className="hover:text-white transition">
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="flex-shrink-0 text-slate-300" />
                  <a href="mailto:hello@yourbrand.com" className="hover:text-white transition">
                    hello@yourbrand.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Follow Us</h3>
              <div className="flex items-center gap-4">
                <a href="https://twitter.com" className="text-slate-400 hover:text-white transition w-5 h-5" aria-label="Twitter">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9-5 9-5z" />
                  </svg>
                </a>
                <a href="https://github.com" className="text-slate-400 hover:text-white transition w-5 h-5" aria-label="GitHub">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a href="https://facebook.com" className="text-slate-400 hover:text-white transition w-5 h-5" aria-label="Facebook">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://linkedin.com" className="text-slate-400 hover:text-white transition w-5 h-5" aria-label="LinkedIn">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.83 0-9.744h3.554v1.379c-.009.015-.021.029-.033.042h.033v-.042c.43-.664 1.199-1.61 2.919-1.61 2.134 0 3.734 1.39 3.734 4.38v5.595zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.953.77-1.715 1.967-1.715 1.197 0 1.915.762 1.915 1.715 0 .953-.771 1.715-1.967 1.715zm1.582 11.597H3.747V8.558h3.172v11.894zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Navigation & Newsletter */}
          <div className="space-y-8">
            {/* Links Sections */}
            <div className="grid grid-cols-2 gap-8">
              {/* Company Links */}
              <div>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Support</h3>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Contact Support
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-white transition">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-slate-900 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-slate-400 text-sm mb-4">Get the latest updates delivered to your inbox.</p>
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded bg-slate-800 text-white text-sm placeholder-slate-500 border border-slate-700 focus:outline-none focus:border-slate-600 transition"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-slate-950 rounded font-semibold text-sm hover:bg-slate-100 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>&copy; 2024 Your Brand. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}