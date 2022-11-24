export enum EUAssetStatus {
  inAlert = "inAlert",
  inOperation = "inOperation",
  inDowntime = "inDowntime",
}

export interface IAssetsProps {
  companyId: number;
  id: number;
  image: string;
  healthscore: number;
  metrics: {
    totalCollectsUptime: number;
    totalUptime: number;
    lastUptimeAt: string;
  };
  model: string;
  name: string;
  sensors: string[];
  specifications: {
    maxTemp: number;
    power: number;
    rpm: number | null;
  };
  status: EUAssetStatus;
  unitId: number;
}
