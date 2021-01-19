<template>
  <div>
        <div class="home-page">

            <div class="banner">
                <div class="container">
                <h1 class="logo-font">conduitAAA</h1>
                <p>AAA place to share your knowledge.</p>
                </div>
            </div>

            <div class="container page">
                <div class="row">

                <div class="col-md-9">
                    <div class="feed-toggle">
                        <ul class="nav nav-pills outline-active">
                            <li v-if="!!user" class="nav-item">
                                <nuxt-link 
                                class="nav-link"
                                :class="{
                                    active: tab === 'your_feed' 
                                }" 
                                exact
                                :to="{
                                    name: 'home',
                                    query: {
                                        tab: 'your_feed'
                                    }
                                }">Your Feed</nuxt-link>
                            </li>
                            <li class="nav-item">
                                <nuxt-link 
                                class="nav-link"
                                :class="{
                                    active: tab === 'global_feed' 
                                }" 
                                exact
                                :to="{
                                    name: 'home',
                                    query: {
                                        tab: 'global_feed'
                                    }
                                }">Global Feed</nuxt-link>
                            </li>
                            <li v-if="!!tag" class="nav-item">
                                <nuxt-link 
                                class="nav-link"
                                :class="{
                                    active: tab === 'tag' 
                                }" 
                                exact
                                :to="{
                                    name: 'home',
                                    query: {
                                        tab: 'tag',
                                        tag: tag
                                    }
                                }">#{{tag}}</nuxt-link>
                            </li>
                        </ul>
                    </div>

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

                    <ul class="pagination">
                        <li 
                        v-for="item in totalPage"
                        :key="item"
                        :class="item === page ? 'page-item active': 'page-item'"
                        >
                            <nuxt-link 
                            class="page-link ng-binding" 
                            :to="'/?page='+item"
                            >{{ item }}</nuxt-link>
                        </li>
                    </ul>

                </div>

                <div class="col-md-3">
                    <div class="sidebar">
                    <p>Popular Tags</p>

                    <div class="tag-list">
                        <nuxt-link 
                        v-for="item in tags"
                        :key="item"
                        :to="{
                            name: 'home',
                            query: {
                                tab: 'tag',
                                tag: item
                            }
                        }" 
                        class="tag-pill tag-default"
                        >{{ item }}</nuxt-link>
                    </div>
                    </div>
                </div>

                </div>
            </div>

        </div>
  </div>
</template>

<script>
import { getArticles, getFeedArticles, unFavorite , favorite } from '@/api/article'
import { getTags } from '@/api/tags'
import { mapState } from 'vuex'
export default {
    name: 'homeIndex',
    async asyncData({ query }) {
        const page = Number(query.page) || 1
        const limit = 20
        const { tag, tab = "global_feed" } = query
        const loadArticles = tab === "your_feed"
        ? getFeedArticles
        : getArticles
        const [ articlesData, tagsData ] = await Promise.all([
            loadArticles({
                limit,
                tag,
                offset: ( page - 1 ) * limit
            }),
            getTags()
        ])
        const { articles, articlesCount } = articlesData.data
        const { tags } = tagsData.data
        articles.forEach(item=>item.favoritedisabled = false)
        return {
            articles,
            articlesCount,
            page,
            limit,
            tags,
            tag,
            tab
        }
    },
    watchQuery: ['page', 'tag', 'tab'],
    computed: {
        ...mapState(['user']),
        totalPage() {
            return Math.ceil(this.articlesCount / this.limit)
        }
    },
    methods: {
        async onFavorite(article) {
            article.favoritedisabled = true
            if(!article.favorited) {
                await favorite(article.slug)
                article.favoritesCount += 1
                article.favorited = true
            }else{
                await unFavorite(article.slug)
                article.favoritesCount -= 1
                article.favorited = false
            }
            article.favoritedisabled = false
        }
    }
} 
</script>

<style>

</style>