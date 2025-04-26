'use client';

import ExpandableCardDemo from '@/components/expandable-card-demo-grid';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

function Foods() {
  return (
    <div className="flex flex-col items-center gap-4">
      <ExpandableCardDemo />
    </div>
  );
}

export default Foods;
