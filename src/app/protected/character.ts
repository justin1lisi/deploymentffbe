import {Magic} from "./magic";
export class Character {

  constructor(
    public charName: string,
    public image: string,
    public ranking: string,
    public stars: string,
    public role: string,
    public burst: string,
    public dagger: boolean,
    public sword: boolean,
    public greatSword: boolean,
    public katana: boolean,
    public staves: boolean,
    public rods: boolean,
    public bows: boolean,
    public axes: boolean,
    public hammers: boolean,
    public spears: boolean,
    public harps: boolean,
    public whips: boolean,
    public throwing: boolean,
    public guns: boolean,
    public maces: boolean,
    public fists: boolean,
    public trustReward: string,
    public trustRewardType: string,
    public magic: any[],
    public skill: any[],
    public stats: any[]) {

  }

}
