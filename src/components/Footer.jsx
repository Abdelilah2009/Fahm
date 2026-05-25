export default function Footer() {
  return (
    <footer dir="ltr" className="border-t border-gray-200 dark:border-neutral-800 mt-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-center gap-1 text-xs text-gray-400 dark:text-neutral-600">
        <span>Developed by</span>
        <a
          href="https://www.instagram.com/abdelilah__ed/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
        >
          Abdelilah Eddalili
        </a>
      </div>
    </footer>
  );
}
