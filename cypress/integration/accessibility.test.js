const A11Y_OPTIONS = {
  runOnly: {
    type: 'tag',
    values: ['wcag21aa', 'wcag2aa', 'best-practice', 'section508'],
  },
}

describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/')
      .get('main')
      .injectAxe()
  })
  it('Has no detectable accessibility violations on load', () => {
    cy.checkA11y(A11Y_OPTIONS)
  })
})
