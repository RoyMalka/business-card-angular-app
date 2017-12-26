import { SafeResourceUrl } from "@angular/platform-browser/src/security/dom_sanitization_service";

export interface Card {
    id?:string;
    about?:string;
    description?:string;
    address?: {
        city?:string,
        number?:string,
        street?:string
    },
    email?: string,
    facebook_url?:string,
    images?: string[],
    phone?:string,
    profile_image?:string,
    user_name?:string,
    whatsapp?:string,
    video?:string
    backround?:string;
    safeBackround?:SafeResourceUrl
  }