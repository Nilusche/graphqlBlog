<template>
  <div class="container mx-auto px-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 mb-20 mt-20">
        <div v-if="$apollo.loading"></div>
        <div v-else>
            <h2 class="text-4xl"><router-link :to="{name:'home'}" class="text-gray-600 hover:underline">All Posts</router-link>
                <span class="text-gray-600">/</span>{{topic.name}}
            </h2>
            <PostListItem v-for="post in topic.posts" :key="post.id" :post="post" class="mt-10"></PostListItem>
        </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import PostListItem from "./components/PostListItem"
export default {
    components:{
        PostListItem
    },
    apollo:{
        topic:{
            query: gql`
                query($slug:String!){
                    topic(slug: $slug) {
                        id
                        name
                        posts{
                            id
                            title
                            lead
                            created_at
                            author{
                                id
                                name
                            }
                            topic{
                                name
                                slug
                            }
                        }
                    }
                }
            `,
            variables(){
                return {slug: this.$route.params.slug}
            }
        }
    }
}
</script>

<style>

</style>