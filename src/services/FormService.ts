// import { FormAreaItem } from "../components/form-area/FormArea.types";

import { FormAreaItem } from "../components/form-area/FormArea.types";

// export class FormService {
//   private static instance: FormService;

//   constructor() {
//   }
//   public static getInstance(): FormService {
//     if (!FormService.instance) {
//       FormService.instance = new FormService();
//     }

//     return FormService.instance;
//   }

//   get allItems() {
//     return this.allItems;
//   }

//   set allItems(items: FormAreaItem[]) {
//     this.allItems = items;
//   }

//   static addElement(item: FormAreaItem) {
//     this.allItems.push(item);
//     this.allItems = [...this.allItems];
//   }

//   static deleteElement(id: string) {
//     this.allItems = [...this.allItems.filter((item) => item.id !== id)];
//   }
// }