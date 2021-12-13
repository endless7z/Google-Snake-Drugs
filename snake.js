window.snake.theme = function () {
  const prototype = CanvasRenderingContext2D.prototype;

  const bar = document.getElementsByClassName('sEOCsb')[0];
  const art = document.getElementsByClassName('h5fEqc')[0];

  const title = document.getElementsByClassName('ox3FEf')[0];
  const modes = document.getElementsByClassName('iLZj5e');

  const Rotator = class {
    constructor() {
      this.arr = new Array(720).fill(0).map((_, i) => i / 2);
      this.index = -1;
    }

    next() {
      return this.arr[this.index += 1] ?? this.arr[this.index = 0];
    }
  }

  // main

  const mainMenu_rot = new Rotator();
  const drawImage_rot = new Rotator();
  const fillRect_rot = new Rotator();

  prototype.drawImage = new Proxy(prototype.drawImage, {
    apply(target, that, args) {
      if (args[0].tagName === 'CANVAS') {
        const filter = `hue-rotate(${drawImage_rot.next()}deg)`;

        for (const mode of modes) mode.style.filter = bar.style.filter = that.filter = filter;

        bar.style.filter += 'brightness(120%)';
      }

      return target.apply(that, args);
    }
  });

  prototype.fillRect = new Proxy(prototype.fillRect, {
    apply(target, that, args) {
      if (that.fillStyle !== '#578a34') that.filter = `hue-rotate(${fillRect_rot.next()}deg)`;
      else that.filter += 'brightness(120%)';

      return target.apply(that, args);
    }
  });

  setInterval(() => {
    const filter = `hue-rotate(${mainMenu_rot.next()}deg)`;
    
    art.style.filter = filter;
  });

  title.innerHTML = title.innerHTML.replace('Snake', 'Snak');
}

window.snake.theme();
