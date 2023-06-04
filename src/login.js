class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateOnSubmit();
    }

    validateOnSubmit() {
        let self = this;

        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            let error = 0;
            self.fields.forEach((field) => {
                const input = document.querySelector(`#${field}`);
                console.log(input.value);
                if(self.validateFields(input) == false) {
                    error++;
                }
                if(error == 0) {
                    console.log('success');
                }
            })
        })
    }

    validateFields(field) {
        if(field.value.trim() == "") {
            this.setStatus(
                field,
                `${field.previousElementSibling.innerText} não pode estar vazio`,
                "error"
            );
            return false;
        }
    }

    setStatus(field, message, status) {
        const errorMessage = field.parentElement.querySelector('.error-message');
        if(status == "error") {
            errorMessage.innerText = message;
            field.classList.add('input-error');
        }
    }

}

const form = document.querySelector(".formulario_login");

if(form) {
    const fields = ['email', 'password'];
    const validator = new Login(form, fields);
}