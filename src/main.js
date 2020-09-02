import createElement from "./vdom/createElement.js";
import render from "./vdom/render.js";
import mount from "./vdom/mount.js";
import diff from "./vdom/diff.js";
const createVApp = (count) =>
  createElement("div", {
    attrs: {
      id: "app",
      dataCount: count,
    },
    children: [
      createElement("input"),
      String(count),
      createElement("img", {
        attrs: {
          src: "https://media.giphy.com/media/MchRt3nSLY3LqAmItJ/giphy.gif",
        },
      }),
    ],
  });
let count = 0;
let vApp = createVApp(count);
//渲染成real dom
const $app = render(vApp);
//貼到html上
let $rootEl = mount($app, document.getElementById("app"));

setInterval(() => {
  count++;
  const vNewApp = createVApp(count);
  const patch = diff(vApp, vNewApp);
  $rootEl = patch($rootEl);
  vApp = vNewApp;
}, 1000);
console.log($app);
