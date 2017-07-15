/**
 * Created by Weil on 16/6/25.
 */

function getPersonNameByPhoto (imgFile) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'getPersonNameByPhoto',
      method: 'xxx',
      data: imgFile,
      success: function (res) {
        resolve(res);
      },
      error: function (err) {
        reject(err);
      }
    })
  });
}

function getPhoneNumByPersonName (personName) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'getPersonNameByPhoto',
      method: 'xxx',
      data: personName,
      success: function (res) {
        resolve(res);
      },
      error: function (err) {
        reject(err);
      }
    })
  });
}

function getWeChatByPhoneNum (phoneNum) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'getWeChatByPhoneNum',
      method: 'xxx',
      data: phoneNum,
      success: function (res) {
        resolve(res);
      },
      error: function (err) {
        reject(err);
      }
    })
  });
}

function getWeiboByWeChat (weChatName) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'getWeiboByWeChat',
      method: 'xxx',
      data: weChatName,
      success: function (res) {
        resolve(res);
      },
      error: function (err) {
        reject(err);
      }
    })
  });
}

function getWeiboByPhoto (imgFile) {
  return Promise.resolve(imgFile)
    .then((value) => {
      return getPersonNameByPhoto(value);
    })
    .then((value) => {
      return getPhoneNumByPersonName(value);
    })
    .then((value) => {
      return getWeChatByPhoneNum(value);
    })
    .then((value) => {
      return getWeiboByWeChat(value);
    })
    .catch((err) => {
      return Promise.reject(err);
    })
}

getWeiboByPhoto(imgFile)
  .then((value) => {
    console.log(value, 'isweibo');
  })
  .catch((err) => {
    console.error(err);
  });