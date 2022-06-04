<template>
  <section class="page-section" id="services">
    <div class="container px-4 px-lg-5 text-center">
      <h2 class="text-center mt-0">Minimize Your URL</h2>
      <hr class="divider" />
      <p class="text-muted mb-5">Want to minimize your URL? Let us do it for you! <br /> Just put the URL and click Minimize button!</p>
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-lg-6">
          <form id="urlForm" data-sb-form-api-token="API_TOKEN" @submit.prevent="submitForm">
            <div class="form-floating mb-3">
              <input class="form-control" :class="v$.inputUrl.$error && 'border-danger'" id="url" type="text" placeholder="Enter your message here..." data-sb-validations="required" v-model="inputUrl" :disabled="response.status == 'success'" />
              <label for="url">URL</label>
              <p v-for="error of v$.inputUrl.$errors" :key="error.$uid" class="text-danger small" style="text-align: left">
                × {{ error.$message }}
              </p>
            </div>
            <div class="d-grid">
              <button class="btn btn-success btn-xl text-white p-2" id="submitButton" type="submit" :class="[v$.inputUrl.$invalid && 'disabled', response.status=='loading' && 'disabled', response.status=='success' && 'd-none']">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-signpost-split-fill" viewBox="0 0 16 16">
                  <path d="M7 16h2V6h5a1 1 0 0 0 .8-.4l.975-1.3a.5.5 0 0 0 0-.6L14.8 2.4A1 1 0 0 0 14 2H9v-.586a1 1 0 0 0-2 0V7H2a1 1 0 0 0-.8.4L.225 8.7a.5.5 0 0 0 0 .6l.975 1.3a1 1 0 0 0 .8.4h5v5z"/>
                </svg>
                Minimize
              </button>
            </div>
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
          <div class="d-grid">
            <button class="btn btn-info btn-xl text-white p-2" @click="minimizeAgain(); v$.inputUrl.$reset();">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
              </svg>
              New
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {ref, watch} from "vue";
  import useUrl from "../../composables/useUrl.vue"
  import {createToast} from "mosha-vue-toastify";
  import useVuelidate from '@vuelidate/core'
  import {required, url} from '@vuelidate/validators'

  export default {
    setup() {
      const inputUrl = ref()
      const miniUrl = ref()

      const rules = {
        inputUrl: { required, url, $autoDirty: true }
      }
      const v$ = useVuelidate(rules, { inputUrl })

      const { submitForm:useForm, response, resetResponse } = useUrl();
      const submitForm = async () => {
        await useForm({ url: inputUrl.value });
      }

      const copyMiniUrlToClipboard = async () => {
        await navigator.clipboard.writeText(miniUrl.value);
        createToast('URL has been copied to clipboard', {
          type: 'info'
        })
      }

      const minimizeAgain = () => {
        resetResponse();
        inputUrl.value = null
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

      return {inputUrl, submitForm, response, copyMiniUrlToClipboard, miniUrl, minimizeAgain, v$}
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