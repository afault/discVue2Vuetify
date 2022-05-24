<template>    

    <div class="kadun_login_page"  >

        <img src="@/assets/images/loginpage/Frame.png" class="frame" alt="Frame">
        <img src="@/assets/images/loginpage/Vector.png" class="vector" alt="VectorFrame">

        <div class="group_114">
            <label  id="titleDisc">DISC</label>
        </div>

        <form>
        <div class="emailSection">
            <input type="text"  class="loginRectangle" id="emailInput" name="Email" placeholder="Email" ><br><br>
        </div>
        <input type="password" class="loginRectangle2" id="passwordInput" name="Password" placeholder="Password" ><br><br>
        <a href="url" class="forgotPassword">Forgot Login Details?</a>

        <router-link :to="{ path: '/MainDashboard' }"><button id="buttonlogin" type="submit"><div id="buttonlogintext">Login</div></button></router-link>

        </form>
        
        <div class="groupFooter">
           <p class="footerSupported">Supported By</p>
           <img src="@/assets/images/loginpage/DigitalLogo.png" class="footerLogo" alt="Footerlogo">

            <div class="footerDiscLogo">
                <label class="footerDisc">DISC</label>
            </div>
            <label class="footerDescription"> No. 15-B & 16-B, Bangunan Wisma Yeap Chor Ee, Pengkalan Weld, 10300 George Town, Pulau Pinang <br><br> contact@disc.my</label>
            <label class="footerCopyright"> © 2022 DISC | Digital Penang | All Right Reserved.</label>

        </div>      

       
            <div class="groupFooter footerRectangle">
                <p class="footerSupported">Supported By</p>
                <img src="@/assets/images/loginpage/DigitalLogo.png" class="footerLogo" alt="Footerlogo">
     
                 <div class="footerDiscLogo">
                     <label class="footerDisc">DISC</label>
                 </div>
                 <label class="footerDescription"> No. 15-B & 16-B, Bangunan Wisma Yeap Chor Ee, Pengkalan Weld, 10300 George Town, Pulau Pinang <br><br> contact@disc.my</label>
                 <label class="footerCopyright" > © 2022 DISC | Digital Penang | All Right Reserved.</label>
     
             </div>      
        

    </div>
</template>

<script lang="ts">
  import Vue from 'vue'

   
  export default Vue.extend({
    name: 'LoginView',
  })
  

 
</script>





<style scoped>
    @import '@/assets/css/styleLogin.css';
    @import 'https://pagecdn.io/lib/easyfonts/fonts.css'
</style>