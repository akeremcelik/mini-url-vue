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
        await axios.post('http://localhost:8000/api/contact', data);
        response.status = 'success';
      } catch (e) {
        response.status = 'error';
        response.message = e.message;
      }
    }

    return {submitForm, response}
  }
</script>