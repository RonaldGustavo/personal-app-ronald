import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Ronald Gustavo – Frontend Engineer';

const stack = ['React', 'React Native', 'Vue', 'Flutter', 'Next.js', 'TypeScript'];

export function renderOgCard() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          backgroundColor: '#0b0c10',
          backgroundImage:
            'radial-gradient(circle at 15% 0%, rgba(187,134,252,0.35), transparent 45%), radial-gradient(circle at 90% 100%, rgba(255,64,129,0.30), transparent 45%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            letterSpacing: 6,
            textTransform: 'uppercase',
            color: '#bb86fc',
          }}
        >
          Portfolio
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 20,
            fontSize: 104,
            fontWeight: 700,
            lineHeight: 1.05,
            backgroundImage: 'linear-gradient(135deg, #bb86fc, #ff4081)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Ronald Gustavo
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 16,
            fontSize: 42,
            fontWeight: 600,
            color: '#f5f5f7',
          }}
        >
          Frontend Engineer
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 18,
            maxWidth: 1000,
            fontSize: 28,
            lineHeight: 1.4,
            color: '#a1a1aa',
          }}
        >
          Building elegant, high-performance apps for Android, iOS, and the web.
        </div>

        <div style={{ display: 'flex', gap: 14, marginTop: 44, flexWrap: 'wrap' }}>
          {stack.map((item) => (
            <div
              key={item}
              style={{
                display: 'flex',
                padding: '10px 22px',
                borderRadius: 999,
                border: '1px solid rgba(187,134,252,0.45)',
                backgroundColor: 'rgba(187,134,252,0.10)',
                fontSize: 24,
                color: '#e4e4e7',
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            marginTop: 52,
            fontSize: 26,
            color: '#71717a',
          }}
        >
          ronaldgustavo.my.id
        </div>
      </div>
    ),
    size
  );
}
