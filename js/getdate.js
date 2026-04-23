const now = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let day = now.getDate()
let month = now.getMonth()
let year= now.getFullYear()
document.getElementById("datestring").innerHTML = "Current: " + monthNames[month] + " " + day + ", " + year

let img = "bannermh2_sparkle.png"

if (day == 1 && month == 0) {			// months start with 0
	img = "bannermh2_spotlight.png"
} else if (day == 14 && month == 1) {
	img = "bannermh2_valentine.png"
} else if (day == 17 && month == 2) {
	img = "bannermh2_spotlight.png"
} else if (day == 5 && month == 3) {
	img = "bannermh2_spotlight.png" // easter 2026
} else if (day == 22 && month == 3) {
	img = "bannermh2_spotlight.png"
} else if (day == 28 && month == 5) { // pride day
	img = "bannermh2_pride.png"
} else if (day == 1 && month == 6) { // canada day
	img = "canada_day_banner.png"
} else if (day == 7 && month == 8) { // labour day
	img = "bannermh2_spotlight.png"
} else if (day == 19 && month == 8) {
	img = "bannermh2_spotlight.png"
} else if (day == 3 && month == 9) { // german indep. day
	img = "bannermh2_germany.png"
} else if (day == 12 && month == 9) { // thanksgiving CA
	img = "bannermh2_spotlight.png"
} else if (day == 31 && month == 9) {
	img = "bannermh2_november.png"
} else if ((day == 1 || day ==2 ) && month == 10) { // Day of the Dead
	img = "bannermh2_november.png"
} else if (day == 25 && month == 11) {
	img = "bannermh2_xmas1.png"
} else if (month == 11 || month == 0 || month == 1) {
	img = "bannermh2_winter.png"
} else if (month > 2 &&  month < 5) {
	img = "bannermh2_spring.png"
} else if (month > 4 &&  month < 8) {
	img = "bannermh2_summer.png"
} else if (month > 7 &&  month < 12) {
	img = "bannermh2_fall.png"
}

document.getElementById("bannerimage").src= "/images/seasonal_banners/" + img
