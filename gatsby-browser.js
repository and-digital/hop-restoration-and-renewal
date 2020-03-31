import MainWrapper from './src/components/MainWrapper'

export const wrapRootElement = MainWrapper

export const onRouteUpdate = () => {
  if (process.env.NODE_ENV === `production`) {
    // wrap inside a timeout to ensure the title has properly been changed
    setTimeout(() => {
      const data = window.dataLayer
      data.push({event: `gatsby-route-change`})
    }, 50)
  }
}
