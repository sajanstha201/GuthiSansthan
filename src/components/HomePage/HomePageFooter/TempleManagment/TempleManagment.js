import React, { useEffect } from 'react';

import img from '../../../../media/TempleInformation/Pashupathi/images.png';

import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setTempleWholeDetail } from '../../../../state/HomePageSlices/TempleSlice';
import { showAlert } from '../../../AlertLoader';
import { useEditing } from '../../../../context/EditingProvider';
import { AddTempleManagment } from './AddTempleManagment';
import InstanceTempleManagement from './InstantTempleManagment';

const TempleManagement = () => {
  const baseUrl = useSelector((state) => state.baseUrl).backend;
  const templeDetail = useSelector((state) => state.templeDetail);
  const dispatch = useDispatch();
  const { isEditing } = useEditing();

  const fetchTemple = async () => {
  };

  return (
    <div className="w-full h-full pb-3 flex flex-col relative">
      <h1 className="text-white z-40 text-[60px]">Guthi Management Community</h1>
      <div className="flex w-full h-full items-center justify-center overflow-auto">
        <div className="w-[95%] flex h-full flex-wrap items-center justify-center gap-7">
          {templeDetail.details.map((temple) => (
            <InstanceTempleManagement
              key={temple.id}
              guthiName={temple.name}
              members={temple.members}
              geoLocation={temple.location}
              bankAccount={temple.bank_account}
              land={temple.land}
              ornaments={temple.ornaments}
              cash={temple.cash}
              buildings={temple.buildings}
              img={temple.image}
            />
          ))}
          {isEditing && <AddTempleManagment fetchTemple={fetchTemple} />}
        </div>
      </div>
    </div>
  );
};

export default TempleManagement;
