import { useTranslation } from 'react-i18next';
import img from '../../media/AboutUsPage/Pashupatinath_temple,kathmandu,Nepal.jpg';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { CommonFirstSection } from './CommonFirstSection';
export const Introduction = () => {
    const { t } = useTranslation();
    const isMobile = useMediaQuery('(max-width:800px)');  
    return (
      <CommonFirstSection
        img={img}
        topic={t('introduction')}
        visibleDesc={t('intro')}
        HiddenDiv={HiddenDiv}
      />
    );
  };
const HiddenDiv = () => {
  return (
    <>
      This is hidden introduction
    </>
  );
};


