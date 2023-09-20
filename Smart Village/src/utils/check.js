import {
  wastes,
  waterSupply,
  electricitySupply,
} from "../components/ui/management/data";

export const checkWastage = () =>
  wastes.filter((item) => !item.collected).length === 0;
export const checkWater = () =>
  waterSupply.filter((item) => !item.supply).length === 0;
export const checkElectricity = () =>
  electricitySupply.filter((item) => !item.electricitySupply).length === 0;

console.log(checkElectricity());
