let d;
let d2;
let enterDate;
function changeDate (d) {
	let dates = d.split('.');
	let newYear = Number (dates[2]);
	let newMonth = Number (dates[1]) - 1;
	let newDay = Number (dates[0]);
	let changedDate = new Date (newYear, newMonth, newDay);
	return changedDate;
}
function getDayInfo (writeDate) {
	let newDate = changeDate (writeDate);
	let Date = newDate.getDate();
	let Month = newDate.getMonth();
	let Year = newDate.getFullYear();
	let Day = newDate.getDay();
	let NumberOfWeek;
	let onScreen;
	if (Day == 0){
		onScreen = 'Воскресенье, ';
	}
	else if (Day == 1){
		onScreen = 'Понедельник, ';
	}
	else if (Day == 2){
		onScreen = 'Вторник, ';
	}
	else if (Day == 3){
		onScreen = 'Среда, ';
	}
	else if (Day == 4){
		onScreen = 'Четверг, ';
	}
	else if (Day == 5){
		onScreen = 'Пятница, ';
	}
	else {
		onScreen = 'Суббота, ';
	}
	if (Date == 1){
		NumberOfWeek = 1;
	}
	if (Date == 2){
		if (Day == 1) {
			NumberOfWeek = 2;
		}
		else {
		NumberOfWeek = 1;
		}
	}
	if (Date == 3) {
		if ((Day == 1) || (Day == 2)) {
			NumberOfWeek = 2;
		}
		else {
			NumberOfWeek = 1;
		}
	}
	if (Date == 4) {
		if ((Day == 1) || (Day == 2) || (Day == 3)) {
			NumberOfWeek = 2;
		}
		else {
			NumberOfWeek = 1;
		}
	}
	if (Date == 5) {
		if ((Day == 1) || (Day == 2) || (Day == 3) || (Day == 4)) {
			NumberOfWeek = 2;
		}
		else {
			NumberOfWeek = 1;
		}
	}
	if (Date == 6) {
		if ((Day == 1) || (Day == 2) || (Day == 3) || (Day == 4) || (Day == 5)) {
			NumberOfWeek = 2;
		}
		else {
			NumberOfWeek = 1;
		}
	}
	if (Date == 7) {
		if ((Day == 1) || (Day == 2) || (Day == 3) || (Day == 4) || (Day == 5) || (Day == 6)) {
			NumberOfWeek = 2;
		}
		else {
			NumberOfWeek = 1;
		}
	}

	if (Date == 8){
		NumberOfWeek = 2;
	}
	if (Date == 9){
		if (Day == 1) {
			NumberOfWeek = 3;
		}
		else {
		NumberOfWeek = 2;
		}
	}
	if (Date == 10) {
		if ((Day == 1) || (Day == 2)) {
			NumberOfWeek = 3;
		}
		else {
			NumberOfWeek = 2;
		}
	}
	if (Date == 11) {
		if ((Day == 1) || (Day == 2) || (Day == 3)) {
			NumberOfWeek = 3;
		}
		else {
			NumberOfWeek = 2;
		}
	}
	if (Date == 12) {
		if ((Day == 1) || (Day == 2) || (Day == 3) || (Day == 4)) {
			NumberOfWeek = 3;
		}
		else {
			NumberOfWeek = 2;
		}
	}
	if (Date == 13) {
		if ((Day == 1) || (Day == 2) || (Day == 3) || (Day == 4) || (Day == 5)) {
			NumberOfWeek = 3;
		}
		else {
			NumberOfWeek = 2;
		}
	}
	if (Date == 14) {
		if ((Day == 1) || (Day == 2) || (Day == 3) || (Day == 4) || (Day == 5) || (Day == 6)) {
			NumberOfWeek = 3;
		}
		else {
			NumberOfWeek = 2;
		}
	}
	
	if (Date == 15){
		NumberOfWeek = 3;
	}
	if (Date == 16){
		if (Day == 1) {
			NumberOfWeek = 4;
		}
		else {
		NumberOfWeek = 3;
		}
	}
	if (Date == 17) {
		if ((Day == 1) || (Day == 2)) {
			NumberOfWeek = 4;
		}
		else {
			NumberOfWeek = 3;
		}
	}
	if (Date == 18) {
		if ((Day == 1) || (Day == 2) || (Day == 3)) {
			NumberOfWeek = 4;
		}
		else {
			NumberOfWeek = 3;
		}
	}
	if (Date == 19) {
		if ((Day == 1) || (Day == 2) || (Day == 3) || (Day == 4)) {
			NumberOfWeek = 4;
		}
		else {
			NumberOfWeek = 3;
		}
	}
	if (Date == 20) {
		if ((Day == 1) || (Day == 2) || (Day == 3) || (Day == 4) || (Day == 5)) {
			NumberOfWeek = 4;
		}
		else {
			NumberOfWeek = 3;
		}
	}
	if (Date == 21) {
		if ((Day == 1) || (Day == 2) || (Day == 3) || (Day == 4) || (Day == 5) || (Day == 6)) {
			NumberOfWeek = 4;
		}
		else {
			NumberOfWeek = 3;
		}
	}
	if (Date == 22){
		NumberOfWeek = 4;
	}
	if (Date == 23){
		if (Day == 1) {
			NumberOfWeek = 5;
		}
		else {
		NumberOfWeek = 4;
		}
	}
	if (Date == 24) {
		if ((Day == 1) || (Day == 2)) {
			NumberOfWeek = 5;
		}
		else {
			NumberOfWeek = 4;
		}
	}
	if (Date == 25) {
		if ((Day == 1) || (Day == 2) || (Day == 3)) {
			NumberOfWeek = 5;
		}
		else {
			NumberOfWeek = 4;
		}
	}
	if (Date == 26) {
		if ((Day == 1) || (Day == 2) || (Day == 3) || (Day == 4)) {
			NumberOfWeek = 5;
		}
		else {
			NumberOfWeek = 4;
		}
	}
	if (Date == 27) {
		if ((Day == 1) || (Day == 2) || (Day == 3) || (Day == 4) || (Day == 5)) {
			NumberOfWeek = 5;
		}
		else {
			NumberOfWeek = 4;
		}
	}
	if (Date == 28) {
		if ((Day == 1) || (Day == 2) || (Day == 3) || (Day == 4) || (Day == 5) || (Day == 6)) {
			NumberOfWeek = 5;
		}
		else {
			NumberOfWeek = 4;
		}
	}
	if (Date == 29){
		NumberOfWeek = 5;
	}
	if (Date == 30){
		if (Day == 1) {
			NumberOfWeek = 6;
		}
		else {
		NumberOfWeek = 5;
		}
	}
	if (Date == 31) {
		if ((Day == 1) || (Day == 2)) {
			NumberOfWeek = 6;
		}
		else {
			NumberOfWeek = 5;
		}
	}
	onScreen = onScreen + NumberOfWeek + ' неделя';
	if (Month == 0){
		onScreen = onScreen + ' Января ';
		}
		else if (Month == 1){
			onScreen = onScreen + ' Февраля ';
			}
		else if (Month == 2){
			onScreen = onScreen + ' Марта ';
		}
		else if (Month == 3){
			onScreen = onScreen + ' Апреля ';
		}
		else if (Month == 4){
			onScreen = onScreen + ' Мая ';
		}
		else if (Month == 5){
			onScreen = onScreen + ' Июня ';
		}
		else if (Month == 6){
			onScreen = onScreen + ' Июля ';
		}
		else if (Month == 7){
			onScreen = onScreen + ' Августа ';
		}
		else if (Month == 8){
			onScreen = onScreen + ' Сентября ';
		}
		else if (Month == 9){
			onScreen = onScreen + ' Октября ';
		}
		else if (Month == 10){
			onScreen = onScreen + ' Ноября ';
		}
		else {
			onScreen = onScreen + ' Декабря ';
		}
	onScreen = onScreen + Year + ' года';
	return onScreen;
};
enterDate = getDayInfo("15.02.2016");
alert (enterDate);

