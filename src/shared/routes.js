// @flow

export const HOME_PAGE_ROUTE = '/';
export const HELLO_PAGE_ROUTE = '/hello';
export const HELLO_ASYNC_PAGE_ROUTE = '/hello-async';
export const ANIMATION_TEST_PAGE_ROUTE = '/animation-test';
export const NOT_FOUND_DEMO_PAGE_ROUTE = '/404';

// Route helper function
// helloEndpointRoute()      -> '/ajax/hello/:num' (for Express)
// helloEndpointRoute(1234)  -> '/ajax/hello/1234' (for the actual call)
export const helloEndpointRoute =
  (num: ?number) => `/ajax/hello/${num || ':num'}`;
