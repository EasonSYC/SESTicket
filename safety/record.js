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
let weekArray = ["日", "一", "二", "三", "四", "五", "六"];
let tod = new Date();
let toy = tod.getFullYear();
let tom = tod.getMonth() + 1;
let tot = tod.getDate();
let dynum;
if ((mon < tom) || ((mon === tom) && (day < tot))) {
    dynum = new Date((toy + 1) + "/" + mon + "/" + day).getDay()
} else {
    dynum = new Date(toy + "/" + mon + "/" + day).getDay()
}
let name = decodeURI(arr[0]);
let area = numArray[typ];
let type = foodArray[typ];
let date = mon + "/" + day + " 周" + weekArray[dynum];
let ip = returnCitySN["cip"];
let city = returnCitySN["cname"];
let newline = name + "," + area + "," + type + "," + date + "," + ip + "," + city + "\n";
alert(newline);