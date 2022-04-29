describe('Navigation', () => {
  it('Should navigate to each posts page, check the title, and make sure it does not have the component-error id.', () => {
    // ideally this would use something like `fs` or query some api to get the urls of each post
    const posts = [`dynamic-routing`, `hello-world`, `preview`]
    posts.forEach((post) => {
      // Using `` here cause `` is superior - especially with string concatenations. 
      // But cypress docs always use '' so using that elsewhere.
      cy.visit(`/posts/${post}`)
      cy.get(`h1`).should('not.have.attr', 'id', 'component-error')
    })
  })
})

