<template>
  <section class="layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="full text_align_center">
            <div class="heading_main center_head_border heading_style_1">
              <h2>Our Team</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-6 col-md-6 col-lg-3"
          v-for="person in people"
          :key="person.id"
        >
          <div class="full team_blog">
            <div class="team_member_img">
              <img :src="images / t1.png" alt="#" />
            </div>
            <div class="team_imform">
              <p class="team_mem_name">{{ person.name }}</p>
              <p>{{ person.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "OurTeam",
  data() {
    return {
      people: [
        {
          id: 1,
          name: "JD Adams",
          position: "Designer",
          image: "image/t1.png",
        },
        {
          id: 2,
          name: "Rinkal oberol",
          position: "Developer",
          image: "image/t2.png",
        },
        { id: 3, name: "Jason Deol", position: "Seo", image: "image/t3.png" },
        {
          id: 4,
          name: "Michellel Nathan",
          position: "Designer",
          image: "image/t4.png",
        },
      ],
    };
  },
};
</script>