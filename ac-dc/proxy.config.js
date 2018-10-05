const PROXY_CONFIG = [      {
  context: [
      "/api",
      "/ohmioapi"
  ],

  target: "http://192.168.4.1",
  changeOrigin: true,
  logLevel: "debug"

}    ]

module.exports = PROXY_CONFIG;
