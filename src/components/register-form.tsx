'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';

export function RegisterForm({ className, ...props }: React.ComponentProps<'div'>) {
  const router = useRouter();
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Kayıt Ol</CardTitle>
          <CardDescription>To register, you must fill in the boxes below</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="flex flex-row items-center gap-3">
                <div className="grid gap-3">
                  <Label htmlFor="email">İsim</Label>
                  <Input id="firstname" type="email" placeholder="" required autoComplete="off" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email">Soyisim</Label>
                  <Input id="lastname" type="email" placeholder="" required autoComplete="off" />
                </div>
              </div>

              <div className="grid gap-3">
                <Label htmlFor="password">E-posta</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Şifre</Label>
                <Input id="password" type="password" required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full" onClick={() => router.push('/login')}>
                  Kayıt Ol
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
