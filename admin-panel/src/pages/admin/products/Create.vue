<template>
  <div class="content">
    <form class="from" @submit.prevent="createProduct" enctype="">
      <input
        class="name"
        placeholder="Введите название товара"
        type="text"
        v-model="name"
      />
      <input
        class="brand"
        placeholder="Введите фирму производителя"
        type="text"
        v-model="brand"
      />
      <input
        class="color"
        placeholder="Введите цвет"
        type="text"
        v-model="color"
      />
      <input
        class="size"
        placeholder="Введите размер"
        type="text"
        v-model="size"
      />
      <input
        class="price"
        placeholder="Назовите цену"
        type="text"
        v-model="price"
      />
      <div class="add__img">
        <label class="label__add-img-wrapper">
          <input type="file" class="hide" @change="selectImage" />
          <div class="label__add-img">
            <i class="fa fa-camera" aria-hidden="true"></i>
            <img :src="mainImg" ref="main" class="prew__img" />
          </div>
        </label>
        <label v-if="secondVisible" class="label__add-img-wrapper">
          <input type="file" class="hide" @change="selectImage2" />
          <div class="label__add-img">
            <i class="fa fa-camera" aria-hidden="true"></i>
            <img :src="secondImg" ref="second" class="prew__img" />
          </div>
        </label>
        <label v-if="threeVisible" class="label__add-img-wrapper">
          <input type="file" class="hide" @change="selectImage3" />
          <div class="label__add-img">
            <i class="fa fa-camera" aria-hidden="true"></i>
            <img :src="threeImg" ref="three" class="prew__img" />
          </div>
        </label>
        <label v-if="fourVisible" class="label__add-img-wrapper">
          <input type="file" class="hide" @change="selectImage4" />
          <div class="label__add-img">
            <i class="fa fa-camera" aria-hidden="true"></i>
            <img :src="fourImg" ref="four" class="prew__img" />
          </div>
        </label>
      </div>
      <button class="btn">Создать</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "createProduct",
  data() {
    return {
      id: "",
      img: "",
      name: "",
      brand: "",
      color: "",
      size: "",
      price: "",
      qty: 0,
      amount: "",

      mainImg: null,
      secondImg: null,
      threeImg: null,
      fourImg: null,

      secondVisible: false,
      threeVisible: false,
      fourVisible: false,
    };
  },
  methods: {
    async createProduct() {
      const productData = {
        id: Date.now(),
        createdAt: new Date().toLocaleString(),
        img: this.img,
        name: this.name,
        brand: this.brand,
        color: this.color,
        size: this.size,
        price: this.price,
        qty: 0,
        amount: "",
      };
      await axios.post(
        "https://61ade31fd228a9001703b022.mockapi.io/api/products",
        productData
      );
      this.img =
        this.name =
        this.brand =
        this.color =
        this.size =
        this.price =
          "";
    },
    selectImage(e) {
      const file = e.target.files[0];
      if (/image/.test(file.type)) {
        const formData = new FormData();
        formData.append("product__image", file);
        const preview = URL.createObjectURL(file);
        this.mainImg = preview;
        this.secondVisible = true;
        this.$refs.main.classList.remove('hide')
      } else {
        this.$refs.main.classList.add('hide')
        this.secondVisible = false;
        console.log(this.mainImg);
      }
    },
    selectImage2(e) {
      const file = e.target.files[0];
      if (/image/.test(file.type)) {
        const formData = new FormData();
        formData.append("product__image", file);
        const preview = URL.createObjectURL(file);
        this.secondImg = preview;
        this.threeVisible = true;
        this.$refs.second.classList.remove('hide')
      } else {
        this.$refs.second.classList.add('hide')
        this.secondImg = null;
        this.threeVisible = false;
      }
    },
    selectImage3(e) {
      const file = e.target.files[0];
      if (/image/.test(file.type)) {
        const formData = new FormData();
        formData.append("product__image", file);
        const preview = URL.createObjectURL(file);
        this.threeImg = preview;
        this.fourVisible = true;
        this.$refs.three.classList.remove('hide')
      } else {
        this.$refs.three.classList.add('hide')
        this.fourVisible = false;
        this.threeImg = null;
      }
    },
    selectImage4(e) {
      const file = e.target.files[0];
      if (/image/.test(file.type)) {
        const formData = new FormData();
        formData.append("product__image", file);
        const preview = URL.createObjectURL(file);
        this.fourImg = preview;
        this.$refs.four.classList.remove('hide')
      } else {
        this.$refs.four.classList.add('hide')
        this.fourImg = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: rgb(238, 238, 238);
  height: calc(100vh - 100px);
  overflow-y: auto;
}
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  ::placeholder {
    font-size: 18px;
  }
  input {
    font-size: 18px;
    padding-left: 15px;
    width: 500px;
    height: 50px;
    margin: 15px 0;
    border-radius: 7px;
    border: 2px solid teal;
    &:focus {
      outline: 3px solid teal;
    }
  }
  .btn {
    margin-top: 20px;
    cursor: pointer;
    padding: 10px 30px;
    background: teal;
    color: white;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
  }
}

.add__img {
  display: flex;
  width: 500px;
  height: 125px;
  margin: 5px;

  .label__add-img-wrapper {
    cursor: pointer;
    padding: 0 5px;
    i {
      color: rgb(163, 159, 159);
      font-size: 20px;
    }
    .label__add-img {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: rgb(99, 98, 98);
      border-radius: 10px;
    }

    width: 25%;
    height: 100%;
    border-radius: 10px;
  }
}
.prew__img {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 10px;
}
.hide {
  display: none;
}
</style>
