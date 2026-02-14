import type {StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Contenuti')
    .items([
      // Singleton for Site Settings
      S.listItem()
        .title('Impostazioni Sito')
        .id('siteSettings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.divider(),
      // Group: Collezione
      S.listItem()
        .title('Collezione')
        .child(
          S.list()
            .title('Collezione')
            .items([
              S.documentTypeListItem('coin').title('Monete'),
              S.documentTypeListItem('antiquity').title('Antichità'),
              S.divider(),
              S.documentTypeListItem('category').title('Categorie'),
              S.documentTypeListItem('period').title('Periodi'),
              S.documentTypeListItem('material').title('Materiali'),
              S.documentTypeListItem('condition').title('Condizioni'),
            ])
        ),
      S.divider(),
      S.documentTypeListItem('auction').title('Aste'),
      S.documentTypeListItem('faq').title('FAQ'),
      S.documentTypeListItem('shippingOption').title('Spedizioni'),
      // List all other types but exclude the singleton
      ...S.documentTypeListItems().filter(
        (listItem) => !['siteSettings', 'coin', 'antiquity', 'category', 'period', 'material', 'condition', 'auction', 'faq', 'shippingOption'].includes(listItem.getId()!)
      ),
    ])
