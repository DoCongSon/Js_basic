// đối tượng validator
function Validator(options) {
    var selectorRules = {};

    // setErrorMessage function
    function setErrorMessage(inputElement, errorMessage) {
        // var formGroupElement = getParent(inputElement, options.formGroupSelector);
        var formGroupElement = inputElement.closest(options.formGroupSelector);
        var messageElement = formGroupElement.querySelector(options.errorSelector);
        messageElement.textContent = errorMessage;
        formGroupElement.classList.add(options.invalidClass);
    }
    // removeErrorMessage function
    function removeErrorMessage(inputElement) {
        // var formGroupElement = getParent(inputElement, options.formGroupSelector);
        var formGroupElement = inputElement.closest(options.formGroupSelector);
        var messageElement = formGroupElement.querySelector(options.errorSelector);
        messageElement.textContent = '';
        formGroupElement.classList.remove(options.invalidClass);
    }

    // hàm thực hiện validate
    function validate(inputElement, rule) {
        var rules = selectorRules[rule.selector];
        for (var i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    var errorMessage = rules[i](inputElement.querySelector(`${rule.selector}:checked`));
                    break;
                default:
                    var errorMessage = rules[i](inputElement.value);
                    break;
            }
            if (errorMessage) break; 
        }

        if (errorMessage) {
            setErrorMessage(inputElement, errorMessage);
        } else {
            removeErrorMessage(inputElement);
        }

        return !errorMessage;
    } 
    // lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    
    if (formElement) {
        // loại bỏ hành vi mặc định submit và sử lý khi submit
        formElement.onsubmit = function (e) {
            e.preventDefault();

            var isFormValid = true;

            // lặp qua từng rule
            options.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    // isFormValid = false;
                } 
            })
            
            if (isFormValid) {
                if (typeof options.onSubmit === 'function') {
                    // TH submit với js
                    var inputs = formElement.querySelectorAll('[name]');
                    var formValues = [...inputs].reduce((values, i) => {
                        switch (i.type) {
                            case 'radio':
                                values[i.name] = formElement.querySelector('input[name="' + i.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if(!i.matches(':checked')) {
                                    values[i.name] = [];
                                    return values;
                                }
                                if(!Array.isArray(values[i.name])) {
                                    values[i.name] = [];
                                }
                                values[i.name].push(i.value);
                                break;
                            case 'file': 
                                values[i.name] = i.file;
                                break;
                            default:    
                                values[i.name] = i.value;
                                break;
                        }
                        return values;
                    }, {})
                    options.onSubmit(formValues);
                } else {
                    // TH submit với html (mặc định của trình duyệt)
                    formElement.submit(); 
                }
            }
        }
        // lặp qua all rule và sử lý
        options.rules.forEach(function (rule) {
            // add rule to selectorRules
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }
            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(inputElement => {
                if (inputElement) {
                    inputElement.onblur = function () {
                        validate(inputElement, rule); 
                    }
                    inputElement.oninput = function () {
                        removeErrorMessage(inputElement);
                    }
                }
            });
        })
    } 
}; 

// định nghĩa các rules
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || 'Vui lòng nhập trường này';
        }
    };
};

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email';
        }
    };
};

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value >= min ? undefined : message || `Độ dài tối thiểu là ${min} kí tự`;
        }
    };
};

Validator.isConfirm = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || "Giá trị nhập vào không chính xác"
        }
    }
}