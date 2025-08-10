import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <main style={{fontFamily:'system-ui, sans-serif', padding:'24px'}}>
      <h1>Vitaly Smart Ring</h1>
      <p>Vercel + TWA 배포 준비용 최소 앱입니다.</p>
      <button
        onClick={() => alert('연결 버튼 — 추후 Q520 BLE 연결 UI로 교체')}
        style={{padding:'12px 16px', borderRadius:12, border:'1px solid #ddd'}}
      >
        블루투스 연결
      </button>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
