import { rooms as roomsPt } from "../lib/rooms_const";
import { rooms as roomsEn } from "../lib/rooms_const_en";
import { rooms as roomsEs } from "../lib/rooms_const_es";


export default function changeLanguages(locale) {
  if (locale === 'pt' ) return roomsPt;
  if (locale === 'en' ) return roomsEn;
  if (locale === 'es' ) return roomsEs;
}
