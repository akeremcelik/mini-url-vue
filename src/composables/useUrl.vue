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
    const url = reactive({})

    const submitForm = async (data) => {
      resetResponse();
      try {
        response.status = 'loading';
        const res = await axios.post(import.meta.env.VITE_API_URL + '/url', data);
        response.status = 'success';
        response.message = res.data;
      } catch (e) {
        response.status = 'error';
        response.message = e.response.data ? e.response.data.message : e.message;
      }
    }

    const getUrl = async (key) => {
      resetResponse();
      try {
        response.status = 'loading';
        const res = await axios.get(import.meta.env.VITE_API_URL + '/url/' + key);
        response.status = 'success';
        response.message = res.data;
      } catch (e) {
        response.status = 'error';
        response.message = e.message;
      }
    }

    return {submitForm, response, resetResponse, getUrl}
  }
</script>