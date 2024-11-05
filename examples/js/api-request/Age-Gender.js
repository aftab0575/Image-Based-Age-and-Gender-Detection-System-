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


$("#GetResult").on("click",function () {
    $("#FullScreenProgress").removeClass("d-none")
    let URL="/api/v1/FaceAgeGender";
    let photoFirst=$("#photoFistPlaceholder").attr("src");
    let PostBody={
        "imgBase64":photoFirst,
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
    imgBase64:""
});

new JsonEditor('#json-display', {});