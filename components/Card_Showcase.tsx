import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from './ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import { technologies } from './const';

const ShowcasePage = () => {
  return (
    <div className='flex flex-col justify-center'>
      <Carousel
        plugins={[
          AutoScroll({
            speed: 1.5,
            stopOnInteraction: false,
          })
        ]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className='w-[12.5rem] md:w-[25rem] lg:w-[37.5rem] xl:w-[50rem]'
      >
        <CarouselContent>
          {technologies.map((tech, index) => (
            <CarouselItem key={index} className='md:basis-1/3 lg:basis-1/4 xl:basis-1/5'>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex flex-col aspect-square items-center justify-center p-6'>
                    <Image src={tech.image} alt={tech.name} className='w-16 h-16' loading='lazy' />
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