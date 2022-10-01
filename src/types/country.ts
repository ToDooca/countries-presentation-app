import {Code} from "@/types/code";
import {Name} from "@/types/name";

export interface Country {
    name: Name,
    full_name: string,
    borders: string[],
    code: Code[],
    currency: string,
    language: string,
    capital_city: string,
    region: string,
    subregion: string,
    cca3: string,
}
