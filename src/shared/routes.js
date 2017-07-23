// @flow

// A route helper function:
// helloEndpointRoute()      -> '/ajax/hello/:num' (for Express)
// helloEndpointRoute(1234)  -> '/ajax/hello/1234' (for the actual call)
// eslint-disable-next-line import/prefer-default-export
export const helloEndpointRoute =
  (num: ?number) => `/ajax/hello/${num || ':num'}`;
