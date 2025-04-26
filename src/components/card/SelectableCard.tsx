'use client';

import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type CardProps = {
  id: string;
  imageSrc: string;
  title: string;
  selected: boolean;
  onSelect: (id: string) => void;
};

export const SelectableCard: React.FC<CardProps> = ({ id, imageSrc, title, selected, onSelect }) => {
  return (
    <Card
      onClick={() => onSelect(id)}
      className={cn('flex flex-row items-center gap-4 p-2 cursor-pointer border-2 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800', selected && 'border-green-500')}
    >
      <Image src={imageSrc} alt={title} width={96} height={96} className="h-20 w-20 rounded-lg object-cover" />
      <div className="text-sm font-medium">{title}</div>
    </Card>
  );
};
