# Sanity CMS Integration - Setup Complete

## ✅ What's Been Created

### 1. Schema Types (`/sanity/schemaTypes/`)
- **coin.ts** - Main coin content with images, description, price, and references
- **category.ts** - Coin categories (Ancient, Medieval, Modern, etc.)
- **period.ts** - Historical periods
- **material.ts** - Coin materials (Gold, Silver, Bronze, etc.)
- **condition.ts** - Coin conditions (Mint, Fine, Good, etc.)
- **auction.ts** - Auction listings with dates and links
- **faq.ts** - FAQ entries with categories
- **index.ts** - Schema registry

### 2. Configuration Files
- **sanity.config.ts** - Main Sanity configuration
- **sanity.cli.ts** - CLI configuration
- **sanity/env.ts** - Environment variable helpers
- **.env.local.example** - Environment template

### 3. Library Files (`/sanity/lib/`)
- **client.ts** - Sanity client setup
- **image.ts** - Image URL builder helper
- **queries.ts** - Pre-built GROQ queries for all content types
- **types.ts** - TypeScript interfaces

### 4. Studio Route
- **app/studio/[[...tool]]/page.tsx** - Sanity Studio interface

### 5. Configuration Updates
- **next.config.ts** - Added Sanity CDN to allowed image domains
- **package.json** - Added Sanity dependencies

## 🚀 Next Steps

### 1. Set Up Sanity Project
```bash
# Visit https://www.sanity.io/manage
# Create a new project and copy the Project ID
```

### 2. Configure Environment Variables
Create `.env.local` file:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-02-05
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Access Sanity Studio
Navigate to: `http://localhost:3000/studio`

### 5. Add Content
Use the Studio to add:
- Categories (e.g., "Ancient Coins", "Modern Coins")
- Periods (e.g., "Roman Empire", "Medieval")
- Materials (e.g., "Gold", "Silver")
- Conditions (e.g., "Mint", "Fine")
- Coins with all details
- Auctions
- FAQ entries

## 📝 Usage Examples

### Fetching Coins in a Component
```typescript
import { client } from '@/sanity/lib/client'
import { coinsQuery } from '@/sanity/lib/queries'
import { Coin } from '@/sanity/lib/types'

export default async function CoinsPage() {
  const coins = await client.fetch<Coin[]>(coinsQuery)
  
  return (
    <div>
      {coins.map((coin) => (
        <div key={coin._id}>
          <h2>{coin.title}</h2>
          <p>{coin.price}</p>
        </div>
      ))}
    </div>
  )
}
```

### Using Image URLs
```typescript
import { urlFor } from '@/sanity/lib/image'

// In your component
{coin.images?.[0] && (
  <img 
    src={urlFor(coin.images[0]).width(400).url()} 
    alt={coin.title}
  />
)}
```

## 📚 Available Queries

All queries are in `/sanity/lib/queries.ts`:
- `coinsQuery` - All coins
- `coinBySlugQuery` - Single coin by slug
- `categoriesQuery` - All categories
- `periodsQuery` - All periods
- `materialsQuery` - All materials
- `conditionsQuery` - All conditions
- `auctionsQuery` - All auctions
- `upcomingAuctionsQuery` - Future auctions only
- `faqsQuery` - All FAQs
- `faqsByCategoryQuery` - FAQs filtered by category
- `coinsByCategoryQuery` - Coins filtered by category
- `coinsByPeriodQuery` - Coins filtered by period

## 🎨 Content Structure

### Coin Fields
- Title, Slug
- Images (array)
- Description (rich text)
- Category (reference)
- Period (reference)
- Material (reference)
- Condition (reference)
- Price (number)
- Year, Weight, Diameter (strings)

### Auction Fields
- Title, Slug
- Description
- Start/End Dates
- External Link
- Main Image

### FAQ Fields
- Question
- Answer (rich text)
- Category (general/shipping/payments)
