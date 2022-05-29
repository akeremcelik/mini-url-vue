<script>
  import {onMounted, watch} from "vue";
  import {useRoute, useRouter} from 'vue-router';
  import useUrl from './useUrl.vue';

  export default {
    setup() {
      const route = useRoute()
      const router = useRouter()
      const {getUrl, response} = useUrl()

      onMounted(() => {
        getUrl(route.params.key);
      })

      watch(response, (newResponse) => {
        if(newResponse.status == 'success')
          window.location.href = response.message.data.url;
        else if(newResponse.status == 'error')
          router.push({name: 'pageNotFound'})
      })
    }
  }
</script>