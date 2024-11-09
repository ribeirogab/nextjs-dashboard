import { Metadata } from 'next';

import { AuthPage } from './_components/auth-page';

export const metadata: Metadata = {
  title: 'Authentication | Sign In',
  description: 'Sign In page for authentication.',
};

export default function Auth() {
  return <AuthPage />;
}
