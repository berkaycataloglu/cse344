import ExpandableCardDemo from '@/components/expandable-card-demo-standard';
import { Button } from '@/components/ui/button';
import Header from '@/layout/MainLayout/Header';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Fragment } from 'react';
import { Input } from '@/components/ui/input';

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export default function Home() {
  return (
    <>
      <Header />

      <div className="flex gap-4">
        <div className="flex flex-col gap-4 p-2">
          <ScrollArea className="h-72 w-48 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {tags.map((tag) => (
                <Fragment key={tag}>
                  <div className="text-sm">{tag}</div>
                  <Separator className="my-2" />
                </Fragment>
              ))}
            </div>
          </ScrollArea>
          <ScrollArea className="h-36 w-48 rounded-md border">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {tags.map((tag) => (
                <Fragment key={tag}>
                  <div className="text-sm">{tag}</div>
                  <Separator className="my-2" />
                </Fragment>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="flex flex-col gap-4 p-2">
          <Input type="text" />
          <ExpandableCardDemo />
        </div>
      </div>
    </>
  );
}
