<template>
  <div class="warehouse">
      <div class="container">
          <form class="warehouse-form" v-if="openEdit">
              <input type="text" class="input warehouse-form__input" placeholder="Город" v-model="town">
              <input type="text" class="input warehouse-form__input" placeholder="Район" v-model="region">
              <input type="text" class="input warehouse-form__input" placeholder="Цена аренды" v-model="rent">
              <input type="submit" class="button warehouse-form__button" value="Изменить">
          </form>
          <div class="general__box-head warehouse__box">
              <div class="general__item-head warehouse__item warehouse__number">
                  №
              </div>
              <div class="general__item-head warehouse__item">
                  Назва города
              </div>
              <div class="general__item-head warehouse__item">
                  Район
              </div>
              <div   class="general__item-head warehouse__item">
                  Цена аренды
              </div>
              <div  class="general__item-head warehouse__item">
                  Сума товара
              </div>
              <div   class="general__item-head warehouse__item">
                  Редактировать
              </div>
              <div  class="general__item-head warehouse__item">
                  Удалить
              </div>
          </div>
          <div class="general__box warehouse__box">
              <div class="general__item warehouse__item warehouse__number">
                  1
              </div>
              <div class="general__item warehouse__item">
                  <router-link :to="{name: 'Town', params: {url: 1}}" class="warehouse__item--link">
                    ШПТ
                  </router-link>
              </div>
              <div class="general__item warehouse__item">
                  Хмельницький
              </div>
              <div class="general__item warehouse__item">
                  1000
              </div>
              <div  class="general__item warehouse__item">
                  <div>
                      5555
                  </div>
              </div>
              <div @click="editwarehouse(1, 2, 2, 2)" class="general__item warehouse__item edit">
                  Редактировать
              </div>
              <div  class="general__item warehouse__item delete">
                  Удалить
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data: () => ({
        id: '',
        town: '',
        region: '',
        rent: '',
        openEdit: false
    }),
    methods: {
        editwarehouse(id,town,region,rent) {
            this.id = id
            this.town = town
            this.region = region
            this.rent = rent
            this.openEdit = true
        },
    },
}
</script>


<style lang="scss" scoped>
    .warehouse-form {
        margin-bottom: 30px;
        &__input {
            margin-right: 20px;
        }
    }
    .warehouse {
        margin: 30px 0px;
    }
    .warehouse__number {
        width: 20%;
    }
    .warehouse__item--link {
        color: #000;
        &:hover {
            color: #32a84f;
        }
    }
</style>
