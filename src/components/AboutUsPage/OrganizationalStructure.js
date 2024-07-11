import img from '../../media/AboutUsPage/shechen-tennyi-dargyeling-golden-temple-in-kathmandu-nepal.jpg'
import { useTranslation } from 'react-i18next'
import { displayMoreDescription } from '../DisplayInfo/MoreDescription'
import { useMediaQuery } from '@mui/material'
import { CommonFirstSection } from './CommonFirstSection'
export const OrganizationalStructure=()=>{
    const { t } = useTranslation();
    const isMobile = useMediaQuery('(max-width:800px)');  
    return (
      <CommonFirstSection
        img={img}
        topic={t('organizational-structure')}
        visibleDesc={t('intro')}
        HiddenDiv={HiddenDiv}
      />
    );
  };
const HiddenDiv = () => {
  return (
    <>
      This is hidden OrganizationalStructure
    </>
  );
};