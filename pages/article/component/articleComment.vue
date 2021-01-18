<template>
    <div>
        <form class="card comment-form" @submit.prevent="postComment">
            <div class="card-block">
                <textarea v-model="myComment" class="form-control" placeholder="Write a comment..." rows="3"></textarea>
            </div>
            <div class="card-footer">
                <img :src="user.image" class="comment-author-img" />
                <button 
                class="btn btn-sm btn-primary"
                >
                    Post Comment
                </button>
            </div>
        </form>
        <div
        v-for="comment in comments"
        :key="comment.id"
        class="card"
        >
            <div class="card-block">
                <p class="card-text">{{ comment.body }}</p>
            </div>
            <div class="card-footer">
                <nuxt-link
                :to="{
                    name: 'profile',
                    params: {
                        username: comment.author.username
                    }
                }" 
                class="comment-author"
                >
                    <img :src="comment.author.image" class="comment-author-img" />
                </nuxt-link>
                &nbsp;
                <nuxt-link
                :to="{
                    name: 'profile',
                    params: {
                        username: comment.author.username
                    }
                }" 
                class="comment-author"
                >
                    {{ comment.author.username }}
                </nuxt-link>
                <span class="date-posted">{{ comment.createdAt | date}}</span>
                <span
                v-if="comment.author.username === user.username"
                class="mod-options"
                @click="delCommet(comment)"
                >
                    <i class="ion-trash-a"></i>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { getComments, deleteComments } from '@/api/article'
export default {
    name: 'articleComment',
    props: {
        slug: {
            type: String
        }
    },
    data() {
        return {
            myComment: '',
            comments: []
        }
    },
    computed: {
        ...mapState(['user'])
    },
   created() {
       this.getList()
    },
    methods: {
        async getList() {
            const { data } = await getComments(this.slug)
            this.comments = data.comments
        },
        async delCommet(comment) {
            await deleteComments(this.slug, comment.id)
            this.getList()
        },
        async postComment() {
            if(!this.myComment) return
            // 添加评论
            await addComment({
                comment: {
                    body: this.myComment
                }
            }, this.slug)
            this.myComment = ''
            this.getList()
        }
    }
}
</script>

<style>

</style>