import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

/**
 * Returns a Sanity image URL builder.
 * 
 * The Sanity CDN already transforms images (resize, format conversion),
 * so combine this with the `unoptimized` prop on <Image> to avoid paying
 * Vercel Image Optimization credits for images that are already optimized.
 * 
 * Standard usage:
 *   src={urlFor(image).width(600).height(600).url()}
 *   ...
 *   unoptimized
 */
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}
