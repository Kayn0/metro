<template>
  <div class="home">
    <div className="heading">
      <h1>Buying or selling a home?</h1>
      <h1 className="bold">We can help</h1>
      <h5>Affordable, experienced Conveyors, with over 30 years in Sydney</h5>
    </div>

    <div className="link-container">
      <div className="links">
        <div className="row">
          <div className="link button animate">
            <div>Buying Property</div>
            <div className="label">More</div>
          </div>

          <div className="link button animate">
            <div>Selling Property</div>
            <div className="label">More</div>
          </div>
        </div>

        <div className="row">
          <div className="link button animate">
            <div>Transferring Property</div>
            <div className="label">More</div>
          </div>

          <div className="link button animate">
            <div>Financing Property</div>
            <div className="label">More</div>
          </div>
        </div>
      </div>
      <button className="quote-btn">Request A Quote</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
};
</script>

<style scoped>
.home {
  align-items: center;
  background: linear-gradient(#19292e, rgba(0, 0, 0, 0)),
    url(../assets/bg.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 81px - 54px); /* screen height - navbar - footer */
}

.heading {
  color: #fff;
  justify-content: center;
  margin-top: 100px;
  text-align: left;
}

h1 {
  font-weight: 400;
  font-size: 44px;
  margin: 0;
  text-transform: uppercase;
}

h1.bold {
  font-weight: 700;
  padding-top: 5px !important;
}

h5 {
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  padding-top: 20px;
}

.link-container {
  display: flex;
  margin-top: auto;
  width: 100vw;
}

.links {
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;
}

.row {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.link {
  align-items: center;
  background: #fff;
  border-left: 10px solid #8fe2c2 !important;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: #3a525c;
  cursor: pointer;
  display: flex;
  font-weight: bold;
  height: 62px;
  margin: 15px;
  padding: 0 20px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  width: 100%;
}

.link .label {
  margin-left: auto;
  background: #d1dfe8;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 20px;
  padding: 6px 12px;
  color: #3a525c;
  transition: all 0.3s ease;
}

.quote-btn {
  font-family: "Helvetica", sans-serif;
  background-color: #dd5761;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  color: #fff;
  cursor: pointer;
  font-size: 22px;
  font-weight: 700;
  height: 90px;
  margin: auto 30px 30px 0;
  padding: 0 20px;
  text-transform: uppercase;
  min-width: 300px;
}
</style>
