const CesiumWindyData =  require('../mock/cesiumwindy.data');
const CesiumLocusData =  require('../mock/cesiumlocus.data');

const windyController = {
    
    getWindy: async function(req,res,next){
      try{
        res.json({
          code: 200,
          message: "操作成功",
          data: CesiumWindyData
        })
      }catch(e){
        res.json({ code: 0, message: "操作失败", data: e })
      }
    },

    getPlan: async function(req,res,next){
      try{
        res.json({
          code: 200,
          message: "操作成功",
          data: CesiumLocusData
        })
      }catch(e){
        res.json({ code: 0, message: "操作失败", data: e })
      }
    }
  }
  
  module.exports = windyController;