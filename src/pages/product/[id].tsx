import { useRouter } from 'next/router';

export default function Product() {
  const { query } = useRouter();

  return (
    <div>
      <h1>Product: {query.id}</h1>
    </div>
  );
}
