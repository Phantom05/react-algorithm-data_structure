var zip = new JSZip();
zip.file("./test/Hello.txt", "Hello World\n");

var img = zip.folder("./test");
// imgData에다가 텍스트 이미지 넣으면됨
// img.file("smile.gif", imgData, {base64: true});

img.file({
  base64: true
});
zip.generateAsync({
    type: "blob"
  })
  .then(function (content) {
    // see FileSaver.js
    console.log(content);
    // saveAs(content, "example.zip");
  });


var inps = document.querySelectorAll('input');
[].forEach.call(inps, function(inp) {
  inp.onchange = function(e) {
    console.log(this.files);
  };
});



// $("#files").on("change", (evt) => { // file input handler
//   files = evt.target.files;
// });
// $("#submit").on("click", () => {
//   // AWS.config.update({
//   //   accessKeyId: 'AKIA......Q',
//   //   secretAccessKey: '......'
//   // });
//   // AWS.config.region = 'us-west-1';

//   // var s3 = new AWS.S3({
//   //   apiVersion: '2006-03-01',
//   //   params: {
//   //     Bucket: 'uploads'
//   //   }
//   // });

//   var myzip = new JSZip();
  
//   for (var i = 0, f; f = files[i]; i++) {
//     myzip.file("myzipfile", f)
//   }
//   myzip.generateAsync({
//       type: "base64"
//     })
//     .then((myzipfile) => {
//       console.log(myzipfile);
//       // var params = {
//       //   Key: "myzip.zip",
//       //   ContentType: "application/zip",
//       //   ContentEncoding: 'base64',
//       //   Body: myzipfile
//       // };
//       // console.log(params);

//       saveAs(myzipfile, "example.zip");

//       // s3.putObject(params, (err, res) => {
//       //   if (err) throw err;
//       //   console.log(res);
//       // });
//     })
// })