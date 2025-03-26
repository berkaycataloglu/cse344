'use client';

import ExpandableCardDemo from '@/components/expandable-card-demo-standard';
import { Button } from '@/components/ui/button';
import Header from '@/layout/MainLayout/Header';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Fragment, useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-siktirgit.${a.length - i}`);

export default function Home() {
  const [food, setFood] = useState('');
  const [calori, setCalori] = useState('');

  return (
    <div className="flex justify-between gap-4">
      <div className="flex flex-col gap-4">
        <ScrollArea className="h-64 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Yemek Maddeleri</h4>
            <Input placeholder="Arama yap" className="mb-2 font-light h-8" value={food} onChange={(e) => setFood(e.target.value)} />
            {tags
              .filter((item) => item.includes(food))
              .map((tag) => (
                <Fragment key={tag}>
                  <div className="flex gap-4 p-1">
                    <Checkbox />
                    <Label htmlFor={tag} className="text-xs">
                      {tag}
                    </Label>
                  </div>
                  <Separator className="my-2" />
                </Fragment>
              ))}
          </div>
        </ScrollArea>
        <ScrollArea className="h-64 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Kalori Aralığı</h4>
            <Input placeholder="Arama yap" className="mb-2 font-light h-8" value={calori} onChange={(e) => setCalori(e.target.value)} />
            {tags
              .filter((item) => item.includes(calori))
              .map((tag) => (
                <Fragment key={tag}>
                  <div className="flex gap-4 p-1">
                    <Checkbox />
                    <Label htmlFor={tag} className="text-xs">
                      {tag}
                    </Label>
                  </div>
                  <Separator className="my-2" />
                </Fragment>
              ))}
          </div>
        </ScrollArea>
      </div>

      <div className="flex-1">
        <ExpandableCardDemo />
      </div>

      <div className="flex flex-col gap-4">
        <ScrollArea className="h-64 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Alerji</h4>
            <Input placeholder="Arama yap" className="mb-2 font-light h-8" value={food} onChange={(e) => setFood(e.target.value)} />
            {tags
              .filter((item) => item.includes(food))
              .map((tag) => (
                <Fragment key={tag}>
                  <div className="flex gap-4 p-1">
                    <Checkbox />
                    <Label htmlFor={tag} className="text-xs">
                      {tag}
                    </Label>
                  </div>
                  <Separator className="my-2" />
                </Fragment>
              ))}
          </div>
        </ScrollArea>
        <ScrollArea className="h-64 w-48 rounded-md border">
          <div className="p-4">
            <h4 className="mb-4 text-sm font-medium leading-none">Tüketim Tercihi</h4>
            <Input placeholder="Arama yap" className="mb-2 font-light h-8" value={calori} onChange={(e) => setCalori(e.target.value)} />
            {tags
              .filter((item) => item.includes(calori))
              .map((tag) => (
                <Fragment key={tag}>
                  <div className="flex gap-4 p-1">
                    <Checkbox />
                    <Label htmlFor={tag} className="text-xs">
                      {tag}
                    </Label>
                  </div>
                  <Separator className="my-2" />
                </Fragment>
              ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
