'use client';
import Image from 'next/image';
import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { Input } from './ui/input';
import { cn } from '@/lib/utils';

interface ExpandableCardDemoProps {
  favorite?: boolean;
}

export default function ExpandableCardDemo({ favorite }: ExpandableCardDemoProps) {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  const [search, setSearch] = useState('');
  const filteredCards = cards.filter((card) => card.title.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === 'object' && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/20 h-full w-full z-10" />}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05
                }
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image priority width={200} height={200} src={active.src} alt={active.title} className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3 layoutId={`title-${active.title}-${id}`} className="font-medium text-neutral-700 dark:text-neutral-200 text-base">
                      {active.title}
                    </motion.h3>
                    <motion.p layoutId={`description-${active.description}-${id}`} className="text-neutral-600 dark:text-neutral-400 text-base">
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a layoutId={`button-${active.title}-${id}`} href={active.ctaLink} target="_blank" className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">
                    {favorite ? 'Favorilerden Çıkart' : 'Favorilere Ekle'}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === 'function' ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <Input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="max-w-3xl" />
      <ul className=" mx-auto w-full grid grid-cols-1 md:grid-cols-5 place-items-center gap-4">
        {filteredCards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col h-64 w-64 justify-center items-center bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl"
          >
            <div className="flex flex-col gap-2 items-center p-2">
              <motion.div layoutId={`image-${card.title}`}>
                <Image width={100} height={100} src={card.src} alt={card.title} className="h-40 w-40 min-w-24 min-h-24 rounded-lg object-cover object-top" />
              </motion.div>
              <div className="flex flex-col">
                <motion.h3 layoutId={`title-${card.title}`} className="font-medium text-neutral-800 dark:text-neutral-200 text-center">
                  {card.title}
                </motion.h3>
              </div>

              <motion.button
                layoutId={`button-${card.title}`}
                className={cn('px-4 py-2 text-sm rounded-full font-medium bg-gray-100 hover:bg-green-500 hover:text-white text-black cursor-pointer', favorite && 'hover:bg-red-500')}
              >
                {favorite ? 'Favorilerden Çıkart' : 'Favorilere Ekle'}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05
        }
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: 'Kayseri Mutfağından Lezzet',
    title: 'Kayseri Mantısı',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg',
    ctaText: 'Favorilere Ekle',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          Kayseri mantısı, Türk mutfağının en meşhur yemeklerinden biridir ve özellikle Kayseri bölgesinde büyük bir ustalıkla hazırlanır. Minik hamur parçalarının içine kıyma konularak kapatılmasıyla
          yapılır. <br /> <br /> Yoğurt ve sarımsakla servis edilir, üzerine kızdırılmış tereyağında biber gezdirilir. Küçüklüğü ve lezzetiyle tanınan Kayseri mantısı, her lokmasında büyük bir emeği
          yansıtır.
        </p>
      );
    }
  },
  {
    description: 'Denizden Sofraya',
    title: 'Balık Buğulama',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg',
    ctaText: 'Favorilere Ekle',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          Balık buğulama, sağlıklı ve hafif bir deniz ürünü yemeğidir. Genellikle levrek ya da çupra gibi beyaz etli balıklarla yapılır. Soğan, domates, limon ve maydanoz gibi malzemelerle birlikte
          pişirilir. <br /> <br /> Buharda ya da kendi suyunda pişirildiği için balığın lezzeti ve besin değeri korunur. Akşam yemekleri için ideal, besleyici bir seçenektir.
        </p>
      );
    }
  },
  {
    description: 'Sokak Lezzetlerinin Kralı',
    title: 'Tantuni',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg',
    ctaText: 'Favorilere Ekle',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          Mersin yöresine ait olan tantuni, ince kıyılmış etin sacda pişirilmesiyle hazırlanır. Lavaş ya da ekmek içinde servis edilir, yanında bolca maydanoz, domates ve soğan bulunur. <br /> <br />
          Baharatlarla lezzetlendirilmiş tantuni, hızlı ve doyurucu bir sokak lezzeti arayanların vazgeçilmezidir.
        </p>
      );
    }
  },
  {
    description: 'Kebapların İncisi',
    title: 'Adana Kebap',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg',
    ctaText: 'Favorilere Ekle',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          Adana kebap, bol baharatlı ve acılı kıymayla hazırlanıp şişe geçirilerek közde pişirilen, Türk mutfağının gözde kebaplarından biridir. Yanında közlenmiş biber ve domatesle servis edilir.{' '}
          <br /> <br /> Genellikle lavaş ve soğan salatasıyla birlikte sunulur. Adana'nın sıcak ruhunu ve zengin kültürünü tabağınıza taşır.
        </p>
      );
    }
  },
  {
    description: 'Tatlıların Sultanı',
    title: 'Baklava',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg',
    ctaText: 'Favorilere Ekle',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          İncecik yufkaların arasına bolca antep fıstığı ve tereyağı eklenerek yapılan baklava, şerbetle tatlandırılan geleneksel bir Türk tatlısıdır. Gaziantep yöresiyle özdeşleşmiştir. <br /> <br />
          Özel günlerde ve bayramlarda sıkça sunulan baklava, Türk misafirperverliğinin tatlı bir simgesidir.
        </p>
      );
    }
  },
  {
    description: 'Serinleten Tat',
    title: 'Ayran',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg',
    ctaText: 'Favorilere Ekle',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          Ayran, yoğurt, su ve tuz karışımından oluşan geleneksel bir Türk içeceğidir. Özellikle kebap ve pide gibi yemeklerin yanında içilir. <br /> <br /> Serinletici etkisiyle yaz aylarının
          vazgeçilmezidir ve sindirimi kolaylaştırıcı özelliğiyle bilinir.
        </p>
      );
    }
  },
  {
    description: 'Karadeniz’in Gururu',
    title: 'Hamsi Tava',
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg/1280px-Kayseride_bir_restoranda_Kayseri_mant%C4%B1s%C4%B1_%28cropped%29.jpg',
    ctaText: 'Favorilere Ekle',
    ctaLink: 'https://ui.aceternity.com/templates',
    content: () => {
      return (
        <p>
          Hamsi tava, Karadeniz mutfağının vazgeçilmezlerinden biridir. Hamsiler mısır ununa bulanarak tavada çıtır çıtır kızartılır. Genellikle yanında mısır ekmeği ve salata ile servis edilir.{' '}
          <br /> <br /> Hamsinin en lezzetli hali kış aylarında sofralarda yerini alır.
        </p>
      );
    }
  }
];
