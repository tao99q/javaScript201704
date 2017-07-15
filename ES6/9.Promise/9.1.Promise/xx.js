// 获取所有同学的信息
function getStudentList () {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'http://localhost:3333/getStudentList',
      type: 'get',
      success: function (list) {
        resolve(list);
      },
      error: function (err) {
        reject(err);
      }
    })
  })
}

// 根据id获取同学的信息(信息中有班级)
function getStudentInfo (studentId) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'http://localhost:3333/getStudentInfo',
      type: 'post',
      data: {
        studentId: studentId
      },
      success: function (studentInfo) {
        setTimeout(() => {
          resolve(studentInfo);
        }, 1000);
      },
      error: function (err) {
        reject(err);
      }
    })
  })
}

// 根据班级获取本班级所有的同学
function getClassStudents (className) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: 'http://localhost:3333/getClassStudents',
      type: 'post',
      data: {
        'class': className
      },
      success: function (students) {
        setTimeout(() => {
          resolve(students);
        }, 500);
      },
      error: function (err) {
        reject(err);
      }
    })
  })
}

// 通过学生姓名获取该学生班级所有人
function getMyClassStudents (myName) {
  return new Promise((resolve, reject) => {
    // 获取所有同学的信息
    getStudentList()
      .then((studentList) => {
        debugger;
        clearTime();
        let selectStudent = studentList.find(function (item) {
          return item.name == myName;
        });
        //console.log(selectStudent.studentId);
        //debugger;
        return selectStudent.studentId;
      })
      .then((studentId) => {
        debugger;
        clearTime();
        // 根据id获取同学的信息(信息中有班级)
        return getStudentInfo(studentId)
      })
      .then((studentInfo) => {
        debugger;
        clearTime();
        return getClassStudents(studentInfo.class);
      })
      .then((students) => {
        debugger;
        //kkk+111
        resolve(students);
      })
      .catch((err) => {
        debugger;
        reject(err);
        //return Promise.reject(err)
      })
  });
}

getMyClassStudents('小明')
  .then((students) => {
    debugger;
    console.log(students);
  })
  .catch((err) => {
    debugger;
    console.log(err);
  });