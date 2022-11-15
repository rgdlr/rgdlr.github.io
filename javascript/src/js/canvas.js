"use strict";

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
