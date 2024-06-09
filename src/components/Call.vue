<template>
  <section class="dimmed" id="dimmed">
    <div class="call-dimmer">
      <div class="call-request">
        <div class="request-title">
          <h2 class="title">Замовити дзвінок</h2>
        </div>

        <div class="y-tel-number">
          <p class="call-p-title">Ми передзвонимо протягом 5 хвилин</p>
          <form id="form" @submit.prevent="sendEmail">
            <div class="tel-number-introduce">
              <div class="input-container">
                <input required
                       ref="phoneNumberOnPage"
                       minlength="18"
                       id="phoneNumber"
                       name="phoneNumber"
                       class="tel-input"
                       placeholder="+38(0__) ___-__-__"
                       type="tel"
                       v-mask="['+38(0##) ###-##-##']"
                />
              </div>
              <div class="tel-number-send">
                <button href="#" class="send-button">Відправити</button>
              </div>
            </div>
            <div>
                <p class="notification" ref="notificationOnPage">Введіть ваш
                  номер</p>
            </div>
          </form>

        </div>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@import '../scss/layout/media-querries';
@import '../scss/app/colors';

.call-dimmer {
  width: 100%;
  padding: 2rem 0;

  @include from-tablet {
    height: 530px;
  }
}

.dimmed {
  background-image: url("../img/1b0cb02c6b5060abe54338e9f5749cae.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* height: 750px; */
  background-size: cover;
}

.request-title h2,
.request-title p {
  color: black;
}

.request-title {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.request-title h2 {
  font-size: 1.8em;
}

.call-p-title {
  color: black;
  font-size: 25px;
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

.y-tel-number div p {
  font-size: 1em;
  color: $orange;
}

.y-tel-number {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #b9cae4;
  width: 90%;
  padding: 20px 0px 38px 0px;
  border-radius: 50px;
  color: #7f7f7f;
  margin: 0;
  border: 1px solid black;
}

.tel-input {
  border: none;
  font-size: 20px;
  margin-right: 0;
  outline: 0;
  max-width: 185px;
  background-color: #b9cae4;
}

.send-button {
  color: white;
  font-size: 0.8em;
  text-decoration: none;
  background-color: $orange;
  padding: 8px 45px;
  border-radius: 20px;
  margin-top: 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: $button-hover-color;
  }

  &:active {
    background-color: rgb(255, 173, 126);
  }
}

.call-request {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 426px) {
  .call-dimmer {
    height: 400px;
  }
}

@media screen and (min-width: 768px) {
  .call-dimmer {
    height: 500px;
  }
  .call-request {
    padding: 75px 0;
  }

  .request-title {
    margin-bottom: 30px;
  }

  .request-title h2 {
    font-size: 2.9em;
    margin: 0;
  }

  .y-tel-number {
    padding: 20px 40px 38px 40px;
    width: 65%;
    align-items: center;
    justify-content: center;
  }

  .tel-number-introduce {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tel-number-introduce p {
    font-size: 1em;
    text-align: left;
  }

  .tel-number-send {
    display: flex;
    justify-content: flex-end;
  }

  .tel-input {
    font-size: 23px;
    max-width: 230px;
    margin-right: 30px;
  }

  .send-button {
    padding: 12px 50px;
    font-size: 0.9em;
  }
}

@media screen and (min-width: 1024px) {
  .call-request {
    padding: 100px 0;
  }

  .request-title p {
    font-size: 1.2em;
  }

  .tel-input {
    font-size: 28px;
    max-width: 260px;
  }

  .y-tel-number {
    width: 55%;
  }
}

@media screen and (min-width: 1440px) {
  .request-title h2 {
    font-size: 3.1em;
  }

  .tel-number-introduce {
    font-size: 1.2em;
  }

  .send-button {
    font-size: 1.1em;
  }
}
</style>

<script>
import emailjs from 'emailjs-com';
// emailjs.init("user_n00IFqkCIrHm6D3teTlZD");

export default {
  name: "Call",
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
  methods: {
    sendEmail(e) {
      // get input with phoneNumber and label with notification message
      const numberInput = this.$refs.phoneNumberOnPage;
      const warningLabel = this.$refs.notificationOnPage;
      // get required number length from input with phoneNumber
      const requiredNumberLength =
          this.$refs.phoneNumberOnPage.getAttribute('minlength');
      // get current input value (number)
      let phoneNumber = this.$refs.phoneNumberOnPage.value;

      // try to send email (else catch and error and do something)
      // if phoneNumber length is not empty and is equal to input.minlength
      if(phoneNumber && phoneNumber.length == requiredNumberLength) {
        // change <label> text and color
        warningLabel.classList.add('success-color');
        warningLabel.innerHTML = this.notification["success-message"];

        // then send email
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
};
</script>