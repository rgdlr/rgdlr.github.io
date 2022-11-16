"use strict";

import { Canvas } from "../../src/js/index.js";

const canvasPanel = window.document.querySelector(".canvas-panel");
const canvas = new Canvas(canvasPanel, Canvas.CONTEXT._2D);

canvas.drawRectangle({ x: 20, y: 20, width: 100, height: 100, fillColor: "#379", lineWidth: 3 });
canvas.drawRectangle({ x: 10, y: 10, width: 100, height: 100, lineColor: "#C97", lineWidth: 3 });
canvas.drawRectangle({
  x: 180,
  y: 60,
  width: 40,
  height: 40,
  lineColor: "#DC3",
  lineWidth: 5,
  fillColor: "#A3A",
});

canvas.drawArc({
  x: 0,
  y: 0,
  radius: 170,
  startAngle: 0,
  endAngle: 10,
  lineColor: "#FAA",
  lineWidth: 3,
});
canvas.drawArc({
  x: 150,
  y: 80,
  radius: 15,
  startAngle: 0,
  endAngle: 10,
  lineColor: "#AAF",
  lineWidth: 3,
  fillColor: "#FAA",
});

canvas.drawPolygon({
  path: [
    { x: 30, y: 30 },
    { x: 130, y: 70 },
    { x: 130, y: 90 },
    { x: 30, y: 130 },
  ],
  lineColor: "#A57",
});
canvas.drawPolygon({
  path: [
    { x: 200, y: 30 },
    { x: 110, y: 70 },
    { x: 110, y: 90 },
    { x: 200, y: 130 },
    { x: 50, y: 80 },
    { x: 200, y: 30 },
  ],
  lineColor: "#75A",
  fillColor: "#A57",
});

const canvasPaint = window.document.querySelector(".canvas-paint");
const paintBrushColor = window.document.querySelector(".paint-brush-color");
const paintBrushSize = window.document.querySelector(".paint-brush-size");
const canvasWithPaint = new Canvas(canvasPaint, Canvas.CONTEXT._2D);

canvasWithPaint.allowPainting({ paintBrushColor, paintBrushSize });
