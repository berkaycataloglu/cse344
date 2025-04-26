import { Fragment, useState } from 'react';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-item.${a.length - i}`);

interface SelectListProps {
  title: string;
}

function SelectList({ title }: SelectListProps) {
  const [search, setSearch] = useState('');

  return (
    <ScrollArea className="h-64 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">{title}</h4>
        <Input placeholder="Arama yap" className="mb-2 font-light h-8" value={search} onChange={(e) => setSearch(e.target.value)} />
        {tags
          .filter((item) => item.includes(search))
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
  );
}

export default SelectList;
