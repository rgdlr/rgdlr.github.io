"use strict";

import { EVENT } from "./index.js";

export class Canvas {
  static CONTEXT = {
    _2D: "2d",
    _3D: "3d",
  };

  #canvas;
  #context;

  constructor(canvas, context, dimensions) {
    // TODO : method : resize canvas - adapt and make responsive - use height and width attributes (use from gps)
    // https://stackoverflow.com/questions/60688935/my-canvas-drawing-app-wont-work-on-mobile
    this.#canvas = canvas;
    this.#context = this.#canvas.getContext(context);

    // const { height, width } = dimensions;
  }

  #paintingDraw(previousX, previousY, currentX, currentY, paintBrush) {
    this.#context.strokeStyle = paintBrush.color;
    this.#context.lineCap = paintBrush.cap;
    this.#context.lineWidth = paintBrush.size;
    this.#context.moveTo(previousX, previousY);
    this.#context.lineTo(currentX, currentY);
    this.#context.stroke();
  }

  #getClientCoordinates(event) {
    if ([EVENT.TOUCH_START, EVENT.TOUCH_MOVE, EVENT.TOUCH_END].includes(event.type)) {
      const { clientX, clientY } = event.touches[0];
      return { clientX, clientY };
    }
    const { clientX, clientY } = event;
    return { clientX, clientY };
  }

  allowPainting({ paintBrushColor, paintBrushSize }) {
    const { left, top } = this.#canvas.getBoundingClientRect();
    const paintBrush = {
      cap: "round",
      color: "#000",
      isPainting: false,
      isInCanvas: false,
      size: 1,
      x: 0,
      y: 0,
    };

    const startPosition = (event) => {
      const { clientX, clientY } = this.#getClientCoordinates(event);

      paintBrush.x = clientX - left;
      paintBrush.y = clientY - top;
      paintBrush.isPainting = true;
      paintBrush.color = paintBrushColor.value;
      paintBrush.size = paintBrushSize.value;

      this.#context.beginPath();
    };

    const draw = (event) => {
      if (!(paintBrush.isPainting && paintBrush.isInCanvas)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      const { clientX, clientY } = this.#getClientCoordinates(event);
      const { currentX, currentY } = { currentX: clientX - left, currentY: clientY - top };
      const { x, y } = paintBrush;

      this.#paintingDraw(x, y, currentX, currentY, paintBrush);
      paintBrush.x = currentX;
      paintBrush.y = currentY;
    };

    const endPosition = (_event) => {
      paintBrush.isPainting = false;
      this.#context.closePath();
    };

    // TODO : listen events only in mobile/table
    this.#canvas.addEventListener(EVENT.TOUCH_START, startPosition);
    this.#canvas.addEventListener(EVENT.TOUCH_END, endPosition);
    this.#canvas.addEventListener(EVENT.TOUCH_MOVE, draw);

    // TODO : listen events only in desktop
    this.#canvas.addEventListener(EVENT.MOUSE_DOWN, startPosition);
    this.#canvas.addEventListener(EVENT.MOUSE_UP, endPosition);
    this.#canvas.addEventListener(EVENT.MOUSE_MOVE, draw);

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
