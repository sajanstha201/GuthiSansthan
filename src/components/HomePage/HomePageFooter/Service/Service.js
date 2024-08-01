import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ServiceInstance } from './ServiceInstance';
import {AddServiceForm} from './AddServiceForm'
import { ServiceAddition } from './ServiceAddition';
import { useEditing } from '../../../../context/EditingProvider';
export const Service = () => {
    const [serviceData, setServiceData] = useState([]);
    const {isEditing,setIsEditing}=useEditing()
    useEffect(() => {
        fetchService();
    }, []);

    const fetchService = async () => {
        try {
            const response = await axios.get('https://guthi.pythonanywhere.com/api/services/');
            if (response.status !== 200) {
                throw new Error("Something went wrong");
            }
            setServiceData(response.data);
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className="w-full h-full pb-3 flex flex-col relative">
            <h1 className="text-white z-10 text-[60px]">Service</h1>
            <div className="flex w-full h-full items-center justify-center overflow-auto">
                <div className="w-[95%] flex h-full flex-wrap items-start justify-start gap-7 overflow-auto">
                    {serviceData && serviceData.map((service) => (
                        <ServiceInstance
                            key={service.id}
                            img={service.image}
                            name={service.name}
                            detail={service.description}
                        />
                    ))}
                    {isEditing&&<ServiceAddition/>}
                </div>
            </div>
        </div>
    );
};
