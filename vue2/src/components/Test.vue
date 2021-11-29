<template>
  <div>
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="form__control">
        <input
          class="input__style"
          type="text"
          v-bind:placeholder="MyPlaceholder"
          v-bind:value="inputValue"
          v-on:input="inputChangeHandler"
          @keypress.enter="addNewNote"
        />
      </div>
      <button class="btn" v-on:click="addNewNote">добавить</button>
      <hr />
      <ul class="list" v-if="notes.length !== 0">
        <li class="list__item" v-for="(note, idx) in notes" :key="note">
          ({{ idx + 1 }}) {{ toUpperCase(note) }}
          <button class="btn danger" @click="removeNote(idx)">удалить</button>
        </li>
      </ul>
      <div v-else>Заметок пока нет</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      title: "список заметок",
      MyPlaceholder: "введите название заметки",
      inputValue: "",
      notes: [],
    };
  },
  methods: {
    inputChangeHandler(event) {
      this.inputValue = event.target.value;
    },
    addNewNote() {
      if (this.inputValue != "") {
        this.notes.push(this.inputValue);
        this.inputValue = "";
      }
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    removeNote(idx) {
      this.notes.splice(idx, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.input__style {
  width: 100%;
  border: 1px solid #c0c0c0;
  height: 50px;
  font-size: 25px;
  &:focus {
    outline: 0;
  }
}
.btn {
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  color: black;
  padding: 20px;
  margin: 0 20px;
  &:hover {
    color: black;
  }
}
.danger {
  background: red;
  color: white;
  &:hover {
    color: white;
  }
}
.primary {
  background: green;
  color: white;
}
.list__item {
  list-style: none;
  display: flex;
  justify-content: space-between;
}
</style>
