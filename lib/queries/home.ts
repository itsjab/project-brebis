const AccommodationRecordFragment = `
fragment AccommodationRecordFragment on AccommodationRecord {
  name
  rooms
  description
  imageGallery {
    alt
    title
    url
  }
  coverImage {
    alt
    url
    title
  }
}
`

export const HOMEPAGE_QUERY = `query HomePageQuery {
  homePage {
    accommodations {
      name
      rooms
      coverImage {
        alt
        title
        url
      }
      description
    }
  }
}`