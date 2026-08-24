'use client';

import { useEffect, useRef } from 'react';

/* Fullscreen canvas rendering the Matrix rain, only active when
   [data-theme="matrix"] is on. A MutationObserver on <html> starts/stops
   the RAF loop; the loop also pauses when the tab is hidden, and skips
   entirely when the user prefers reduced motion. Katakana glyphs are the
   Unicode Katakana block (U+30A0–U+30FF), which every modern OS renders
   without needing us to ship a font. */

const KATAKANA_START = 0x30a0;
const KATAKANA_END = 0x30ff;
const KATAKANA_COUNT = KATAKANA_END - KATAKANA_START + 1;
const FONT_SIZE = 16;
const GLYPH_FILL = 'rgba(0, 255, 65, 0.55)';
const TRAIL_FADE = 'rgba(0, 0, 0, 0.06)';

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const ctxMaybe = canvasEl.getContext('2d');
    if (!ctxMaybe) return;
    /* Locals typed non-null so nested closures don't re-widen through the ref. */
    const canvas: HTMLCanvasElement = canvasEl;
    const ctx: CanvasRenderingContext2D = ctxMaybe;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let running = false;
    let rafId = 0;
    let tick = 0;
    let columns: number[] = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const count = Math.floor(canvas.width / FONT_SIZE);
      columns = Array.from({ length: count }, () => Math.random() * -canvas.height);
      ctx.font = `${FONT_SIZE}px monospace`;
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function draw() {
      if (!running) return;
      rafId = requestAnimationFrame(draw);
      /* Skip every other RAF frame so the rain runs at ~half display refresh
         (≈30fps on a 60Hz display). Keeps glyph spacing and trail decay
         locked to the same tempo — just halves the wall-clock speed. */
      if ((tick++ & 1) !== 0) return;

      ctx.fillStyle = TRAIL_FADE;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = GLYPH_FILL;
      for (let i = 0; i < columns.length; i++) {
        const glyph = String.fromCharCode(
          KATAKANA_START + Math.floor(Math.random() * KATAKANA_COUNT),
        );
        ctx.fillText(glyph, i * FONT_SIZE, columns[i]);
        columns[i] =
          columns[i] > canvas.height + Math.random() * 200
            ? 0
            : columns[i] + FONT_SIZE;
      }
    }

    function start() {
      if (running || reducedMotion) return;
      if (document.visibilityState !== 'visible') return;
      resize();
      running = true;
      rafId = requestAnimationFrame(draw);
    }

    function stop() {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = 0;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function syncToTheme() {
      if (document.documentElement.dataset.theme === 'matrix') start();
      else stop();
    }

    function onVisibilityChange() {
      if (document.visibilityState !== 'visible') stop();
      else syncToTheme();
    }

    syncToTheme();
    const observer = new MutationObserver(syncToTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="matrix-rain"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    />
  );
}
