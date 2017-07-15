// 获取所有同学的信息
function getStudentList (callback) {
  $.ajax({
    url: 'http://localhost:3333/getStudentList',
    type: 'get',
    success: function (list) {
      callback(list);
    },
    error: function (err) {

    }
  })
}

// 根据studentId 获取该同学的信息(班级)
function getStudentInfo (studentId, callback) {
  $.ajax({
    url: 'http://localhost:3333/getStudentInfo',
    type: 'post',
    data: {
      studentId: studentId
    },
    success: function (studentInfo) {
      callback(studentInfo);
    },
    error: function (err) {

    }
  })
}

// 通过班级获取该班级的所有同学
function getClassStudents (className, callback) {
  $.ajax({
    url: 'http://localhost:3333/getClassStudents',
    type: 'post',
    data: {
      'class': className
    },
    success: function (students) {
      callback(students);
    },
    error: function (err) {

    }
  })
}

// 通过姓名获取该同学的同班同学
function getMyClassStudents (myName, callback) {
  getStudentList(function (studentList) {
    var selectStudent = studentList.find(function (item) {
      return item.name == myName;
    });
    getStudentInfo(selectStudent.studentId, function (studentInfo) {
      getClassStudents(studentInfo.class, function (students) {
        callback(students);
      });
    })
  })
}

getMyClassStudents('小红', function (students) {
  console.log(students);
});


















































