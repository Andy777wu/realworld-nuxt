<template>
  <div>
    <nav class="navbar navbar-light">
        <div class="container">
          <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
          <ul class="nav navbar-nav" >
            <li class="nav-item">
              <nuxt-link class="nav-link" exact to="/">Home</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/edit">
                <i class="ion-compose"></i>&nbsp;New Post
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/setting">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
            </li>
          </ul>
        </div>
      </nav>

      <nuxt-child />

      <footer>
        <div class="container">
          <nuxt-link to="/" class="logo-font">conduit</nuxt-link>
          <span class="attribution">
            An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
          </span>
        </div>
      </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'layoutIndex',
    computed: {
      ...mapState(['user'])
    }
}
</script>

<style>

</style>