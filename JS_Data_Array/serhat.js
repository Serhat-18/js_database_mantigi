// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   serhat.js                                          :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: skaska <skaska@student.42kocaeli.com.tr>   +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2023/04/13 17:48:51 by skaska            #+#    #+#             //
//   Updated: 2023/04/13 17:48:54 by skaska           ###   ########.tr       //
//                                                                            //
// ************************************************************************** //

const data = [
    "Ad,Soyad,Tel,Plaka", // şablon bu şekilde olucak
 // "Ad,Soyad,Tel,Plaka",
];


const veri = data[1].split(","); // array dizisi 0 dan başlar ve devam eder o yüzden eğer datada 1.sonucu yazdırmak istiyorsanız 0 2.sonuc 1 ... gibi

sorgusonuc.isim = veri[0]; // dizinin 0. elemanı
sorgusonuc.soyisim = veri[1]; // dizinin 1. elemanı
sorgusonuc.tel = veri[2];// dizinin 2. elemanı
sorgusonuc.plaka = veri[3]// dizinin 3. elemanı

console.log("İsim: " + sorgusonuc.isim);
console.log("Soyisim: " + sorgusonuc.soyisim);
console.log("Telefon: " + sorgusonuc.tel);
console.log("Plaka: " + sorgusonuc.plaka);
