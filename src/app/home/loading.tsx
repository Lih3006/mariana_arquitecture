import Image from 'next/image';

export default function Loading() {
  return (
    <div>
      <Image
        src='.././images/loading.png'
        width={500}
        height={500}
        alt='Carregando'
      />
    </div>
  );
}
