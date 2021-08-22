/**
 * Conditional Statements (vòng lặp)
 * 1. if-else
 * 2. switch-case
 * 
 */
// * if else
var hour = new Date
if (hour.getHours() > 18) {
    console.log("Good Evening!");
} else console.log("Good day");

// * switch case
// Biểu thức chuyển đổi được đánh giá một lần.
// Giá trị của biểu thức được so sánh với giá trị của từng trường hợp.
// Nếu có sự trùng khớp, khối mã được liên kết sẽ được thực thi.
// Nếu không khớp, khối mã mặc định được thực thi.
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(day);

switch (new Date().getDay()) {
    case 6:
        text = "Hôm nay là thứ 7";
        break;
    case 0:
        text = "Hôm nay là chủ nhật";
        break;
    default:
        text = "hãy trông chờ đến ngày cuối tuần";
}
console.log(text);

// Đôi khi bạn sẽ muốn các trường hợp case khác nhau 
// nhưng được sử dụng chung.
// Trong ví dụ này, trường hợp 4 và 5 cùng một khối mã và 0 và 6 cùng một khối mã khác
switch (new Date().getDay()) {
    case 4:
    case 5:
        text1 = "Sắp dến cuối tuần";
        break;
    case 0:
    case 6:
        text1 = "Hôm nay là cuối tuần";
        break;
    default:
        text1 = "hãy trông chờ đến ngày cuối tuần";
}
console.log(text1);