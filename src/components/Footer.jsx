import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-slate-200 dark:border-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              &copy; {currentYear} All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
            <span>Designed & Built with</span>
            <Heart size={16} className="mx-1 text-green" />
            <span>by Prateek Sethia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
