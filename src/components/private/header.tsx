type HeaderProps = {
	title: string;
};

export function Header({ title }: HeaderProps) {
	return (
		<div className="bg-slate-800 absolute top-0 right-0 left-0 -z-10 pl-30 py-4">
			<span className="font-bold">{title}</span>
		</div>
	);
}
