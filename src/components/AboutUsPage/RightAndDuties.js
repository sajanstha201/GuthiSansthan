import img from '../../media/AboutUsPage/Temple-manakamana.jpg'
import { useMediaQuery } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { displayMoreDescription } from '../DisplayInfo/MoreDescription'
import { CommonFirstSection } from './CommonFirstSection'
export const RightAndDuties=()=>{
    const { t } = useTranslation();
    const isMobile = useMediaQuery('(max-width:800px)');  
    return (
      <CommonFirstSection
        img={img}
        topic={t('right-and-duties')}
        visibleDesc={t('intro')}
        HiddenDiv={HiddenDiv}
      />
    );
  };
const HiddenDiv = () => {
  return (
    <>
      This is hidden RightAndDutiesx
    </>
  );
};