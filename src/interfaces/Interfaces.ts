export interface AdExpanded{
    "id": number;
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
    "manufacturer": Manufacturer;
    "model": Model;
    "car_type": SimpleType;
    "fuel_type": SimpleType;
    "drive_type": SimpleType;
    "dateCreated": string;
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