import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
}

export function SEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
}: SEOProps) {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title
    }

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    if (description) {
      metaDescription.setAttribute('content', description)
    }

    // Update or create canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    if (canonical) {
      const fullUrl = canonical.startsWith('http') 
        ? canonical 
        : `${window.location.origin}${canonical}`
      canonicalLink.setAttribute('href', fullUrl)
    }

    // Update or create Open Graph tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('property', property)
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }

    if (ogTitle) {
      updateOrCreateMeta('og:title', ogTitle)
    }
    if (ogDescription) {
      updateOrCreateMeta('og:description', ogDescription)
    }
    if (ogImage) {
      updateOrCreateMeta('og:image', ogImage)
    }

    // Cleanup function
    return () => {
      // Optionally reset to default values on unmount
    }
  }, [title, description, canonical, ogTitle, ogDescription, ogImage])

  return null
}

