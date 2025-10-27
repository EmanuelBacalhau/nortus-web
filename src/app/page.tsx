import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <Image src="/nortus.png" alt="Logo Nortus" width={174} height={54} />
    </div>
  );
}
