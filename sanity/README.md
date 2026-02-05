# Sanity CMS Setup for LuxCoin

## Getting Started

### 1. Create a Sanity Project

1. Go to [sanity.io](https://www.sanity.io/) and create an account
2. Create a new project
3. Copy your Project ID

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-02-05
```

### 3. Access Sanity Studio

Once configured, you can access the Sanity Studio at:
```
http://localhost:3000/studio
```

## Content Types

### Coins
Main content type for coin listings with:
- Title, slug, images
- Description (rich text)
- References to: Category, Period, Material, Condition
- Price, year, weight, diameter

### Categories
Organize coins by type (e.g., Ancient, Medieval, Modern)

### Periods
Historical periods (e.g., Roman Empire, Renaissance)

### Materials
Coin materials (e.g., Gold, Silver, Bronze)

### Conditions
Coin conditions (e.g., Mint, Fine, Good)

### Auctions
Upcoming or past auctions with:
- Title, description, image
- Start/end dates
- External link

### FAQ
Frequently asked questions with:
- Question and answer (rich text)
- Category (General, Shipping, Payments)

## Example Queries

See `sanity/lib/queries.ts` for GROQ query examples.
