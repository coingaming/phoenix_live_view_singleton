import {Socket} from "phoenix";
import LiveSocket from "phoenix_live_view";

function createLiveSocket() {
  const csrfToken = document.querySelector("meta[name='csrf-token']");
  const options = csrfToken ? {params: {_csrf_token: csrfToken.getAttribute("content")}} : {};
  return new LiveSocket("/live", Socket, options);
}

window.phoenixLiveView = window.phoenixLiveView || createLiveSocket();

export default window.phoenixLiveView;
