<template>
  <section class="page-section" id="services">
    <div class="container px-4 px-lg-5 text-center">
      <h2 class="text-center mt-0">Minimize Your URL | Mini URL</h2>
      <hr class="divider" />
      <p class="text-muted mb-5">Want to minimize your URL? Let us do it for you! <br /> Just put the URL and click Minimize button!</p>
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-lg-6">
          <form id="urlForm" data-sb-form-api-token="API_TOKEN" @submit.prevent="submitForm">
            <div class="form-floating mb-3">
              <input class="form-control" id="url" type="text" placeholder="Enter your message here..." data-sb-validations="required" v-model="url" :disabled="response.status == 'success'" />
              <label for="url">URL</label>
              <div class="invalid-feedback" data-sb-feedback="url:required">A URL is required.</div>
            </div>
            <div class="d-grid"><button class="btn btn-success btn-xl text-white p-2" id="submitButton" type="submit" :class="[response.status=='loading' && 'disabled', response.status=='success' && 'd-none']">Minimize</button></div>
          </form>
        </div>
      </div>
      <div class="row gx-4 gx-lg-5 justify-content-center" v-if="response.status == 'success'">
        <div class="col-lg-6">
          <div class="input-group mb-3">
            <input type="text" class="form-control bg-light" :value="miniUrl" aria-describedby="basic-addon2" disabled>
            <div class="input-group-append" style="cursor: pointer" @click="copyMiniUrlToClipboard">
              <span class="input-group-text" id="basic-addon2">
                <i class="bi-files fs-6" />
              </span>
            </div>
          </div>
          <div class="d-grid"><button class="btn btn-info btn-xl text-white p-2" @click="minimizeAgain">New</button></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {ref, watch} from "vue";
  import useUrl from "../../composables/useUrl.vue"
  import {createToast} from "mosha-vue-toastify";

  export default {
    setup() {
      const url = ref()
      const miniUrl = ref()

      const { submitForm:useForm, response, resetResponse } = useUrl();
      const submitForm = async () => {
        await useForm({ url: url.value });
      }

      const copyMiniUrlToClipboard = async () => {
        await navigator.clipboard.writeText(miniUrl.value);
        createToast('URL has been copied to clipboard', {
          type: 'info'
        })
      }

      const minimizeAgain = () => {
        resetResponse();
        url.value = null
        miniUrl.value = null
      }

      watch(response, (newResponse) => {
        if(newResponse.status == 'success')
          miniUrl.value = import.meta.env.VITE_URL + '/' + response.message.data.key;
        else if(newResponse.status == 'error')
          createToast(response.message, {
            type: 'danger'
          });
      })

      return { url, submitForm, response, copyMiniUrlToClipboard, miniUrl, minimizeAgain }
    }
  }
</script>

<style>
  #basic-addon2 {
    background-color: white;
    color: #0dcaf0;
  }

  #basic-addon2:hover {
    background-color: #0dcaf0;
    color: white;
  }
</style>