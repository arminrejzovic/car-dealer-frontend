export interface Ad{
    "title": string;
    "manufacturerId": number;
    "modelId": number;
    "price": number;
    "year": number;
    "mileage": number;
    "volume": number;
    "horsepower": number;
    "car_typeId": number;
    "fuel_typeId": number;
    "drive_typeId": number;
    "transmission": string;
    "availableForRent": boolean;
    "lowestPrice": number;
    "thumbnailUrl": string;
    "firebaseFolderUrl": string;
    "emissionStandard": string;
    "color": string;
    "parkingCamera": string;
    "rimSize": number;
    "gears": string;
    "lights": string;
    "tyres": string;
    "doors": string;
    "registrationUntil": string;
    "description": string;
    "dateCreated": string;
    "images": Image[];
}

export interface AdExpanded extends Ad{
    "id": number;
    "manufacturer": Manufacturer;
    "model": Model;
    "car_type": SimpleType;
    "fuel_type": SimpleType;
    "drive_type": SimpleType;
}

export interface Manufacturer{
    "id": number;
    "name": string;
    "countryId": number;
}

export interface Model{
    "id": number;
    "name": string;
    "manufacturerId": number;
}

export interface SimpleType{
    id: number;
    type: string;
}

export interface Image{
    id: number;
    src64: string;
    adId: number;
}

export interface Announcement{
    id: number;
    title: string;
    text: string;
    dateCreated: string;
}