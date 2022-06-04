<script>
  import {reactive} from "vue";
  import axios from 'axios'

  export default function() {
    const response = reactive({
      status: '',
      message: ''
    })
    const resetResponse = () => {
      response.status = '';
      response.message = '';
    }

    const submitForm = async (data) => {
      resetResponse();
      try {
        response.status = 'loading';
        await axios.post(import.meta.env.VITE_API_URL + '/contact', data);
        response.status = 'success';
      } catch (e) {
        response.status = 'error';
        response.message = e.response.data ? e.response.data.message : e.message;
      }
    }

    return {submitForm, response}
  }
</script>