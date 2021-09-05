# JSON

## The JSON Format Evaluates to JavaScript Objects

Định dạng JSON giống về mặt cú pháp với code để tạo các đối tượng trong JavaScript. Do sự giống nhau này, một chương trình JavaScript có thể dễ dàng chuyển đổi dữ liệu JSON thành các đối tượng JavaScript gốc

## JSON Syntax Rules

- Dữ liệu nằm trong các cặp tên/giá trị

```json
"firstName":"John"
```

- Dữ liệu được phân tách với nhau bằng đấu phẩy
- căp ngoặc {} chứa  object

```json
{"firstName":"John", "lastName":"Doe"}
```

- cặp ngoặc [] chứ arays

```json
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
```

- Cách sử dụng phổ biến của JSON là đọc dữ liệu từ máy chủ web và hiển thị ra dữ liệu trong một trang web.

## Convert a JSON text to a JavaScript object and vice versa

- JSON.parse() để chuyển đổi chuỗi thành một đối tượng JavaScript:
- JSON.stringify() để chuyển đổi một đối tượng JavaScript thành JSON(String)