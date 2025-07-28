import Link from 'next/link';

export default function MenuBar() {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link href="/" style={{ marginRight: '15px' }}>Home</Link>
      <Link href="/adicionar" style={{ marginRight: '15px' }}>Adicionar</Link>
      <Link href="/listar">Listar</Link>
    </nav>
  );
}
