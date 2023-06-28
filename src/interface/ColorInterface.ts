export enum ColorItemEnum {
  black = "noir",
  white = "blanc",
  red = "rouge",
  purple = "violet",
  orange = "orange",
  yellow = "jaune",
  blue = "bleu",
  brown = "marron",
  green = "vert",
  multiple = "multicolore",
  gray = "gris",
}

export interface ColorItemInterface {
  value: ColorItemEnum;
  color: string;
  label: string;
}
