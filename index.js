const assemble = require('assemble')

const app = assemble()

module.exports = function ViteHandlebars ({ layouts, partials, define }) {
  return {
    name: 'vite:assemble',
    transformIndexHtml: {
      enforce: 'pre',
      transform (content) {
        return new Promise(resolve => {
          app.layouts(layouts)
          app.partials(partials)
          app.page('page.hbs', { content })

          app.render('page.hbs', define || {}, (err, view) => {
            if (err) {
              throw new Error(err.message)
            }
            resolve(view.content)
          })
        })
      }
    }
  }
}