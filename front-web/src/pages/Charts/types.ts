import { Platform } from './../Records/types';
 
 
export type Game ={
    id:number;
    title: string;
    platform: Platform;
};


export type RecordItem = {
    id: number;
    moment: string;
    name: string;
    age: number;
    gameTitle: string;
    gamePlatform: Platform;
    genreGame: string;
}

export type ChartItem = {
   x:string;
   y:number;
}