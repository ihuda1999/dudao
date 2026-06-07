import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// React 渲染前先移除骨架屏
const rootEl = document.getElementById('root')!;
const skeleton = rootEl.querySelector('.app-skeleton');

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// 渲染完成后移除骨架屏
if (skeleton) {
  requestAnimationFrame(() => skeleton.remove());
}
