'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
  const router = useRouter();

  const { login } = useAuth();
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Giriş Yap</CardTitle>
          <CardDescription>E-posta ile giriş yap</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">E-posta</Label>
                <Input id="email" type="email" placeholder="ornek@hotmail.com" required autoComplete="off" />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Şifre</Label>
                  <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Şifrenizi mi unuttunuz?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full" onClick={async () => await login('as@hotmail.com', 'asdasd')}>
                  Giriş Yap
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Hesabınız yok mu? Hemen{' '}
              <a href="#" className="underline underline-offset-4" onClick={() => router.push('/register')}>
                Kayıt ol
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
