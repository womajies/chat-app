<template>
  <div v-if="getUsers.length" class="dialogs">
    <div class="dialogs-search">
      <UFormSearch v-model="filterSearch" placeholder="Поиск ..." />
    </div>

    <DialogsList :users="filteredUsers" />
  </div>
  <div class="empty-dialogs" v-else>
    <h2 class="empty-dialogs__title">Тут пусто</h2>
    <p class="empty-dialogs__text">Вы еще никому не писали</p>
  </div>
</template>

<script>
import UFormSearch from '@/components/ui/form/UFormSearch.vue'
import DialogsList from './DialogsList.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'dialogsWrapper',

  components: { UFormSearch, DialogsList },

  computed: {
    ...mapGetters(['getUsers']),

    filteredUsers() {
      if (this.filterSearch?.length > 0) {
        return this.getUsers.filter(item => item.username.toLowerCase().includes(this.filterSearch.trim().toLowerCase()));
      } else {
        return this.getUsers;
      }
    }
  },

  data() {
    return {
      filterSearch: '',
    }
  },
}
</script>

<style lang="scss" scoped>
.dialogs {
  overflow: hidden;
  border: $border-width solid rgba(255, 255, 255, 0.07);
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
  backdrop-filter: blur(5px);

  @include on-breakpoint('md') {
    border-radius: $border-radius-block;
  }

  &-search {
    padding: 25px 25px 15px;

    @include on-breakpoint('md') {
      padding: 20px;
    }

    @include on-breakpoint('xxl') {
      padding: 30px;
    }
  }
}

.empty-dialogs {
  padding: 20px 25px;
  border: $border-width solid rgba(255, 255, 255, 0.07);
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 2px 0px 10px 0px rgba(6, 3, 9, 0.05), 30px 25px 48px 8px rgba(6, 3, 9, 0.10);
  backdrop-filter: blur(5px);

  @include on-breakpoint('md') {
    padding: 20px;
    border-radius: $border-radius-block;
  }

  @include on-breakpoint('xxl') {
    padding: 30px;
  }

  &__title {
    font-size: 13px;
    line-height: 20px;
    font-weight: 700;
    color: $white-color;

    @include on-breakpoint('md') {
      font-size: 14px;
      line-height: 30px;
    }

    @include on-breakpoint('xl') {
      font-size: 16px;
      line-height: normal;
    }

    @include on-breakpoint('xxl') {
      font-size: 18px;
    }
  }

  &__text {
    margin-top: 5px;
    font-size: 13px;
    line-height: 22px;
    color: $accent-color;

    @include on-breakpoint('md') {
      font-size: 14px;
      line-height: 24px;
    }

    @include on-breakpoint('xl') {
      margin-top: 10px;
    }

    @include on-breakpoint('xxl') {
      margin-top: 15px;
      font-size: 16px;
      line-height: 28px;
    }
  }
}
</style>
