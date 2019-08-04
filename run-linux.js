var shell = new ActiveXObject("WScript.Shell");
var args = WScript.Arguments;
var cmd = [];
var i;

for (i = 0; i < args.length; i++) {
  cmd.push(args(i))
}
shell.Run("bash -lc '" + cmd.join(' ') + "'", 0, true);
// bash -lc 'xxxx'をウィンドウなし(0)で、同期的(true)に実行します
