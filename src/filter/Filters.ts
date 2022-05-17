import {AdExpanded, Filters} from "../interfaces/Interfaces";

export function advancedFilter(list: AdExpanded[], filters: Filters){
    const newList = list.filter((ad) => {
        if(filters.title && !(ad.title.includes(filters.title))){
            return false
        }
        if(filters.manufacturerId && !(filters.manufacturerId !== ad.manufacturerId)){
            return false;
        }
        if(filters.models && !(filters.models.includes(ad.model.name))){
            return false;
        }
        if(filters.priceFrom && filters.priceFrom > ad.price){
            return false;
        }
        if(filters.priceTo && ad.price > filters.priceTo){
            return false;
        }
        if(filters.mileageFrom && ad.mileage < filters.mileageFrom){
            return false;
        }
        if(filters.mileageTo && ad.mileage > filters.mileageTo){
            return false;
        }
        if(filters.volumeFrom && ad.volume < filters.volumeFrom){
            return false;
        }
        if(filters.volumeTo && ad.volume > filters.volumeTo){
            return false;
        }
        if(filters.horsepowerFrom && ad.horsepower < filters.horsepowerFrom){
            return false;
        }
        if(filters.horsepowerTo && ad.horsepower > filters.horsepowerTo){
            return false;
        }
        if(filters.carTypes && !(filters.carTypes.includes(ad.car_type.type))){
            return false;
        }
        if(filters.fuelTypes && !(filters.fuelTypes.includes(ad.fuel_type.type))){
            return false;
        }
        if(filters.driveTypes && !(filters.driveTypes.includes(ad.drive_type.type))){
            return false;
        }
        if(filters.transmissions && !(filters.transmissions.includes(ad.transmission))){
            return false;
        }
        if(filters.emissionStandards && !(filters.emissionStandards.includes(ad.emissionStandard))){
            return false;
        }
        if(filters.colors && !(filters.colors.includes(ad.color))){
            return false;
        }
        if(filters.parkingCameras && !(filters.parkingCameras.includes(ad.parkingCamera))){
            return false;
        }
        if(filters.rimSizeFrom && ad.rimSize < filters.rimSizeFrom){
            return false;
        }
        if(filters.rimSizeTo && ad.rimSize > filters.rimSizeTo){
            return false;
        }
        if(filters.lights && !(filters.lights.includes(ad.lights))){
            return false;
        }
        if(filters.tyres && !(filters.tyres.includes(ad.tyres))){
            return false;
        }
        if(filters.doors && !(filters.doors.includes(ad.doors))){
            return false;
        }
        return true;
    })
    return newList;
}