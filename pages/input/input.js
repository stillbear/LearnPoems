// input.js
Page({

  data: {
    index :  0,
    button:['','','']
  },

  word1: function () {
    this.data.button[this.data.index] = '我'
    this.data.index+=1
    this.data.index = this.data.index % 3
    console.log(this.data.index)
    console.log(this.data.button)
    this.setData({
      //index: index + 1,
      button:this.data.button
    })
  },
   
  word2: function () {
    this.data.button[this.data.index] = '爱'
    this.data.index += 1
    this.data.index = this.data.index % 3
    console.log(this.data.index)
    console.log(this.data.button)
    this.setData({
      //index: index + 1,
      button: this.data.button
    })
  },

  word3: function () {
    this.data.button[this.data.index] = '你'
    this.data.index += 1
    this.data.index = this.data.index % 3
    console.log(this.data.index)
    console.log(this.data.button)
    this.setData({
      //index: index + 1,
      button: this.data.button
    })
  },
  
  text1: function () {
    this.data.button[this.data.index] = ''
    this.data.index += 1
    this.data.index = this.data.index % 3
    console.log(this.data.index)
    console.log(this.data.button)
    this.setData({
      //index: index + 1,
      button: this.data.button
    })
  },

  text2: function () {
    this.data.button[this.data.index] = ''
    this.data.index += 1
    this.data.index = this.data.index % 3
    console.log(this.data.index)
    console.log(this.data.button)
    this.setData({
      //index: index + 1,
      button: this.data.button
    })
  },

  text3: function () {
    this.data.button[this.data.index] = ''
    this.data.index += 1
    this.data.index = this.data.index % 3
    console.log(this.data.index)
    console.log(this.data.button)
    this.setData({
      //index: index + 1,
      button: this.data.button
    })
  },

})