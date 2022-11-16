"use strict";

import { EVENT } from "./index.js";

export class Canvas {
  static CONTEXT = {
    _2D: "2d",
    _3D: "3d",
  };

  #canvas;
  #context;

  constructor(canvas, context) {
    // TODO : method : resize canvas - adapt and make responsive - use height and width attributes (use from gps)
    this.#canvas = canvas;
    this.#context = this.#canvas.getContext(context);
  }

  #paintingDraw(previousX, previousY, currentX, currentY, paintBrush) {
    this.#context.strokeStyle = paintBrush.color;
    this.#context.lineWidth = paintBrush.size;
    this.#context.moveTo(previousX, previousY);
    this.#context.lineTo(currentX, currentY);
    this.#context.stroke();
  }

  allowPainting({ paintBrushColor, paintBrushSize }) {
    const { left, top } = this.#canvas.getBoundingClientRect();
    const paintBrush = { color: "#000", isPainting: false, isInCanvas: false, size: 1, x: 0, y: 0 };

    this.#canvas.addEventListener(EVENT.MOUSE_DOWN, (event) => {
      const { clientX, clientY } = event;

      paintBrush.x = clientX - left;
      paintBrush.y = clientY - top;
      paintBrush.isPainting = true;
      paintBrush.color = paintBrushColor.value;
      paintBrush.size = paintBrushSize.value;

      this.#context.beginPath();
    });

    this.#canvas.addEventListener(EVENT.MOUSE_MOVE, (event) => {
      if (!(paintBrush.isPainting && paintBrush.isInCanvas)) {
        return;
      }

      const { clientX, clientY } = event;
      const { currentX, currentY } = { currentX: clientX - left, currentY: clientY - top };
      const { x, y } = paintBrush;

      this.#paintingDraw(x, y, currentX, currentY, paintBrush);
      paintBrush.x = currentX;
      paintBrush.y = currentY;
    });

    this.#canvas.addEventListener(EVENT.MOUSE_UP, (_event) => {
      paintBrush.isPainting = false;
      this.#context.closePath();
    });

    this.#canvas.addEventListener(EVENT.MOUSE_LEAVE, (_event) => {
      // TODO : if mouse leaves outside from canvas, when enters, continues painting
      // paintBrush.isPainting = false;
      paintBrush.isInCanvas = false;
      this.#context.closePath();
    });

    this.#canvas.addEventListener(EVENT.MOUSE_ENTER, (_event) => {
      paintBrush.isInCanvas = true;
      this.#context.beginPath();
    });
  }

  drawRectangle({ x, y, width, height, lineColor, lineWidth, fillColor }) {
    if (lineColor) {
      this.#context.strokeStyle = lineColor;
      this.#context.lineWidth = lineWidth;
      this.#context.beginPath();
      this.#context.strokeRect(x, y, width, height);
      this.#context.closePath();
    }
    if (fillColor) {
      this.#context.fillStyle = fillColor;
      this.#context.beginPath();
      this.#context.fillRect(x, y, width, height);
      this.#context.closePath();
    }
  }

  drawArc({
    x,
    y,
    radius,
    startAngle,
    endAngle,
    counterclockwise,
    lineColor,
    lineWidth,
    fillColor,
  }) {
    if (fillColor) {
      this.#context.fillStyle = fillColor;
      this.#context.beginPath();
      this.#context.arc(x, y, radius, startAngle, endAngle, counterclockwise);
      this.#context.closePath();
      this.#context.fill();
    }
    if (lineColor) {
      this.#context.strokeStyle = lineColor;
      this.#context.lineWidth = lineWidth;
      this.#context.beginPath();
      this.#context.arc(x, y, radius, startAngle, endAngle, counterclockwise);
      this.#context.closePath();
      this.#context.stroke();
    }
  }

  drawPolygon({ path, lineColor, lineWidth, fillColor }) {
    if (fillColor) {
      this.#context.fillStyle = fillColor;
      this.#context.beginPath();
      path.forEach(({ x, y }) => {
        this.#context.lineTo(x, y);
      });
      this.#context.closePath();
      this.#context.fill();
    }
    if (lineColor) {
      this.#context.strokeStyle = lineColor;
      this.#context.lineWidth = lineWidth;
      this.#context.beginPath();
      path.forEach(({ x, y }) => {
        this.#context.lineTo(x, y);
      });
      this.#context.closePath();
      this.#context.stroke();
    }
  }
}
