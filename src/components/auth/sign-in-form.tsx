'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useFormSignInController } from './controllers/use-form-sign-in-controller';

export function SignInForm() {
	const { register, errors, handleSubmit, onSubmit, rememberId } =
		useFormSignInController();

	return (
		<div className="flex-1">
			<div className="">
				<h1 className="text-2xl font-sans">Login</h1>
				<span className="text-sm text-foreground">
					Entre com suas credenciais para acessar a sua conta.
				</span>
			</div>

			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mt-[68px] space-y-5 mb-10">
					<div>
						<Input
							placeholder="Usuário"
							type="email"
							{...register('email')}
							erro={errors.email?.message}
						/>
						<span className="text-xs text-foreground">
							Insira o seu e-mail, CPF ou passaporte.
						</span>
					</div>

					<Input
						placeholder="Senha"
						type="password"
						{...register('password')}
						erro={errors.password?.message}
					/>

					<div className="flex items-center justify-between">
						<div>
							<input
								type="checkbox"
								id={rememberId}
								className="accent-transparent size-4"
							/>
							<label htmlFor={rememberId} className="ml-2 text-sm">
								Lembrar meu usuário
							</label>
						</div>

						<Link href="#" className="text-sm text-blue-600 hover:underline">
							Esqueci minha senha
						</Link>
					</div>
				</div>

				<Button>Entrar</Button>
			</form>
		</div>
	);
}
