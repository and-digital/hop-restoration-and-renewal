const A11Y_OPTIONS = {
  runOnly: {
    type: 'tag',
    values: ['wcag21aa', 'wcag2aa', 'best-practice', 'section508'],
  },
}

describe('Accessibility tests', () => {
  it('Has no detectable accessibility violations on load on header links', () => {
    cy.visit('/')
    cy.get('[data-cy="navigation-link"]').should('have.length', 6)
    cy.get('[data-cy="navigation-link"]').each(item => {
      cy.visit(item[0].href)
        .get('main')
        .injectAxe()
      cy.checkA11y(A11Y_OPTIONS)
    })
  })
  it('Has no detectable accessibility violations on load on footer links', () => {
    cy.visit('/')
    cy.get('[data-cy="footer-link"]').should('have.length', 3)
    cy.get('[data-cy="footer-link"]').each(item => {
      cy.visit(item[0].href)
        .get('main')
        .injectAxe()
      cy.checkA11y(A11Y_OPTIONS)
    })
  })
})
