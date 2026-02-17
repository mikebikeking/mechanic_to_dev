export function BikePathBackground() {
  return (
    <div
      className="fixed inset-0 z-0"
      style={{
        backgroundColor: 'var(--color-bg)',
        backgroundImage: `
          linear-gradient(var(--color-border) 0.5px, transparent 0.5px),
          linear-gradient(90deg, var(--color-border) 0.5px, transparent 0.5px)
        `,
        backgroundSize: '80px 80px',
        opacity: 0.4,
      }}
    />
  );
}
