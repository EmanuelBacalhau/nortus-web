import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { publicServices } from '@/services/public-services';

const formSchema = z.object({
	email: z.email('E-mail inválido'),
	password: z.string().min(1, 'Senha é obrigatória'),
});

type FormData = z.infer<typeof formSchema>;

export function useFormSignInController() {
	const rememberId = useId();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const { mutateAsync, error } = useMutation({
		mutationFn: publicServices.signIn,
	});

	const onSubmit = async (data: FormData) => {
		const response = await mutateAsync();
		console.log(data, response);
	};

	return {
		register,
		errors,
		handleSubmit,
		onSubmit,
		rememberId,
	};
}
