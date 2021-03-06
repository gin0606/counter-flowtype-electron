/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */
// https://github.com/facebook/flux/blob/00f47abc4dd987684d65f423c2f33bfd9b7837bd/examples/flux-flow/flow/flux.js

type DispatchToken = string;

declare module 'flux' {
  declare class Dispatcher<TPayload> {
    register(callback: (payload: TPayload) => void): DispatchToken;
    unregister(id: DispatchToken): void;
    waitFor(ids: Array<DispatchToken>): void;
    dispatch(payload: TPayload): void;
    isDispatching(): boolean;
  }
}
