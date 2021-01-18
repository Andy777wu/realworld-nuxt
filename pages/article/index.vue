<template>
  <div class="article-page">
    <div class="banner">
        <div class="container">
            <h1>{{ article.title }}</h1>
            <article-meta :article="article"/>
        </div>
    </div>
    <div class="container page">
        <div class="row article-content">
            <div class="col-md-12">
                <h2 id="introducing-ionic">{{ article.description }}</h2>
                <p v-html="article.body"></p>
            </div>
        </div>
        <hr />
        <div class="article-actions">
            <article-meta :article="article"/>
        </div>
        <div class="row">
            <div class="col-xs-12 col-md-8 offset-md-2">
                <articleComment :slug="slug"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { 
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
} from '@/api/article'
import articleMeta from './component/articleMeta'
import articleComment from './component/articleComment'
import markdownIt from 'markdown-it'
import { mapState } from 'vuex'
export default {
    components: {
        articleMeta,
        articleComment
    },
    async asyncData({ query, params }) {
        const { slug } = params
        const articleData = await getArticle(slug)
        const md = new markdownIt()
        const { article } = articleData.data
        article.body = md.render(article.body)
        
        return {
            article,
            slug
        }   
    },
    computed: {
        ...mapState(['user'])
    },
    head() {
      return {
        title: `${this.article.title}-nuxt`,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: this.article.description
          }
        ]
      }
    }
}
</script>

<style>

</style>