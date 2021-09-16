export class Stat {
  public name: string;
  public minValue: number;
  public maxValue: number;
  public defaultValue: number;
  public iconLink: string;

  constructor(name: string, min: number, max: number, defaultValue: number, iconLink: string) {
    this.name = name;
    this.minValue = min;
    this.maxValue = max;
    this.defaultValue = defaultValue;
    this.iconLink = iconLink;
  }
}
