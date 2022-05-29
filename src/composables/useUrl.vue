<script>
  import {ref, reactive} from "vue";
  import axios from 'axios'

  export default function() {
    const response = reactive({
      status: '',
      message: ''
    })
    const resetResponse = () => {
      response.status = '';
      response.message = '';
      miniUrl.value = null;
    }
    const miniUrl = ref();

    const submitForm = async (data) => {
      resetResponse();
      try {
        response.status = 'loading';
        const res = await axios.post('http://localhost:8000/api/url', data);
        response.status = 'success';
        miniUrl.value = window.location.host + '/' + res.data.data.key;
      } catch (e) {
        response.status = 'error';
        response.message = e.message;
      }
    }

    return {submitForm, response, miniUrl, resetResponse}
  }
</script>