import {setRootPath, setPassiveTouchGestures} from '@polymer/polymer/lib/utils/settings';
import {MyApp} from './shell/shell.component';
import {MyView1} from './view1/view1.component';
import {MyView2} from './view2/view2.component';
import {MyView3} from './view3/view3.component';

declare var window: any;

setRootPath(window.Polymer.rootPath);
setPassiveTouchGestures(true);

const elements = [
  MyApp,
  MyView1,
  MyView2,
  MyView3,
  // Add your STATIC elements here
];

for (const el of elements) {
  customElements.define(el.is, el);
}
