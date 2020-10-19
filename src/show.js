let url = document.location.toString();
let urlParmStr = url.slice(url.indexOf("?") + 1);
let arr = urlParmStr.split("&");
let api = parseInt(arr[1], 16);
let typ = Math.floor(api / 416);
let tim = api % 416;
let mon = Math.floor(tim / 32);
let day = tim % 32;
let numArray = ["undefined", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let foodArray = ["undefined", "自助餐", "套餐A", "套餐A", "套餐A", "套餐B", "盖浇饭", "套餐C", "面档", "套餐B"];
let locArray = ["undefined", "一", "一", "一", "二", "二", "二", "二", "二", "二"];
let weekArray = ["日", "一", "二", "三", "四", "五", "六"];
let tod = new Date();
let toy = tod.getFullYear();
let tom = tod.getMonth() + 1;
let tot = tod.getDate();
let dynum;
if ((mon < tom) || ((mon === tom) && (day < tot))){
    dynum = new Date((toy + 1) + "/" + mon + "/" + day).getDay()
} else {
    dynum = new Date(toy + "/" + mon + "/" + day).getDay()
}
var food = foodArray[typ];
var name = decodeURI(arr[0]);
var num = numArray[typ];
var loc = locArray[typ];
var wkd = mon + "/" + day + " 周" + weekArray[dynum];

// TODO: QRCode Generate + Base64

let b64 = "data:image/png;base64,";
var QRC = b64 + "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"