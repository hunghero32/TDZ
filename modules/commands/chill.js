module.exports.config = {
  name: "chill",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "hưng", //Ai viết mdl quên mẹ rồi nên t thay thành tên t !! Tất cả video dược up bởi hưng
  description: "RanDom Video Gái",
  commandCategory: "no prefix",
  usages: "Gái",
  cooldowns: 0,
  denpendencies: {
      "fs-extra": "",
      "request": ""

  }
};
module.exports.handleEvent = async({ api, event, Threads }) => {
  if (event.body.indexOf("chill") == 0 ||
      event.body.indexOf("lofi") == 0
      )
  //Thay (tên gọi)theo sở thích
  //[ Lưu ý !! Không được để trống ( Tên gọi ) 
  //Hoặc có thể xoá bớt [event.body.indexOf(")==0 ]
  {
      const axios = global.nodemodule["axios"];
      const request = global.nodemodule["request"];
      const fs = global.nodemodule["fs-extra"];
      var link = [
        "https://imgur.com/3CyUmau.mp4",
        "https://imgur.com/wI3hSUJ.mp4",

          
      ];
      var callback = () => api.sendMessage({
          body: `Chill đi bạn nhé`,
          attachment: fs.createReadStream(__dirname + "/cache/1.mp4")
      }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"), event.messageID);
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/1.mp4")).on("close", () => callback());
  }
}
module.exports.run = async({ api, event, args, Users, Threads, Currencies }) => {

};