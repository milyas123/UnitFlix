import { useState, useEffect } from 'react';

const useSwiperNavigation = (swiperRef) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;

    if (!swiper) return;

    const handleReachBeginning = () => setIsBeginning(true);
    const handleReachEnd = () => setIsEnd(true);
    const handleFromEdge = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on('reachBeginning', handleReachBeginning);
    swiper.on('reachEnd', handleReachEnd);
    swiper.on('fromEdge', handleFromEdge);

    return () => {
      swiper.off('reachBeginning', handleReachBeginning);
      swiper.off('reachEnd', handleReachEnd);
      swiper.off('fromEdge', handleFromEdge);
    };
  }, [swiperRef]);

  return { isBeginning, isEnd };
};

export default useSwiperNavigation;
