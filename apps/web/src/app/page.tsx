export default function Home() {
  return (
    <main style={{ fontFamily: 'Inter, system-ui, sans-serif', padding: '3rem 1.5rem' }}>
      <h1>Clawxpose Web Starter</h1>
      <p>
        This Next.js app is the full-stack web surface for Clawxpose. Start by editing
        <code> apps/web/src/app/page.tsx</code>.
      </p>
      <ul>
        <li>Frontend UI and routes live in this app.</li>
        <li>Use the API starter in <code>apps/api</code> for shared backend services.</li>
        <li>Place reusable types/helpers in <code>packages/shared</code>.</li>
      </ul>
    </main>
  );
}
