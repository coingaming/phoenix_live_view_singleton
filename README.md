# phoenix_live_view_singleton

The Phoenix LiveView JavaScript singleton client. Useful for adding hooks after init.

## Installation

```shell
npm i phoenix_live_view_singleton
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
