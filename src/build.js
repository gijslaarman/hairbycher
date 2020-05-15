const nunjucks = require('nunjucks')
const nunjuckStatic = require('./helpers/nunjuckStatic')
const cpx = require('cpx')
const path = require('path')
const pages = require('./pages/config.json')
const showdown = require('showdown')
const converter = new showdown.Converter()
const fs = require('fs')

nunjucks.configure(['src/pages', 'src/components'])
const distFolder = path.resolve(`${__dirname}/../dist`)

nunjuckStatic.config({
  staticDirectory: distFolder
})

cpx.copy(path.resolve(`${__dirname}/assets/copy/**`), distFolder)

async function generatePages() {
  pages.forEach(page => {
    if (page.tabs) {
      page.tabs.map(tab => {
        const markdownFile = fs.readFileSync(tab.markdown, 'utf8')
        tab.html = converter.makeHtml(markdownFile)
        return tab
      })
    }

    if (page.socials) {
      const socials = require(page.socials)
      page.socialIcons = socials
    }

    if (page.prices) {
      const prices = require(page.prices)
      page.prices = prices
    }

    nunjuckStatic.generate(page.template, page, page.route)
  })
}

return generatePages();

