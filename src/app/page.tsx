import { ChevronDownIcon, HeadsetIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { SignInForm } from '@/components/auth/sign-in-form';

export default function Home() {
	return (
		<div className="flex-1 p-16 grid grid-cols-1 lg:grid-cols-2 container mx-auto min-h-screen gap-16">
			{/* Left */}
			<div className="space-y-16">
				<Image
					src="/nortus.svg"
					width={172}
					height={54}
					alt="Logo Nortus"
					className="w-[174px] h-[54px]"
				/>

				<SignInForm />
			</div>

			{/* Right */}
			<div className="relative w-full rounded-[50px] overflow-hidden hidden lg:flex">
				<Image
					src={'/stacked-card.svg'}
					alt="Stacke Card"
					fill
					className="object-cover"
				/>

				<div className="absolute top-8 right-8 gap-4 flex">
					<Link
						href={'#'}
						className="flex items-center gap-2 bg-background hover:bg-background/90 px-8 py-4 rounded-full"
					>
						<HeadsetIcon size={20} />
						Ajuda
					</Link>

					<button
						type="button"
						className="flex items-center gap-2 bg-background px-8 py-4 rounded-full hover:bg-background/90 transition-colors"
					>
						<ChevronDownIcon size={12} />
						Português (BR)
					</button>
				</div>
			</div>
		</div>
	);
}
