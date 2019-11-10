import {Socket} from "phoenix"
import LiveSocket from "phoenix_live_view"

window.phoenixLiveView = window.phoenixLiveView || new LiveSocket("/live", Socket, {hooks: {
  Some: {
    mounted: () => {
      console.log("MOUNTED")
    },
    updated: () => {
      console.log("UPDATED")
    },
    destroyed: () => {
      console.log("DESTROYED")
    }
  }
}})

export default window.phoenixLiveView
