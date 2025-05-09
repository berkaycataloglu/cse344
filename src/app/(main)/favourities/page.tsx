'use client';
import ExpandableCardDemo from '@/components/expandable-card-demo-grid';
import React from 'react';

function Favourities() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="font-bold">Favori Yemeklerim</h1>
      <ExpandableCardDemo favorite />
    </div>
  );
}

export default Favourities;
