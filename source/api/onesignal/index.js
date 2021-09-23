import DeviceInfo from 'react-native-device-info';

export const getBrand = () => {
    return DeviceInfo.getBrand();
};