<template>
  <div>
    <ModalButton :text="buttonText" @click.native="openModal"></ModalButton>

    <sweet-modal ref="modal" :hide-close-button="true">
      <div class="modal-head">
        <p class="topic">ВИКЛИК МАЙСТРА</p>
        <span class="modal-close" @click="closeModal">&times;</span>
      </div>
      <div class="modal-body">
        <form id="form" @submit.prevent="sendEmail">
          <label ref="notification" class="notification">Введіть номер
            телефону</label>
          <p class="input-wrapper">
            <input required
                   ref="phoneNumber"
                   minlength="18"
                   id="phoneNumber"
                   name="phoneNumber"
                   class="call-input"
                   placeholder="+38(0__) ___-__-__"
                   type="tel"
                   v-mask="['+38(0##) ###-##-##']"
            />
          </p>
          <button type="submit" class="modal-send">ВІДПРАВИТИ</button>
        </form>
      </div>
      <p class="bottom-line">*передзвонимо протягом 5 хвилин</p>
      <p>
        Немає часу чекати на дзвінок?<br />
        Натисніть щоб зателефонувати:
      </p>
      <a class="numbers" href="tel"><h2>067 135 15 47</h2></a>
      <a class="numbers" href="tel"><h2>099 053 88 64</h2></a>
    </sweet-modal>
  </div>
</template>

<script>
import ModalButton from "./ModalButton";
import emailjs from 'emailjs-com';
emailjs.init("user_n00IFqkCIrHm6D3teTlZD");

export default {
  name: "ModalWindow",
  data() {
    return {
      phoneNumber: '',
      notification: {
        'warning-message':
            'Будь ласка, скорегуйте свiй номер та спробуйте вiдправити його знову',
        'success-message': 'Дякуємо за звернення. Ми зателефонуємо вам протягом години',
      }
    };
  },
  components: {
    ModalButton,
  },
  props: ["buttonText"],
  methods: {
    openModal() {
      this.$refs.modal.open();
    },
    closeModal() {
      this.$refs.modal.close();
    },
    sendEmail(e) {
      // get input with phoneNumber and label with notification message
      const numberInput = this.$refs.phoneNumber;
      const warningLabel = this.$refs.notification;
      // get required number length from input with phoneNumber
      const requiredNumberLength =
          this.$refs.phoneNumber.getAttribute('minlength');
      // get current input value (number)
      let phoneNumber = this.$refs.phoneNumber.value;

      // try to send email (else catch and error and do something)
      // if phoneNumber length is not empty and is equal to input.minlength
      if(phoneNumber && phoneNumber.length == requiredNumberLength) {
        // change <label> text and color
        warningLabel.classList.add('success-color');
        warningLabel.innerHTML = this.notification["success-message"];

        // then send email
        // ! dont forget to change emailjs.init in imports
        emailjs.sendForm('service_u6tq2om',
            'template_e8qp568',
            e.target,
            'user_n00IFqkCIrHm6D3teTlZD', {
              phoneNumber: this.phoneNumber
            })

        // clear input and phoNumber data
        numberInput.value = '';
        phoneNumber = '';
      }
      else {
        warningLabel.classList.add('warning-color');
        warningLabel.innerHTML = this.notification["warning-message"];
      }
    }
  },
  mounted() {
  }
};
</script>

<style lang="scss">
@import './../scss/app/defaults';
@import './../scss/app/colors';

.sweet-content {
  padding-top: 0 !important;
  padding-bottom: 20px !important;
  font-family: $default-page-font;
}

.sweet-modal-overlay {
  background-color: rgba(10, 10, 10, 0.8);
}

.sweet-modal {
  max-width: 20%;
  max-height: 97%;
  min-width: 220px;
  color: #000;
  font-family: Roboto, sans-serif;
  overflow-y: auto;
  position: fixed;
}

.sweet-modal::-webkit-scrollbar {
  width: 0;
}

.bottom-line {
  margin-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
}

.modal-head {
  display: flex;
  justify-content: center;
}

.input-wrapper {
  display: flex;
  justify-content: center;
}

.notification {
  display: block;

  &.warning-color {
    color: #F86F21;
  }
  &.success-color {
    color: #54617a;
  }
}

.modal-close {
  width: 30px;
  height: 30px;
  border: 1px solid honeydew;
  border-radius: 20px;
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 15px 1px rgb(2 2 2 / 75%);
  text-shadow: 0px 0px 0px rgb(0 0 0 / 23%);
  background-color: rgba(0, 0, 0, 0.52);
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  color: white;

  &:hover {
    font-size: 13px;
  }
}

.modal-body {
  margin-bottom: 30px;
}

.numbers {
  text-decoration-color: #f86f21;
}

.modal-send {
  color: white;
  font-size: 1em;
  text-decoration: none;
  background-color: $button-hover-color;
  padding: 15px 50px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.modal-send:hover {
  text-decoration: none;
  color: white;
  background-color: rgb(245, 143, 84);
}

.call-input {
  padding: 20px;
  max-width: 350px;
  font-size: 1.75em;
  border: none;
  display: flex;
  text-align: center;
  outline: 0;
}

.topic {
  color: #000;
  font-size: 28px;
}

@media screen and (max-width: 1023px) {
  .sweet-modal {
    max-width: 90%;
    margin-left: 15px;
    max-height: 97%;
    min-width: 220px;
    color: #000;
    font-family: Roboto, sans-serif;
    overflow-y: auto;
    position: fixed;
  }

  .sweet-modal::-webkit-scrollbar {
    width: 0;
  }

  .bottom-line {
    margin-top: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
  }

  .modal-head {
    display: flex;
    justify-content: center;
  }

  .modal-close {
    width: 30px;
    height: 30px;
    border: 1px solid honeydew;
    border-radius: 20px;
    font-size: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 15px 1px rgb(2 2 2 / 75%);
    text-shadow: 0px 0px 0px rgb(0 0 0 / 23%);
    background-color: rgba(0, 0, 0, 0.52);
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    color: white;
  }

  .modal-close:hover {
    font-size: 13px;
  }

  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
  }

  .call-input {
    padding: 20px;
    max-width: 350px;
    font-size: 22px;
    border: none;
    display: flex;
    text-align: center;
    outline: 0;
  }

  .topic {
    color: #000;
    font-family: Verdana;
    font-size: 28px;
  }

  .body-center {
    display: flex;
    align-items: baseline;
  }
}
@media screen and (min-width: 1023px) {
  .sweet-modal {
    max-width: 400px;
  }
}
</style>