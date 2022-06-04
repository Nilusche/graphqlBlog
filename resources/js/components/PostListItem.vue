<template>
  <div>
      <router-link :to="{name:'post', params: {id:post.id}}">
        <h4 class="text-2xl pb-3 font-semibold hover:underline">{{post.title}}</h4>
      </router-link>
      <p class="text-gray-600 pb-3">{{post.lead}}</p>
      <div class="text-sm text-gray-600">
          By <router-link :to="{name:'authors', params:{id:post.author.id}}" class="underline hover:text-black">{{post.author.name}}</router-link> &nbsp; in <router-link :to="{name:'topics', params:{slug:post.topic.slug}}" class="underline hover:text-black">{{post.topic.name}}</router-link>&nbsp;- {{created_at}}
      </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
    props:['post'],
    computed:{
        created_at(){
            return moment(this.post.created_at).fromNow()
        }
    }
}
</script>

<style>

</style>