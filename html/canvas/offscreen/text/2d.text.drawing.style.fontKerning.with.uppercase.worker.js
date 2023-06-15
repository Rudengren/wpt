// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.drawing.style.fontKerning.with.uppercase
// Description:Testing basic functionalities of fontKerning for canvas
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Testing basic functionalities of fontKerning for canvas");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  _assertSame(ctx.fontKerning, "auto", "ctx.fontKerning", "\"auto\"");
  ctx.fontKerning = "Normal";
  _assertSame(ctx.fontKerning, "normal", "ctx.fontKerning", "\"normal\"");
  ctx.fontKerning = "auto";
  ctx.fontKerning = "normal";
  _assertSame(ctx.fontKerning, "normal", "ctx.fontKerning", "\"normal\"");
  ctx.fontKerning = "auto";
  ctx.fontKerning = "noRmal";
  _assertSame(ctx.fontKerning, "normal", "ctx.fontKerning", "\"normal\"");
  ctx.fontKerning = "auto";
  ctx.fontKerning = "NoRMal";
  _assertSame(ctx.fontKerning, "normal", "ctx.fontKerning", "\"normal\"");
  ctx.fontKerning = "auto";
  ctx.fontKerning = "NORMAL";
  _assertSame(ctx.fontKerning, "normal", "ctx.fontKerning", "\"normal\"");

  ctx.fontKerning = "None";
  _assertSame(ctx.fontKerning, "none", "ctx.fontKerning", "\"none\"");
  ctx.fontKerning = "auto";
  ctx.fontKerning = "none";
  _assertSame(ctx.fontKerning, "none", "ctx.fontKerning", "\"none\"");
  ctx.fontKerning = "auto";
  ctx.fontKerning = "nOne";
  _assertSame(ctx.fontKerning, "none", "ctx.fontKerning", "\"none\"");
  ctx.fontKerning = "auto";
  ctx.fontKerning = "nonE";
  _assertSame(ctx.fontKerning, "none", "ctx.fontKerning", "\"none\"");
  ctx.fontKerning = "auto";
  ctx.fontKerning = "NONE";
  _assertSame(ctx.fontKerning, "none", "ctx.fontKerning", "\"none\"");
  t.done();
});
done();