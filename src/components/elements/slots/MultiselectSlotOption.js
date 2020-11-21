export default {
  name: 'MultiselectSlotOption',
  props: {
    el$: {
      type: Object,
      required: true
    },
    option: {
      required: true
    },
    search: {
      required: false
    },
  },
  methods: {
    __(expr, data) {
      return this.el$.__(expr, data)
    }
  }
}