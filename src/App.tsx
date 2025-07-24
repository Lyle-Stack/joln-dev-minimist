import { Instagram, Mail, MapPin } from "lucide-react"

export function App() {
  const iconLinks = [
    {
      href: "mailto:hello@joln.dev",
      icon: <Mail size={32} />,
      "aria-label": "Email",
    },
    {
      href: "https://maps.app.goo.gl/445kacTrdz3k48kP7",
      icon: <MapPin size={32} />,
      "aria-label": "Location",
    },
    {
      href: "https://www.instagram.com/liaochungyid/",
      icon: <Instagram size={32} />,
      "aria-label": "Instagram",
    },
  ]

  return (
    <div className="flex min-h-dvh items-center justify-center bg-gray-100 p-4 font-mono">
      <div className="flex w-full max-w-xl flex-col gap-3 text-left">
        {/* Profile Image */}
        <img
          src="/joln_dev_slug.svg"
          alt="joln.dev"
          className="h-32 w-32 rounded-full"
          onError={(e) => {
            ;(e.target as HTMLImageElement).onerror = null
            ;(e.target as HTMLImageElement).src =
              "https://placehold.co/128x128/1e1e1e/f3f4f6?text=joln.dev"
          }}
        />

        {/* Name */}
        <h1 className="font-bold text-4xl text-gray-800">Lyle Liao</h1>

        {/* Bio */}
        <p className="text-gray-600 leading-relaxed">
          Experienced full-stack engineer specializing in React and AI
          Automation Agent. Lyle offers AI automation and web development
          services to help you focus on more valuable tasks and free up your
          time. <br />
          <br />
          經驗豐富的全端工程師，專精於 React 和 AI 自動化代理。Lyle 提供 AI
          自動化和網頁開發服務，幫助您專注於更有價值的工作，解放您的時間。
        </p>

        {/* Icon Links */}
        <div className="flex items-center justify-start gap-4">
          {iconLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-label={link["aria-label"]}
              className="text-gray-800 transition-colors duration-300 hover:text-purple-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
