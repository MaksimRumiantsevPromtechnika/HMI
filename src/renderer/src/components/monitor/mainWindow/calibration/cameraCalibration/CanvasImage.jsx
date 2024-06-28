import React, { useRef, useEffect } from 'react';

function CanvasImage({ digits }) {
  const canvasRef = useRef(null);

  // Функция для получения цвета по цифре
  function getColor(digit) {
    switch (digit) {
      case '0': return 'rgb(255, 0, 0)';
      case '1': return 'rgb(255, 128, 0)';
      case '2': return 'rgb(255, 255, 0)';
      case '3': return 'rgb(0, 255, 0)';
      case '4': return 'rgb(0, 255, 255)';
      case '5': return 'rgb(0, 0, 255)';
      case '6': return 'rgb(0, 0, 192)';
      case '7': return 'rgb(255, 0, 255)';
      default: return 'rgb(105,19,191)';
    }
  }

  function interpolateColor(colors, scale) {
    // Функция выполняет линейную интерполяцию цветов между исходными
    // цветами для выполненного увеличения в scale раз
    const interpolatedColors = [];
    const step = 1 / scale;

    for (let i = 0; i < colors.length - 1; i++) {
      const [r1, g1, b1] = colors[i];
      const [r2, g2, b2] = colors[i + 1];

      for (let s = 0; s < scale; s++) {
        const progress = s * step;
        const r = Math.round(r1 + (r2 - r1) * progress);
        const g = Math.round(g1 + (g2 - g1) * progress);
        const b = Math.round(b1 + (b2 - b1) * progress);
        interpolatedColors.push([r, g, b]);
      }
    }

    return interpolatedColors;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const scale = 4; // Масштабирование в 3 раза
    const pixelSize = 1; // Размер одного пикселя

    // Изменен размер канваса для увеличенного изображения
    canvas.width = 320; // 160 пикселей * 3
    canvas.height = 240; // 60 пикселей * 3

    let x = 0;
    let y = 0;
    if (digits) {
      for (let i = 0; i < digits.length; i++) {
        const color = getColor(digits[i]);
        ctx.fillStyle = color;

        // Рисуем увеличенный пиксель
        ctx.fillRect(x * scale, y * scale, pixelSize * scale, pixelSize * scale);

        x++;
        if (x >= 80) {
          x = 0;
          y++;
        }
      }
    }
  }, [digits]);

  return <canvas ref={canvasRef} width="80" height="60" />;
}

export default CanvasImage;