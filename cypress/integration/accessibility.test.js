const A11Y_OPTIONS = {
  runOnly: {
    type: 'tag',
    values: ['wcag21aa', 'wcag2aa', 'best-practice', 'section508'],
  },
}
const isMasked = content =>
  content.match(
    /^obfuscated?/,
  )

describe('Accessibility tests', () => {
  it('Has no detectable accessibility violations on load on header links', () => {
    cy.visit('/')
    cy.get('header a').should('have.length', 7)
    cy.get('header a').each(item => {
      cy.visit(item[0].href)
        .get('main')
        .injectAxe()
      cy.checkA11y(A11Y_OPTIONS)
    })
  })
  it('Has no detectable accessibility violations on load on footer links', () => {
    cy.visit('/')
    cy.get('footer a').should('have.length', 4)
    cy.get('footer a').each(item => {
      if (!isMasked(item[0].href)) {
        cy.visit(item[0].href)
          .get('main')
          .injectAxe()
        cy.checkA11y(A11Y_OPTIONS)
      }
    })
  })
})
