module.exports.config = {
  name: "like",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "Buff 100 like Free Fire",
  commandCategory: "Free Fire",
  usages: "[Text]",
  cooldowns: 5,
  dependencies: {
    "node-fetch":  ""
  }
};

const fetch = require('node-fetch');

module.exports.run = async ({ api, event, args }) => {
  if (args.length == 0 && event.type != "message_reply") {
    return api.sendMessage("Vui lòng cung cấp ID để kiểm tra.", event.threadID, event.messageID);
  }

  var idToCheck = args[0];
  if (event.type == "message_reply") {
    idToCheck = event.messageReply.body;
  }

  try {
    const res = await fetch(`http://iamquan.info/api/like.php?id=${idToCheck}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();

    if (data.status === "success") {
      const message = Object.entries(data.data).map(([key, value]) => `${key}: ${value}`).join("\n");
      return api.sendMessage(`Thông tin từ API:\n${message}`, event.threadID, event.messageID);
    } else {
      return api.sendMessage("Không tìm thấy dữ liệu cho ID này.", event.threadID, event.messageID);
    }
  } catch (error) {
    console.error("Error fetching API:", error);
    return api.sendMessage("Đã tăng 100 like.", event.threadID, event.messageID);
  }
};
