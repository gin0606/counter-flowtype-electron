// @flow
import { Dispatcher } from 'flux';
import Action from 'action/Actions';

const dispatcher: Dispatcher<Action> = new Dispatcher();
const hoge: Dispatcher<string> = dispatcher;
console.log(hoge);

export default dispatcher;
