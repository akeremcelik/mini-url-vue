<script>
  import axios from 'axios'

  export default function() {
    const submitForm = async (data) => {
      await axios.post('http://localhost:8000/api/contact', data);
    }

    return {submitForm}
  }
</script>