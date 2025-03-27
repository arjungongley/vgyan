declare module 'react-slick' {
  import React from 'react';

  export interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    arrows?: boolean;
    autoplay?: boolean;
    autoplaySpeed?: number;
    pauseOnHover?: boolean;
    responsive?: Array<{
      breakpoint: number;
      settings: Settings;
    }>;
  }

  export interface SliderProps extends Settings {
    className?: string;
    children?: React.ReactNode;
    ref?: React.RefObject<Slider>;
  }

  export default class Slider extends React.Component<SliderProps> {
    slickNext(): void;
    slickPrev(): void;
    slickPlay(): void;
    slickPause(): void;
    slickGoTo(slideNumber: number): void;
  }
}
