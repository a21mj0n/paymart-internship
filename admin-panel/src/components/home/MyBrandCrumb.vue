<template>
  <div class="breadcrumb" v-if="links">
    <div class="container">
      <ul class="breadcrumb_list" >
        <li class="breadcrumb_item" v-for="link in links" :key="link.name" >
          <router-link :to="{ name: link.name }" class="breadcrumb_link" >
            {{ link.text }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    links() {
      let links = this.$route.meta.breadcrumbItems || [0];
      let currentRoutePath = 0

      if(links){
        currentRoutePath = links.findIndex(route => route.name == this.$route.name);
        links.slice(0, currentRoutePath + 1)
      }

      return links

    }
  }
};
</script>

<style lang="scss" scoped>
$green-color: #72e019;
.breadcrumb {
  padding: 30px 0px;
  background: #fbfbfc;
  border-bottom: 1px solid #e4e7ed;
  margin-bottom: 30px;
  &_list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    list-style-type: none;
  }
  &_item {
    font-size: 12px;
    font-weight: 500;
    text-transform: uppercase;
  }
  &_link {
    margin-left: 5px;
    color: #000;
    &.router-link-exact-active {
      color: $green-color;
      font-size: 14px;
    }
  }
}
</style>