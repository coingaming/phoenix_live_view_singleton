import {Socket} from "phoenix"
import LiveSocket from "phoenix_live_view"

export default new LiveSocket("/live", Socket)
