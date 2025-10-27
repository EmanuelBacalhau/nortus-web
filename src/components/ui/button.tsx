'use client';

type ButtonProps =
	| (React.ComponentProps<'button'> & {
			size: 'icon';
			icon: React.ReactElement;
			isActive?: boolean;
	  })
	| (React.ComponentProps<'button'> & {
			size?: 'default';
			icon?: never;
	  });

type Button = ButtonProps & {
	isActive?: boolean;
	icon?: React.ReactElement;
	className?: string;
};

export function Button({
	size = 'default',
	isActive = false,
	icon,
	className,
	...props
}: Button) {
	if (size === 'icon') {
		return (
			<button
				{...props}
				className={`cursor-pointer h-14 w-14 rounded-xl flex items-center justify-center ${isActive ? 'bg-primary' : 'bg-gray-600/50'} hover:bg-primary transition-colors ${className ?? ''}`}
			>
				{icon}
			</button>
		);
	}

	return (
		<button
			{...props}
			className={`cursor-pointer px-5 py-2 rounded-lg bg-primary hover:bg-primary/80 transition-colors w-full ${className ?? ''}`}
		/>
	);
}
