import {Code} from "@/types/code";

export interface Country {
    name: String,
    full_name: String,
    code: Code[],
    currency: String,
    language: String,
    capital_city: String,
    region: String,
    subregion: String,
}
