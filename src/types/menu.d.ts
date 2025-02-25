declare module "@/types/menu" {
  export interface Menu {
    id: number;
    title: string;
    path?: string;
    newTab: boolean;
    submenu?: Menu[];
  }
}
