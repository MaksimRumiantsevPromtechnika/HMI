import React, { useRef, useEffect } from 'react';

function CanvasImage({ digits }) {
  const canvasRef = useRef(null);

  // Функция для получения цвета по цифре
  function getColor(digit) {
    switch (digit) {
      case '0': return 'rgb(0, 0, 255)';
      case '1': return 'rgb(255, 0, 0)';
      case '2': return 'rgb(255, 0, 0)';
      case '3': return 'rgb(255, 128, 0)';
      case '4': return 'rgb(255, 255, 0)';
      case '5': return 'rgb(0, 255, 0)';
      case '6': return 'rgb(0, 255, 255)';
      case '7': return 'rgb(0, 100, 255)';
      case '8': return 'rgb(0, 0, 255)';
      case '9': return 'rgb(50, 0, 255)';
      default: return 'rgb(0, 0, 0)';
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const scale = 4; // Масштабирование в 3 раза
    const pixelSize = 1; // Размер одного пикселя

    // Изменен размер канваса для увеличенного изображения
    canvas.width = 320; // 160 пикселей * 3
    canvas.height = 240; // 60 пикселей * 3

    let x = 80;
    let y = 0;

    for (let i = 0; i < digits.length; i++) {
      const color = getColor(digits[i]);
      ctx.fillStyle = color;

      // Рисуем увеличенный пиксель
      ctx.fillRect(x * scale, y * scale, pixelSize * scale, pixelSize * scale);

      x++;
      if (x >= 160) {
        x = 0;
        y++;
      }
    }
  }, [digits]);

  return <canvas ref={canvasRef} width="160" height="60" />;
}

export default CanvasImage;