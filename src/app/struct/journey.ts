import { Photo } from "./gallery";

export interface JourneyItem
{
    title: string;
    description: string;
    photos?: Photo[];
}