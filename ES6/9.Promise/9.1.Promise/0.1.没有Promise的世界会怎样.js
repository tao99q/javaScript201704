/**
 * Created by Weil on 16/6/19.
 */

// 假设你有一个大大的数据库 可以做到
// 照片 -> 姓名 -> 电话 -> 微信 -> 微博

function uploadPhoto () {
  // 通过照片获得人名
  $.ajax({
    url: 'getPersonNameByPhoto',
    method: 'xxx',
    data: 'some img file',
    success: (res) => {

      // 通过姓名或者电话
      $.ajax({
        url: 'getPhoneNumByPersonName',
        method: 'xxx',
        data: res.PersonName,
        success: (res) => {

          // 通过电话获得微信
          $.ajax({
            url: 'getWeChatByPhoneNum',
            method: 'xxx',
            data: res.PhoneNum,
            success: (res) => {

              // 通过微信获得微博
              $.ajax({
                url: 'getWeiboByWeChat',
                method: 'xxx',
                data: res.WeChat,
                success: (res) => {
                  console.log(res.weibo, 'Get it~');
                },
                error: (err) => {

                }
              });
            },
            error: (err) => {

            }
          });
        },
        error: (err) => {

        }
      });
    },
    error: (err) => {

    }
  });
}


// 如果封装成一个一个函数,也进进是这个样子的
function getPersonNameByPhoto (succCb, errCb, imgFile) {
  $.ajax({
    url: 'getPersonNameByPhoto',
    method: 'xxx',
    data: imgFile,
    success: function (res) {
      succCb && succCb(res);
    },
    error: function (err) {
      errCb && errCb(err);
    }
  })
}

function getPhoneNumByPersonName (succCb, errCb, personName) {
  $.ajax({
    url: 'getPersonNameByPhoto',
    method: 'xxx',
    data: personName,
    success: function (res) {
      succCb && succCb(res);
    },
    error: function (err) {
      errCb && errCb(err);
    }
  })
}

function getWeChatByPhoneNum (succCb, errCb, phoneNum) {
  $.ajax({
    url: 'getWeChatByPhoneNum',
    method: 'xxx',
    data: phoneNum,
    success: function (res) {
      succCb && succCb(res);
    },
    error: function (err) {
      errCb && errCb(err);
    }
  })
}

function getWeiboByWeChat (succCb, errCb, weChatName) {
  $.ajax({
    url: 'getWeiboByWeChat',
    method: 'xxx',
    data: weChatName,
    success: function (res) {
      succCb && succCb(res);
    },
    error: function (err) {
      errCb && errCb(err);
    }
  })
}

function getWeiboByPhoto (imgFile, cb) {
  getPersonNameByPhoto(function (personName) {
    getPhoneNumByPersonName(function (phoneNum) {
      getWeChatByPhoneNum(function (weChatName) {
        getWeiboByWeChat(function (weibo) {
          cb(weibo);
          //console.log(weibo);
        }, null, weChatName);
      }, null, phoneNum)
    }, null, personName)
  }, null, imgFile);
}
































