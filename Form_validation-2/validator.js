function Validator (formSelector) {
    const formElement = document.querySelector(formSelector);
    const formRules = {};
    const _this = this;
    const validatorRules = {
        required: function(value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email: function(value) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email';
        },
        min: function(min) {
            return function(value) {
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`;
            }
        },
        confirm: function(element) {
            return function(value) {
                return value === formElement.querySelector(element).value ? undefined : 'Giá trị nhập vào chưa hợp lệ';
            }
        },
    };
    if (formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]');
        for (const input of inputs) {
            var rules = input.getAttribute('rules').split('|');
            for (var rule of rules) {
                const isValueInRule = rule.includes(':');
                const isFunctionInRule = rule.includes(';');
                var ruleFunction = validatorRules[rule];
                if (isValueInRule) {
                    var ruleIndex = rule.split(':');
                    ruleFunction = validatorRules[ruleIndex[0]];
                    ruleFunction = ruleFunction(ruleIndex[1]);
                }
                if (isFunctionInRule) {
                    var ruleIndex = rule.split(';');
                    ruleFunction = validatorRules[ruleIndex[0]];
                    ruleFunction = ruleFunction(ruleIndex[1]);
                }
                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunction);
                } else {
                    formRules[input.name] = [ruleFunction];
                }
            }
            // lắng nghe sự kiện để validator
            input.onblur = HandleValidate;
            input.oninput = HandleClearError;
        }
        function HandleValidate(event) {
            var rules = formRules[event.target.name];
            var errorMessage;
            for (const rule of rules) {
                errorMessage = rule(event.target.value);
                if (errorMessage) break;
            }
            if (errorMessage) {
                addErrorMessage(event.target, errorMessage);
            }
            return !errorMessage;
        }   
        function HandleClearError(event) {
            removeErrorMessage(event.target);
        }
        function addErrorMessage(inputElement, errorMessage) {
            var formGroupElement = inputElement.closest('.form-group');
            var messageElement = formGroupElement.querySelector('.form-message');
            messageElement.textContent = errorMessage;
            formGroupElement.classList.add('invalid');
        }
        function removeErrorMessage(inputElement) {
            var formGroupElement = inputElement.closest('.form-group');
            var messageElement = formGroupElement.querySelector('.form-message');
            messageElement.textContent = '';
            formGroupElement.classList.remove('invalid');
        }
        formElement.onsubmit = function(event) {
            event.preventDefault();
            var isValid = true;
            for (const input of inputs) {
                if (!HandleValidate({target: input})) {
                    isValid = false;
                }
            }
            if (isValid) {
                if (typeof _this.onSubmit === 'function') {
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
                    _this.onSubmit(formValues);
                } else {
                    formElement.submit();
                }
            }                       
        }
    }
}