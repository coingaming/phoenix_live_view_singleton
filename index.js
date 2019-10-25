import {Socket} from "phoenix"
import LiveSocket from "phoenix_live_view"

window.phoenixLiveView = window.phoenixLiveView || new LiveSocket("/live", Socket)

export default window.phoenixLiveView
