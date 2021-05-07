<template>
  <section class="contact_section">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-6" style="padding: 0">
          <div class="full">
            <div id="map"></div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6" style="padding: 0">
          <div class="full">
            <div class="contact_form white_heading_border">
              <div class="contact_form_inner">
                <div
                  class="full_heading white_fonts heading_main heading_style_1"
                >
                  <h2>Contact <span>us</span></h2>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
                <div class="form_contact">
                  <!-- form -->
                  <form action="index.html">
                    <fieldset>
                      <div class="field">
                        <input
                          type="text"
                          name="name"
                          v-model="name"
                          placeholder="Your name"
                          required=""
                        />
                      </div>
                      <div class="field">
                        <input
                          type="text"
                          name="phone"
                          v-model="phone"
                          placeholder="Your phone"
                          required=""
                        />
                      </div>
                      <div class="field">
                        <input
                          type="email"
                          name="email"
                          v-model="email"
                          placeholder="Email"
                          required=""
                        />
                      </div>
                      <div class="field">
                        <textarea
                          name="message"
                          placeholder="Message"
                          v-model="message"
                          required=""
                        ></textarea>
                      </div>
                      <div class="field">
                        <button class="field_bt">Send</button>
                      </div>
                    </fieldset>
                  </form>
                  <!-- end form -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "ContactUs",
  data() {
    return {
      email: "",
      name: "",
      phone: "",
      message: "",
    };
  },
};
</script>