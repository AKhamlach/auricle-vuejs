<template>
  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 margin_bottom_30">
    <div class="full">
      <div class="footer_blog_2 width_9">
        <h3>Blog</h3>
      </div>
      <div class="blog_post_footer" v-for="item in items" :key="item.id">
        <div class="blog_post_img">
          <img width="80" height="80" :src="item.link" alt="#" />
        </div>
        <div class="blog_post_cont">
          <p class="date">{{ item.date }}</p>
          <p class="post_head">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Blog",
  data() {
    return {
      items: [
        {
          id: 1,
          link: "images/scr1.png",
          date: "July 22, 2015",
          text: "Round and round like a carousel",
        },
        {
          id: 2,
          link: "images/scr2.png",
          date: "July 22, 2015",
          text: "Round and round like a carousel",
        },
        {
          id: 3,
          link: "images/scr3.png",
          date: "July 22, 2015",
          text: "Round and round like a carousel",
        },
      ],
    };
  },
};
</script>