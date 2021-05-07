<template>
  <header class="header header_style1">
    <div class="container">
      <div class="row">
        <div class="col-md-9 col-lg-10">
          <div class="logo">
            <a href="index.html"><img src="images/logo.png" alt="#" /></a>
          </div>
          <div class="main_menu float-right">
            <div class="menu">
              <ul class="clearfix">
                <li class="active">
                  <a> <router-link to="/"> Home</router-link></a>
                </li>

                <li>
                  <a> <router-link to="/about"> About</router-link></a>
                </li>
                <li>
                  <a><router-link to="/services">Service</router-link></a>
                </li>
                <li>
                  <a
                    ><router-link to="/screenshots">Screenshots</router-link></a
                  >
                </li>
                <li>
                  <a><router-link to="/pricing">Pricing</router-link></a>
                </li>
                <li>
                  <a><router-link to="/team">Team</router-link></a>
                </li>
                <li>
                  <a><router-link to="/contact">Contact</router-link></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-lg-2">
          <div class="right_bt">
            <a class="bt_main" href="index.html">Get Support</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
</style>
