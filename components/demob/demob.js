// conponents/demob/demob.js
Component({
  /**
   * Component properties
   */
  properties: {

  },

  /**
   * Component initial data
   */
  data: {

  },

  /**
   * Component methods
   */
  methods: {
    ziFun(){
      this.triggerEvent("ziPao",'子组件数据')
    }
  }
})
