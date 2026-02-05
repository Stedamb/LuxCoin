# Integrazione Sanity CMS - Pagina Collezione

## ✅ Modifiche Completate

### 1. **Nuove Query per la Collezione**
- **File**: `/sanity/lib/collection-queries.ts`
- Query ottimizzata che recupera:
  - Tutte le monete con i loro riferimenti
  - Categorie, periodi, materiali e condizioni per i filtri
  - Tutto in una singola chiamata al database

### 2. **FilterSidebar Dinamico**
- **File**: `/components/collection/FilterSidebar.tsx`
- Aggiornato per usare dati dinamici da Sanity invece di valori hardcoded
- Supporta filtri per:
  - Categorie
  - Periodi
  - Materiali
  - Condizioni
- Mostra solo i filtri che hanno dati disponibili

### 3. **Componente Client per la Collezione**
- **File**: `/components/collection/CollectionClient.tsx`
- Gestisce:
  - Stato dei filtri
  - Ricerca testuale
  - Filtraggio lato client delle monete
  - Visualizzazione delle card delle monete con immagini da Sanity
- Supporta immagini reali da Sanity o placeholder se non disponibili

### 4. **Pagina Collezione Aggiornata**
- **File**: `/app/collection/page.tsx`
- Convertita in Server Component
- Recupera tutti i dati da Sanity
- Passa i dati al componente client
- Revalidazione automatica ogni 60 secondi

### 5. **Pagina Dettaglio Moneta**
- **File**: `/app/collection/[slug]/page.tsx` (nuovo)
- Routing basato su slug invece di ID
- Mostra:
  - Galleria immagini (principale + thumbnails)
  - Descrizione completa con rich text
  - Scheda tecnica dinamica
  - Tutti i metadati della moneta
- Integrazione completa con Sanity

## 🔄 Funzionalità

### Filtri Funzionanti
I filtri ora funzionano dinamicamente:
1. **Categoria** - Filtra per tipo di moneta
2. **Periodo** - Filtra per epoca storica
3. **Materiale** - Filtra per metallo (Oro, Argento, Bronzo, etc.)
4. **Condizione** - Filtra per stato di conservazione

### Ricerca
- Ricerca testuale che cerca in:
  - Titolo della moneta
  - Anno
  - Categoria
  - Periodo

### Visualizzazione
- Grid responsive (1/2/3 colonne)
- Immagini reali da Sanity CDN
- Placeholder elegante se l'immagine non è disponibile
- Hover effects e transizioni fluide

## 📝 Come Usare

### 1. Aggiungi Contenuti in Sanity Studio
Vai su `http://localhost:3000/studio` e aggiungi:

1. **Categorie** (es: "Monete Romane", "Monete Greche")
2. **Periodi** (es: "Impero Romano", "Repubblica Romana")
3. **Materiali** (es: "Oro", "Argento", "Bronzo")
4. **Condizioni** (es: "FDC", "SPL", "BB")
5. **Monete** con tutti i dettagli

### 2. I Filtri si Popolano Automaticamente
I filtri nella sidebar si popolano automaticamente con i dati che hai inserito in Sanity.

### 3. Routing
- Lista: `/collection`
- Dettaglio: `/collection/[slug-della-moneta]`

## 🎨 Caratteristiche

- ✅ Filtri multipli combinabili
- ✅ Ricerca in tempo reale
- ✅ Contatore risultati
- ✅ Reset filtri
- ✅ Immagini ottimizzate da Sanity CDN
- ✅ Rich text per descrizioni
- ✅ Responsive design
- ✅ Server-side rendering con revalidazione
- ✅ Routing basato su slug SEO-friendly

## 🔗 File Modificati/Creati

### Nuovi File
- `/sanity/lib/collection-queries.ts`
- `/components/collection/CollectionClient.tsx`
- `/app/collection/[slug]/page.tsx`

### File Modificati
- `/components/collection/FilterSidebar.tsx`
- `/app/collection/page.tsx`

### File Vecchi (da rimuovere opzionalmente)
- `/app/collection/[id]/page.tsx` (sostituito da `[slug]/page.tsx`)
- `/lib/coins.ts` (non più necessario, ora usi Sanity)
