'use client';

import React, { useState } from 'react';

import SelectList from '@/components/filter/SelectList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { SelectableCard } from '@/components/card/SelectableCard';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

const meatData = [
  {
    id: '1',
    title: 'Dana Eti',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg'
  },
  {
    id: '2',
    title: 'Tavuk Eti',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg'
  }
];

const vegetablesData = [
  {
    id: '3',
    title: 'Salata',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg'
  },
  {
    id: '4',
    title: 'Domates',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg'
  },
  {
    id: '5',
    title: 'Biber',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg'
  }
];

const dairyProductsData = [
  {
    id: '6',
    title: 'Peynir',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg'
  },
  {
    id: '7',
    title: 'Süt',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg'
  },
  {
    id: '8',
    title: 'Tereyağ',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg'
  },
  {
    id: '9',
    title: 'Yoğurt',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg'
  }
];

const grainsData = [
  {
    id: '10',
    title: 'Ekmek',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg'
  },
  {
    id: '11',
    title: 'Pirinç',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg'
  },
  {
    id: '12',
    title: 'Makarna',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg'
  },
  {
    id: '13',
    title: 'Arpa',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg'
  },
  {
    id: '14',
    title: 'Bulgur',
    imageSrc:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg'
  }
];

export default function Home() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const router = useRouter();

  const handleSelect = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  return (
    <div className="flex flex-row gap-6 justify-between">
      <div className="flex flex-col gap-4">
        <SelectList title="Diyet Tercihi" />
        <SelectList title="Kalori Aralığı" />
      </div>

      <div className="flex-1">
        <Tabs defaultValue="account">
          <div className="flex gap-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="meat">Et</TabsTrigger>
              <TabsTrigger value="vegetables">Sebze</TabsTrigger>
              <TabsTrigger value="dairyproducts">Süt Ürünleri</TabsTrigger>
              <TabsTrigger value="grains">Tahıllar</TabsTrigger>
            </TabsList>

            <Button className="w-24" onClick={() => router.push('/foods')}>
              <Search /> Ara
            </Button>
          </div>

          <TabsContent value="meat">
            <div className="grid w-full grid-cols-4 gap-4">
              {meatData.map((item) => (
                <SelectableCard key={item.id} id={item.id} title={item.title} imageSrc={item.imageSrc} selected={selectedIds.includes(item.id)} onSelect={handleSelect} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="vegetables">
            <div className="grid w-full grid-cols-4 gap-4">
              {vegetablesData.map((item) => (
                <SelectableCard key={item.id} id={item.id} title={item.title} imageSrc={item.imageSrc} selected={selectedIds.includes(item.id)} onSelect={handleSelect} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="dairyproducts">
            <div className="grid w-full grid-cols-4 gap-4">
              {dairyProductsData.map((item) => (
                <SelectableCard key={item.id} id={item.id} title={item.title} imageSrc={item.imageSrc} selected={selectedIds.includes(item.id)} onSelect={handleSelect} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="grains">
            <div className="grid w-full grid-cols-4 gap-4">
              {grainsData.map((item) => (
                <SelectableCard key={item.id} id={item.id} title={item.title} imageSrc={item.imageSrc} selected={selectedIds.includes(item.id)} onSelect={handleSelect} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="flex flex-col gap-4">
        <SelectList title="Alerji" />
        <SelectList title="Tüketim Tercihi" />
      </div>
    </div>
  );
}
