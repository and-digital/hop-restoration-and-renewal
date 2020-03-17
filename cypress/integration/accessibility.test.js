const A11Y_OPTIONS = {
  runOnly: {
    type: 'tag',
    values: ['wcag21aa', 'wcag2aa', 'best-practice'],
  },
}

const pageUrls = [
  '/',
  '/palace_of_westminster',
  '/our-plan',
  'work-with-us',
  '/news',
  '/resources',
  '/sitemap',
  '/privacy-policy',
  '/accessibility',
]

describe('Accessibility tests', () => {
  pageUrls.forEach(url => {
    it(`Has no detectable accessibility violations on load on on ${url} page`, () => {
      cy.visit(url)
        .get('main')
        .injectAxe()
      cy.checkA11y(A11Y_OPTIONS)
    })
  })
})
