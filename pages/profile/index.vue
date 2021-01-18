<template>
  <div class="profile-page">

  <div class="user-info">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <img :src="profile.image" class="user-img" />
          <h4>{{profile.username}}</h4>
          <p>
            Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games
          </p>
          <button v-if="author !== user.username" class="btn btn-sm btn-outline-secondary action-btn">
            <i class="ion-plus-round"></i>
            &nbsp;
            Follow {{ profile.username }}
          </button>
        </div>

      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">

      <div class="col-xs-12 col-md-10 offset-md-1">
        <div class="articles-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <nuxt-link 
              class="nav-link" 
              :class="{
                active: tab === 'my_articles'
              }"
              exact
              :to="{
                name: 'profile',
                query: {
                  tab: 'my_articles'
                }
              }">My Articles</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link 
              class="nav-link" 
              :class="{
                active: tab === 'favorited_articles'
              }"
              exact
              :to="{
                name: 'profile',
                query: {
                  tab: 'favorited_articles'
                }
              }">Favorited Articles</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="article-preview">
          <div 
          class="article-preview"
          v-for="article in articles"
          :key="article.slug"
          >
              <div class="article-meta">
                  <nuxt-link :to="'/profile/'+article.author.username"><img :src="article.author.image" /></nuxt-link>
                  <div class="info">
                      <nuxt-link :to="'/profile/'+article.author.username" class="author">{{ article.author.username }}</nuxt-link>
                      <span class="date">{{ article.createdAt | date('MMM DD YYYY') }}</span>
                  </div>
                  <button 
                  @click="onFavorite(article)" 
                  class="btn btn-outline-primary btn-sm pull-xs-right"
                  :class="{
                      active: article.favorited
                  }"
                  :disabled="article.favoritedisabled" 
                  >
                      <i class="ion-heart"></i> {{ article.favoritesCount}}
                  </button>
              </div>
              <nuxt-link :to="'/article/'+ article.slug" class="preview-link">
                  <h1>{{ article.description }}</h1>
                  <p>{{ article.body }}</p>
                  <span>Read more...</span>
              </nuxt-link>
          </div>
        </div>

      </div>

    </div>
  </div>

</div>
</template>

<script>
import { getProfiles } from '@/api/profile'
import { getArticles } from '@/api/article'
import { mapState } from 'vuex'
import articleMeta from '../article/component/articleMeta'
export default {
    middleware: 'auth',
    components: {
      articleMeta
    },
    data() {
      return {
        profile: {}
      }
    },
    async asyncData({ query, params, store }) {
      const { tab="my_articles" } = query
      const { username: author } = params
      let obj
      if(tab === 'favorited_articles') {
        obj = { favorited: author }
      }else {
        obj = { author }
      }
      const { data } = await getArticles(obj)
      const { articles } = data
      return {
        tab,
        articles,
        author
      }
    },
    watchQuery: ['tab'],
    computed: {
      ...mapState(['user'])
    },
    created() {
      this.getProfile()
    },
    methods: {
      async getProfile() {
        const { username } = this.$route.params
        const { data } = await getProfiles(username)
        this.profile = data.profile
      }
    }
}
</script>

<style>

</style>