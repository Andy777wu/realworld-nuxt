<template>
  <div class="settings-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Your Settings</h1>

        <form @submit.prevent="updateSetting">
          <fieldset>
              <fieldset class="form-group">
                <input v-model="userObj.image" class="form-control" type="text" placeholder="URL of profile picture">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="userObj.username" class="form-control form-control-lg" type="text" placeholder="Your Name">
              </fieldset>
              <fieldset class="form-group">
                <textarea v-model="userObj.bio" class="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input v-model="userObj.email" class="form-control form-control-lg" type="text" placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="userObj.password" class="form-control form-control-lg" type="password" placeholder="Password">
              </fieldset>
              <button 
              class="btn btn-lg btn-primary pull-xs-right"
              >
                Update Settings
              </button>
          </fieldset>
        </form>
        <button class="btn btn-outline-danger" @click="logout">
          Or click here to logout.
        </button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import cookie from 'js-cookie'
import { updateSet } from '@/api/setting.js'
import { mapState } from 'vuex'

export default {
    middleware: 'auth',
    data() {
      return {
        userObj: {
          username: '',
          image: '',
          password: '',
          email: '',
          bio: ''
        }
      }
    },
    computed: {
      ...mapState(['user'])
    },
    created() {
      this.init()
    },
    methods: {
      init() {
        for (const key in this.user) {
          this.userObj[key] = this.user[key]
        }
      },
      logout() {
        cookie.remove('user')
        this.$store.commit('setUser', null)
        this.$router.push('/login')
      },
      async updateSetting() {
        const user = {} 
        for (const key in this.userObj) {
          if(this.userObj[key]) {
            user[key] = this.userObj[key]
          }
        }
        const { data } = await updateSet({
          user
        })
        this.$store.commit('setUser', data.user)
        this.$router.push({
          name: 'profile',
          params: {
            username: this.user.username
          }
        })
      }
    }
}
</script>

<style>

</style>