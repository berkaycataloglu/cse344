'use client';

import React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const frameworks = [
  {
    value: '0-17',
    label: '0-17'
  },
  {
    value: '18-24',
    label: '18-24'
  },
  {
    value: '25-34',
    label: '25-34'
  },
  {
    value: '35-44',
    label: '35-44'
  },
  {
    value: '44-54',
    label: '44-54'
  },
  {
    value: '55+',
    label: '55+'
  }
];

function Profile() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <div className="flex flex-col gap-4 min-h-svh w-full items-center justify-center p-6 md:p-10 border-2">
      <Label>Profil Kartı</Label>
      <div className="w-2/6 max-w-full border-2 rounded-md p-4 flex flex-col gap-4 items-center">
        <div className="flex flex-row ">
          <div className="flex p-2 gap-2 flex-col">
            <Label>İsim</Label>
            <Input></Input>
          </div>
          <div className="flex p-2 gap-2 flex-col">
            <Label>Soyisim</Label>
            <Input></Input>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex flex-col gap-2 p-2">
            <Label>Age</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open} className="w-48 justify-between">
                  {value ? frameworks.find((framework) => framework.value === value)?.label : 'Select age...'}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-0">
                <Command>
                  <CommandInput placeholder="Search age scala..." />
                  <CommandList>
                    <CommandEmpty>No framework found.</CommandEmpty>
                    <CommandGroup>
                      {frameworks.map((framework) => (
                        <CommandItem
                          key={framework.value}
                          value={framework.value}
                          onSelect={(currentValue) => {
                            setValue(currentValue === value ? '' : currentValue);
                            setOpen(false);
                          }}
                        >
                          <Check className={cn('mr-2 h-4 w-4', value === framework.value ? 'opacity-100' : 'opacity-0')} />
                          {framework.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex flex-col gap-2 p-2">
            <Label>Height</Label>
            <Input></Input>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="flex flex-col gap-2 p-2">
            <Label>Weight</Label>
            <Input></Input>
          </div>
          <div className="flex flex-col gap-3 border p-2 rounded-md w-48 h-24">
            <Label>Cinsiyet</Label>
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Erkek</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Kadın</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <Button className="w-3/6 mt-3">Güncelle</Button>
      </div>
    </div>
  );
}

export default Profile;
