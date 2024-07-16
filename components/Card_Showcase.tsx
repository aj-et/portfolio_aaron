import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { technologies } from './const';

const ShowcasePage = () => {
  return (
    <div className='flex flex-col justify-center'>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          })
        ]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className='w-[200px] md:w-[400px] lg:w-[600px] xl:w-[800px]'
      >
        <CarouselContent>
          {technologies.map((tech, index) => (
            <CarouselItem key={index} className='md:basis-1/3 lg:basis-1/4 xl:basis-1/5'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex flex-col aspect-square items-center justify-center p-6'>
                    <Image src={tech.image} alt={tech.name} className='w-16 h-16' />
                    <span className=''>{tech.name}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ShowcasePage;