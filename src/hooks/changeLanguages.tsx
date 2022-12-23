import { rooms as roomsPt } from "../consts/rooms_const";
import { rooms as roomsEn } from "../consts/rooms_const_en";
import { rooms as roomsEs } from "../consts/rooms_const_es";


export default function changeLanguages(locale) {
  if (locale === 'pt' ) return roomsPt;
  if (locale === 'en' ) return roomsEn;
  if (locale === 'es' ) return roomsEs;
}
