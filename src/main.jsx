import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <main style={{ fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', padding: '24px' }}>
      <h1 style={{ marginBottom: 8 }}>Vitaly Smart Ring</h1>
      <p style={{ marginTop: 0, color: '#555' }}>
        Vercel + TWA 패키징 준비용 최소 React 앱입니다. (Q520 BLE 연결 UI는 이어서 통합)
      </p>

      {/* TODO(Q520): 여기 버튼을 BLE 연결 컴포넌트로 교체합니다. */}
      <button
        onClick={() => alert('블루투스 연결 — 다음 단계에서 Q520 BLE 매니저로 교체')}
        style={{
          padding: '12px 16px',
          borderRadius: 12,
          border: '1px solid #ddd',
          background: '#111',
          color: '#fff',
          cursor: 'pointer'
        }}
      >
        블루투스 연결
      </button>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);