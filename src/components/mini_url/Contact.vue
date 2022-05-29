<template>
  <section class="page-section" id="contact">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-lg-8 col-xl-6 text-center">
          <h2 class="mt-0">Let's Get In Touch!</h2>
          <hr class="divider" />
          <p class="text-muted mb-5">Want here to be improved? Send us a message and we will get back to you as soon as possible!</p>
        </div>
      </div>
      <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
        <div class="col-lg-6">
          <!-- * * * * * * * * * * * * * * *-->
          <!-- * * SB Forms Contact Form * *-->
          <!-- * * * * * * * * * * * * * * *-->
          <!-- This form is pre-integrated with SB Forms.-->
          <!-- To make this form functional, sign up at-->
          <!-- https://startbootstrap.com/solution/contact-forms-->
          <!-- to get an API token!-->
          <form id="contactForm" data-sb-form-api-token="API_TOKEN" @submit.prevent="submitForm">
            <!-- Email address input-->
            <div class="form-floating mb-3">
              <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" v-model="form.from" />
              <label for="email">Email address</label>
              <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
              <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
            </div>
            <!-- Message input-->
            <div class="form-floating mb-3">
              <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style="height: 10rem" data-sb-validations="required" v-model="form.message"></textarea>
              <label for="message">Message</label>
              <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
            </div>
            <!-- Submit Button-->
            <div class="d-grid"><button class="btn btn-primary btn-xl p-2" id="submitButton" type="submit" :class="response.status=='loading' && 'disabled'">Submit</button></div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {reactive, watch} from "vue";
  import useContact from "../../composables/useContact.vue";
  import {createToast} from 'mosha-vue-toastify';

  export default {
    setup() {
      const form = reactive({
        'from': '',
        'message': ''
      });
      const resetForm = () => {
        form.from = '';
        form.message = '';
      }

      const { submitForm:useForm, response} = useContact();
      const submitForm = async () => {
        await useForm({...form});
      }

      watch(response, (newResponse) => {
        if(newResponse.status == 'success') {
          createToast('Thank you for getting in touch', {
            type: 'success'
          });
          resetForm();
        } else if(newResponse.status == 'error')
          createToast(response.message, {
            type: 'danger'
          });
      })

      return {form, submitForm, response}
    }
  }
</script>