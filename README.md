# PhoenixLiveViewSingleton

The Phoenix LiveView JavaScript singleton client. Useful for adding hooks dynamically.

## Installation

The package can be installed by adding `phoenix_live_view_singleton` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  [
    {:phoenix_live_view_singleton, "~> 0.3.0"}
  ]
end
```

Add `phoenix_live_view_singleton` to your list of dependencies in `assets/package.json`:
```json
{
  "dependencies": {
    "phoenix_live_view_singleton": "file:../deps/phoenix_live_view_singleton/assets"
  }
}
```

## Usage

Add some hook
```javascript
// file foo.js

import liveSocket from "phoenix_live_view_singleton"

liveView.hooks.SomeHook = {
  ..
}
```

Add more hooks in other file
```javascript
// file bar.js

import liveSocket from "phoenix_live_view_singleton"

liveView.hooks.OtherHook = {
  ..
}

liveView.hooks.AndMore = {
  ..
}
```

Connect somewhere
```javascript
// file buz.js

import liveSocket from "phoenix_live_view_singleton"

liveSocket.connect()

console.log(liveSocket.hooks)
// {
//   SomeHook: {..},
//   OtherHook: {..},
//   AndMore: {..}
// }
```
