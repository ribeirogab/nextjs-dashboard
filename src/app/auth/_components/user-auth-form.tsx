'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { type FormHTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SIGN_IN_FORM_SCHEMA = z.object({
  email: z.string().email({ message: 'Invalid email' }),
});

type UserAuthFormData = z.infer<typeof SIGN_IN_FORM_SCHEMA>;

type UserAuthFormProps = FormHTMLAttributes<HTMLFormElement>;

export const UserAuthForm = (props: UserAuthFormProps) => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserAuthFormData>({
    resolver: zodResolver(SIGN_IN_FORM_SCHEMA),
  });

  const onSubmit = (data: UserAuthFormData) => {
    console.log('Form data', data);
    router.push('/');
  };

  return (
    <form {...props} onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        id="email"
        placeholder="Enter your email"
        aria-label="Email"
        required
        {...register('email')}
      />

      <div className="flex h-8 items-center">
        {errors.email && (
          <span className="text-xs text-red-400">{errors.email.message}</span>
        )}
      </div>

      <Button type="submit" className="w-full">
        Continue
      </Button>
    </form>
  );
};
