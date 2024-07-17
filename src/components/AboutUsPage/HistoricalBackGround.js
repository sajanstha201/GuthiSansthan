import { useTranslation } from 'react-i18next'
import img from '../../media/AboutUsPage/Patan-Durbar-square-scaled-e1644243944542.jpg'
import { CommonFirstSection } from './CommonFirstSection'
import { useMediaQuery } from '@mui/material'
export const HistoricalBackGround=()=>{
    const { t } = useTranslation();
    const isMobile = useMediaQuery('(max-width:800px)');  
    return (
      <CommonFirstSection
        img={img}
        topic={t('historical-background')}
        visibleDesc={t('intro')}
        HiddenDiv={HiddenDiv}
      />
    );
  };
const HiddenDiv = () => {
  return (
    <>
      This is hidden HistoricalBackGround
    </>
  );
};