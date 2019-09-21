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

## Usage

Add hook dynamically
```javascript
// file foo.js

import liveSocket from "phoenix_live_view_singleton"

liveView.hooks.SomeHook = {
  ..
}
```

Add more hooks
```javascript
// file bar.js

import liveSocket from "phoenix_live_view_singleton"

liveView.hooks.OtherHook = {
  ..
}
```

Connect in third file
```javascript
// file buz.js

import liveSocket from "phoenix_live_view_singleton"

liveSocket.connect()

console.log(liveSocket.hooks)
// {
//   SomeHook: {..},
//   OtherHook: {..}
// }
```
