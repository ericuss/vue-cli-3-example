<template>
  <div class="users">
    <v-data-table
      :headers="headers"
      :items="users"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td class="text-xs-center">{{ props.item.userName }}</td>
        <td class="text-xs-center">{{ props.item.email }}</td>
      </template>
      <template slot="no-data">
        <v-alert :value="true" color="error" icon="warning">
          Sorry, nothing to display here :(
        </v-alert>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Users',
  mounted() {
    this.getUsers();
  },
  data() {
    return {
      headers: [
        { text: 'User name', value: 'userName' },
        { text: 'Email', value: 'email' },
      ],
    };
  },
  computed: {
    ...mapGetters(['users']),
  },
  methods: {
    ...mapActions(['getUsers']),
  },
};
</script>
