import Vue from 'vue'
import VueRouter from 'vue-router'
import PostList from './PostList.vue'
import Post from './Post.vue'
import ApolloClient  from 'apollo-boost';
import VueApollo from 'vue-apollo'
import TopicPostList from './TopicPostList.vue'
import AuthorPostList from './AuthorPostList.vue'
import NotFound from './NotFound.vue'
window.Vue = Vue;

Vue.use(VueRouter);
Vue.use(VueApollo)

const routes = [
    {
        path: '/',
        name: 'home',
        component: PostList
    },
    {
        path: '/post/:id',
        name: 'post',
        component: Post
    },
    {
        path: '/topics/:slug',
        name: 'topics',
        component: TopicPostList
    },
    {
        path:'/authors/:id',
        name:'authors',
        component: AuthorPostList
    },
    {
        path:'*',
        name:'404',
        component:NotFound
    }
]

const router = new VueRouter({
    mode:'history',
    routes,
    
})



const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://127.0.0.1:8000/graphql',
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

const app = new Vue({
    el: '#app',
    router,
    apolloProvider,
});
