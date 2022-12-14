const { hostname } = require("os")
const { i18n } = require("./next-i18next.config")

module.exports = {
  i18n,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ]
  },
}
