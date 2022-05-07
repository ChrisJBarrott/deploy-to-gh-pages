// Pathify
import { make } from 'vuex-pathify'

// Data
const state = {
  drawer: null,
  drawerImage: true,
  mini: false,
  items: [
    {
      title: 'Home',
      icon: 'mdi-apps',
      to: '/',
    },
    {
      title: 'Dashboard',
      icon: 'mdi-view-dashboard',
      items: [{
        title: 'Tables',
        icon: 'mdi-none',
        to: '/dashboard/tables/',
      },
      {
        title: 'Charts',
        icon: 'mdi-none',
        to: '/dashboard/chart/',
      }],
    },
    {
      title: 'Team Management',
      icon: 'mdi-account',
      to: '/management/',
    },
    {
      title: 'Regular Tables',
      icon: 'mdi-clipboard-outline',
      to: '/tables/regular/',
    },
    {
      title: 'Typography',
      icon: 'mdi-format-font',
      to: '/components/typography/',
    },
    {
      title: 'Icons TEST',
      icon: 'mdi-car',
      to: '/components/icons/',
    },
    {
      title: 'Google Maps',
      icon: 'mdi-map-marker',
      to: '/maps/google/',
    },
    {
      title: 'Notifications',
      icon: 'mdi-bell',
      to: '/components/notifications/',
    },
  ],
}

const mutations = make.mutations(state)

const actions = {
  ...make.actions(state),
  init: async ({ dispatch }) => {
    //
  },
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
