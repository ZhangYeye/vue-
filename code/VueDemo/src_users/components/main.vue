<template>
  <div>
    <h2 v-show="firstView">enter name search</h2>
    <h2 v-show="loading">LOADING...</h2>
    <h2 v-show="errorMsg">{{errorMsg}}</h2>
    <div class="row" v-show="users">
      <div class="card" v-for="(user,index) in users" :key="index">
        <a :href="user.url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {

    props: {
      searchName: String
    },

    data () {
      return {
        firstView: true,
        loading: false,
        errorMsg: null,
        users: null
      }
    },
    
    watch: {
      searchName(value) {
        console.log('searchName() ', value)
        // 准备发请求前-->将状态更新为正在请求中
        this.firstView = false
        this.loading = true
        this.errorMsg = null
        this.users = null

        // 发请求
        const url = `https://api.github.com/search/users?q=${value}`
        axios.get(url)
          .then(response => {
            const users = response.data.items.map(item => {
              return {
                url: item.html_url,
                name: item.login,
                avatar_url: item.avatar_url
              }
            })
            // 将状态更新为正在请求成功
            this.loading = false
            this.users = users
          })
          .catch(error => {
            // 将状态更新为正在请求失败
            this.loading = false
            this.errorMsg = '请求失败'
          })

      }
    }
  }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>