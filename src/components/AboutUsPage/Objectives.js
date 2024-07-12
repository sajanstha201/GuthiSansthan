import img from '../../media/AboutUsPage/Janaki_temple_in_Nepal.jpeg'
import { useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { displayMoreDescription } from '../DisplayInfo/MoreDescription'
import { CommonFirstSection } from './CommonFirstSection'
export const Objectives=()=>{
    const { t } = useTranslation();
    const isMobile = useMediaQuery('(max-width:800px)');  
    return (
      <CommonFirstSection
        img={img}
        topic={t('objectives')}
        visibleDesc={t('intro')}
        HiddenDiv={HiddenDiv}
      />
    );
  };
const HiddenDiv = () => {
  return (
    <>
      This is hidden objectives
    </>
  );
};