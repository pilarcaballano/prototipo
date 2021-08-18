import { Injectable } from '@angular/core';

@Injectable()
export class UrlMappingService {

  constructor() { }

  /**
   * Genera una string de parametros HTTP con las propiedes de un objeto
   * @param object 
   */
  public generateURLParameters(obj: any): string {
    let url: string = "?" + Object.entries(obj).map(([k, v]: [string, any]) => encodeURIComponent(k) + "=" + encodeURIComponent(v)).join("&");
    console.log(url);
    return url;
  }
}
