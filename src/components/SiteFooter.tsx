import { Facebook, Instagram, Twitter, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SiteFooter = () => {
  return (
    <footer className="bg-[#071F32] text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-4 items-start">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center ring-1 ring-white/20">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <h4 className="font-semibold tracking-tight">Brain Brew</h4>
            </div>
            <p className="text-sm text-white/80 leading-relaxed max-w-xs">Boost your cognitive abilities with science‑backed assessments.</p>
          </div>

          {/* Links */}
          <div className="text-sm">
            <h5 className="mb-3 text-white/90 font-semibold">Explore</h5>
            <ul className="space-y-2">
              <li><Link to="/#tests" className="text-white/70 hover:text-white">Tests</Link></li>
              <li><Link to="/#pricing" className="text-white/70 hover:text-white">Pricing</Link></li>
              <li><Link to="/#faq" className="text-white/70 hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-sm">
            <h5 className="mb-3 text-white/90 font-semibold">Contact</h5>
            <ul className="space-y-2 text-white/70">
              <li><a href="mailto:support@brainbrew.app" className="hover:text-white">support@brainbrew.app</a></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:justify-self-end">
            <h5 className="mb-3 text-white/90 font-semibold">Follow</h5>
            <div className="flex items-center gap-3">
              <a aria-label="Twitter" href="#" className="group inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-white/20 bg-white/5 hover:bg-white/10 transition-colors">
                <Twitter className="h-4 w-4 text-white/90 group-hover:text-white" />
              </a>
              <a aria-label="Instagram" href="#" className="group inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-white/20 bg-white/5 hover:bg-white/10 transition-colors">
                <Instagram className="h-4 w-4 text-white/90 group-hover:text-white" />
              </a>
              <a aria-label="Facebook" href="#" className="group inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-white/20 bg-white/5 hover:bg-white/10 transition-colors">
                <Facebook className="h-4 w-4 text-white/90 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-4 text-xs text-white/70 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Brain Brew. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="hover:text-white">About</Link>
            <span className="text-white/30">•</span>
            <Link to="/contact" className="hover:text-white">Contact</Link>
            <span className="text-white/30">•</span>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <span className="text-white/30">•</span>
            <Link to="/terms" className="hover:text-white">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}; 