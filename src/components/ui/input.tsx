'use client';

import { EyeClosedIcon, EyeIcon } from 'lucide-react';
import { useState } from 'react';

type InputProps = React.ComponentProps<'input'> & {
	erro?: string;
};

export function Input(props: InputProps) {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	if (props.type === 'password') {
		return (
			<div className="flex flex-col gap-1">
				<div className="flex-1 border border-gray-600 px-5 py-2 rounded-xl flex items-center">
					<input
						{...props}
						type={isVisible ? 'text' : 'password'}
						className="outline-none w-full"
					/>
					<button
						type="button"
						onClick={() => setIsVisible(!isVisible)}
						className="ml-2 text-gray-400 hover:text-gray-500 transition-colors"
					>
						{isVisible ? <EyeIcon size={20} /> : <EyeClosedIcon size={20} />}
					</button>
				</div>

				{props.erro && (
					<div className="flex justify-end">
						<span className="text-xs text-red-500">{props.erro}</span>
					</div>
				)}
			</div>
		);
	}

	return (
		<div className="flex flex-col gap-1">
			<div className="flex-1 border border-gray-600 px-5 py-2 rounded-xl flex items-center">
				<input {...props} className="outline-none w-full" />
			</div>

			{props.erro && (
				<div className="flex justify-end">
					<span className="text-xs text-red-500">{props.erro}</span>
				</div>
			)}
		</div>
	);
}
