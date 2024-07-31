import {showAlert} from '../../AlertLoader';

export const LanguageChangeButton = ({ language, setLanguage, nepaliText }) => {
  const handleLanguageChange = (newLanguage) => {
    if (newLanguage !== 'nepali' && nepaliText === '') {
      showAlert('Fill Nepali Text First', 'red');
      return;
    }
    setLanguage(newLanguage);
  };

  return (
    <>
      <div className='flex gap-1 flex-col'>
        <div
          className={`${language === 'nepali' ? 'bg-blue-600' : 'bg-blue-400'} cursor-pointer flex border  rounded-md px-2 py-1`}
          onClick={() => handleLanguageChange('nepali')}
        >
          Nepali
        </div>
        <div
          className={`${language === 'english' ? 'bg-blue-600' : 'bg-blue-400'} cursor-pointer flex border  rounded-md px-2 py-1`}
          onClick={() => handleLanguageChange('english')}
        >
          English
        </div>
        <div
          className={`${language === 'newari' ? 'bg-blue-600' : 'bg-blue-400'} cursor-pointer flex border  rounded-md px-2 py-1`}
          onClick={() => handleLanguageChange('newari')}
        >
          Newari
        </div>
        <div
          className={`${language === 'mithila' ? 'bg-blue-600' : 'bg-blue-400'} cursor-pointer flex border  rounded-md px-2 py-1`}
          onClick={() => handleLanguageChange('mithila')}
        >
          Mithila
        </div>
      </div>
    </>
  );
};
