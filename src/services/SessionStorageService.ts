export const FORM_ITEMS_SESSION_KEY = "form_area_items";
export class SessionStorageService {
  static saveItem(key: string, data: any) {
    sessionStorage.setItem(key, JSON.stringify(data));
  }
  static getItem(key: string) {
    const item = sessionStorage.getItem(key);
    if (item !== null) {
      return JSON.parse(item);
    }
    return null;
  }
}
