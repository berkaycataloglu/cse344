'use client';
import React from 'react';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Label } from '@/components/ui/label';
import { CircleCheck } from 'lucide-react';
import { DropdownMenuSeparator } from '@radix-ui/react-dropdown-menu';

import Image from 'next/image';
const chartConfig = {
  desktop: {
    label: 'Hedef Kalori',
    color: '#2563eb'
  },
  mobile: {
    label: 'Mevcut Kalori',
    color: '#60a5fa'
  }
} satisfies ChartConfig;

const chartData = [
  { month: 'Pazartesi', desktop: 186, mobile: 80 },
  { month: 'Salı', desktop: 305, mobile: 200 },
  { month: 'Çarşamba', desktop: 237, mobile: 120 },
  { month: 'Perşembe', desktop: 73, mobile: 190 },
  { month: 'Cuma', desktop: 209, mobile: 290 },
  { month: 'Cumartesi', desktop: 264, mobile: 140 },
  { month: 'Pazar', desktop: 214, mobile: 100 }
];

function Schedule() {
  return (
    <div className="flex flex-row w-full pl-8 pr-8 pt-2 border gap-8">
      <div className="flex flex-col gap-8 items-center">
        <div className="w-256 h-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Monday</TableHead>
                <TableHead>Tuesday</TableHead>
                <TableHead>Wednesday</TableHead>
                <TableHead>Thursday</TableHead>
                <TableHead>Friday</TableHead>
                <TableHead>Saturday</TableHead>
                <TableHead>Sunday</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="">
                  <div className=" flex flex-col gap-1">
                    <Label>Hünkar Beğendi</Label>
                    <Image
                      priority
                      width={80}
                      height={80}
                      src="https://i.lezzet.com.tr/images-xxlarge-recipe/hunkar-begendi-7b121e53-6a5e-4bba-93fe-da417caa64ef.jpg"
                      alt=""
                      className=" h-12 w-12 object-cover object-top rounded-xl"
                    />
                  </div>
                </TableCell>
                <TableCell className="">
                  <div className=" flex flex-col gap-1">
                    <Label>Kayseri Mantısı</Label>
                    <Image
                      priority
                      width={80}
                      height={80}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg"
                      alt=""
                      className=" h-12 w-12 object-cover object-top rounded-xl"
                    />
                  </div>
                </TableCell>
                <TableCell className="">
                  <div className=" flex flex-col gap-1">
                    <Label>Kebap</Label>
                    <Image
                      priority
                      width={80}
                      height={80}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Beyti_in_a_tray_at_Ankara.jpg/1280px-Beyti_in_a_tray_at_Ankara.jpg"
                      alt=""
                      className=" h-12 w-12 object-cover object-top rounded-xl"
                    />
                  </div>
                </TableCell>
                <TableCell className="">
                  <div className=" flex flex-col gap-1">
                    <Label>Kayseri Mantısı</Label>
                    <Image
                      priority
                      width={80}
                      height={80}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg"
                      alt=""
                      className=" h-12 w-12 object-cover object-top rounded-xl"
                    />
                  </div>
                </TableCell>
                <TableCell className="">
                  <div className=" flex flex-col gap-1">
                    <Label>Kebap</Label>
                    <Image
                      priority
                      width={80}
                      height={80}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Beyti_in_a_tray_at_Ankara.jpg/1280px-Beyti_in_a_tray_at_Ankara.jpg"
                      alt=""
                      className=" h-12 w-12 object-cover object-top rounded-xl"
                    />
                  </div>
                </TableCell>
                <TableCell className="">
                  <div className=" flex flex-col gap-1">
                    <Label>Hünkar Beğendi</Label>
                    <Image
                      priority
                      width={80}
                      height={80}
                      src="https://i.lezzet.com.tr/images-xxlarge-recipe/hunkar-begendi-7b121e53-6a5e-4bba-93fe-da417caa64ef.jpg"
                      alt=""
                      className=" h-12 w-12 object-cover object-top rounded-xl"
                    />
                  </div>
                </TableCell>
                <TableCell className="">
                  <div className=" flex flex-col gap-1">
                    <Label>Hünkar Beğendi</Label>
                    <Image
                      priority
                      width={80}
                      height={80}
                      src="https://i.lezzet.com.tr/images-xxlarge-recipe/hunkar-begendi-7b121e53-6a5e-4bba-93fe-da417caa64ef.jpg"
                      alt=""
                      className=" h-12 w-12 object-cover object-top rounded-xl"
                    />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="">
                  <div className=" flex flex-col gap-1">
                    <Label>Hünkar Beğendi</Label>
                    <Image
                      priority
                      width={80}
                      height={80}
                      src="https://i.lezzet.com.tr/images-xxlarge-recipe/hunkar-begendi-7b121e53-6a5e-4bba-93fe-da417caa64ef.jpg"
                      alt=""
                      className=" h-12 w-12 object-cover object-top rounded-xl"
                    />
                  </div>
                </TableCell>
                <TableCell className="">
                  <div className=" flex flex-col gap-1">
                    <Label>Hünkar Beğendi</Label>
                    <Image
                      priority
                      width={80}
                      height={80}
                      src="https://i.lezzet.com.tr/images-xxlarge-recipe/hunkar-begendi-7b121e53-6a5e-4bba-93fe-da417caa64ef.jpg"
                      alt=""
                      className=" h-12 w-12 object-cover object-top rounded-xl"
                    />
                  </div>
                </TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <div className=" flex flex-col gap-1">
                    <Label>Hünkar Beğendi</Label>
                    <Image
                      priority
                      width={80}
                      height={80}
                      src="https://i.lezzet.com.tr/images-xxlarge-recipe/hunkar-begendi-7b121e53-6a5e-4bba-93fe-da417caa64ef.jpg"
                      alt=""
                      className=" h-12 w-12 object-cover object-top rounded-xl"
                    />
                  </div>
                </TableCell>
                <TableCell className="">
                  <div className=" flex flex-col gap-1">
                    <Label>Kebap</Label>
                    <Image
                      priority
                      width={80}
                      height={80}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Beyti_in_a_tray_at_Ankara.jpg/1280px-Beyti_in_a_tray_at_Ankara.jpg"
                      alt=""
                      className=" h-12 w-12 object-cover object-top rounded-xl"
                    />
                  </div>
                </TableCell>
                <TableCell className="">
                  <div className=" flex flex-col gap-1">
                    <Label>Kebap</Label>
                    <Image
                      priority
                      width={80}
                      height={80}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Beyti_in_a_tray_at_Ankara.jpg/1280px-Beyti_in_a_tray_at_Ankara.jpg"
                      alt=""
                      className=" h-12 w-12 object-cover object-top rounded-xl"
                    />
                  </div>
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="">
                  <div className=" flex flex-col gap-1">
                    <Label>Kayseri Mantısı</Label>
                    <Image
                      priority
                      width={80}
                      height={80}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg"
                      alt=""
                      className=" h-12 w-12 object-cover object-top rounded-xl"
                    />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="w-144 h-full">
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => value.slice(0, 3)} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>

      <div className="flex flex-col p-2 gap-4 font-bold">
        <h1 className="font-bold">Summary Of Week</h1>
        <Label>
          <CircleCheck />
          Total calorie intake for the week: 2318 cal
        </Label>
        <DropdownMenuSeparator className="border" />
        <Label>
          <CircleCheck />
          Total carb taken for the week: 1234g carb
        </Label>
        <DropdownMenuSeparator className="border" />
        <Label>
          <CircleCheck />
          Total protein taken for the week: 2323g protein
        </Label>
        <DropdownMenuSeparator className="border mt-4 mb-4" />
        <Label>
          <CircleCheck />
          Average calorie taken by day: 120g
        </Label>
        <DropdownMenuSeparator className="border" />
        <Label>
          <CircleCheck />
          Average carbtaken by day: 220g
        </Label>
        <DropdownMenuSeparator className="border" />
        <Label>
          <CircleCheck />
          Average protein taken by day: 30g
        </Label>
      </div>
    </div>
  );
}

export default Schedule;
