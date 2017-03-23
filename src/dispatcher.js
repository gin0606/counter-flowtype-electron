// @flow
import { Dispatcher } from 'flux';
import type { Action } from 'action/Actions';

const dispatcher: Dispatcher<Action> = new Dispatcher();

export default dispatcher;
