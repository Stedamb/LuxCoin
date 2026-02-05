import { PortableText, PortableTextComponents } from '@portabletext/react'
import { PortableTextBlock } from 'sanity'

// Custom components for rendering Portable Text
const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mb-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold mb-2">{children}</h4>,
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-6 mb-4">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal ml-6 mb-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
    number: ({ children }) => <li className="mb-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a
          href={value.href}
          rel={rel}
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      )
    },
  },
}

interface PortableTextRendererProps {
  value: PortableTextBlock[]
  className?: string
}

export function PortableTextRenderer({ value, className = '' }: PortableTextRendererProps) {
  return (
    <div className={className}>
      <PortableText value={value} components={components} />
    </div>
  )
}
