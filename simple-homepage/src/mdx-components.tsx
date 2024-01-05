import type { MDXComponents } from 'mdx/types'  


export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="font-bold text-4xl text-slate-400">{children}</h1>,
    h2: ({ children }) => <h2 className="font-bold text-3xl text-slate-400">{children}</h2>,
    h3: ({ children }) => <h3 className="font-bold text-2xl text-slate-400">{children}</h3>,
    h4: ({ children }) => <h4 className="font-bold text-xl text-slate-400">{children}</h4>,
    p: ({ children }) => <p className="text-gray-700 dark:text-gray-300">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
    li: ({ children }) => <li className="text-gray-700 dark:text-gray-300">{children}</li>,   
    pre: ({ children }) => <pre className="text-gray-700 dark:text-gray-300">{children}</pre>,
    code: ({ children }) => <code className="text-gray-700 dark:text-gray-300">{children}</code>, 
    ...components,
  }
}