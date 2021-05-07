<template>
  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-2 margin_bottom_30">
    <div class="full">
      <div class="footer_blog_2">
        <h3>Social</h3>
      </div>
    </div>
    <div class="full">
      <ul class="footer-links">
        <li v-for="item in items" :key="item.id">
          <a href="#"><i :class="item.class"></i> {{ item.text }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Social",
  data() {
    return {
      items: [
        { id: 1, class: "fa fa-facebook", text: " 256 Likes" },
        { id: 2, class: "fa fa-github", text: " 57+ Projects" },
        { id: 3, class: "fa fa-twitter", text: " 1,258 Followers" },
        { id: 4, class: "fa fa-pinterest", text: " 2538+ Pins" },
      ],
    };
  },
};
</script>