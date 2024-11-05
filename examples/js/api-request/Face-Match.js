
$("#photoFist").on('change',function(){
    let file=  $('#photoFist').prop('files')[0];
    let fileExtension=file.name.split('.').pop();
    if(IsImageValid(fileExtension)){
        getBase64(file).then((res)=>{
            $("#photoFistPlaceholder").attr("src",res);
        })
    }
    else{
        ErrorToast("Only JPG/PNG/GIF File Allowed");
    }
});

$("#photoSecond").on("change",function () {
    let file=  $('#photoSecond').prop('files')[0];
    let fileExtension=file.name.split('.').pop();
    if(IsImageValid(fileExtension)){
        getBase64(file).then((res)=>{
            $("#photoSecondPlaceholder").attr("src",res);
        })
    }
    else{
        ErrorToast("Only JPG/PNG/GIF File Allowed");
    }
})


$("#GetResult").on("click",function () {
    $("#FullScreenProgress").removeClass("d-none")
    let URL="/api/v1/FaceMatch";
    let photoSecond=$("#photoSecondPlaceholder").attr("src");
    let photoFirst=$("#photoFistPlaceholder").attr("src");
    let accuracy=$("#accuracy").val();
    let PostBody={
        "accuracy":accuracy,
        "img1Base64":photoFirst,
        "img2Base64":photoSecond
    }
    axios.post(URL,PostBody).then((res)=>{
        $("#FullScreenProgress").addClass("d-none");
        SuccessToast("Request completed");
        new JsonEditor('#json-display', res.data);

    }).catch(()=>{
        $("#FullScreenProgress").addClass("d-none")
        SomethingWentWrong();
    })
})

new JsonEditor('#json-display-2', {
    accuracy:"",
    img1Base64:"",
    img2Base64:""
});

new JsonEditor('#json-display', {});