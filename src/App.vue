<template>
  <div id="wrapper-container">
    <div id="content">
      <SMenu></SMenu>
      <router-view></router-view>
      <back-top></back-top>
      <customer></customer>
      <foot></foot>
    </div>
  </div>


</template>

<script setup>
import {RouterView} from 'vue-router'
import SMenu from './components/bar/menu.vue'
import Foot from './components/bar/footer.vue'
import BackTop from "./components/back-top.vue";
import Customer from "./components/customer.vue";
import {onMounted,nextTick,ref,provide,reactive} from "vue";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import {gsap} from "gsap";
import {SplitText} from "gsap/SplitText";

const gsapParams = reactive({
  smoother:null
})
onMounted(async () => {
  await nextTick(); // 等待所有子组件完成渲染
  // 现在可以安全地访问子组件的DOM元素
  gsapParams.smoother = ScrollSmoother.create({
    wrapper: "#wrapper-container",
    content: "#content",
    smooth: 1,
    normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
    ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
    effects: true,
    preventDefault: true
  });


  // gsap.set(".heading", {
  //   yPercent: -150,
  //   opacity: 1
  // });


});

provide("gsapParams", gsapParams);
</script>

<style scoped>


</style>
