function handleRequest(typeRequest, dataRequest, urlRequest, successFunc, failureFunc) {
    $.ajax({
        type: typeRequest,
        data: dataRequest,
        dataType: 'json',
        contentType: false,
        async: false,
        url: urlRequest,
        success: function (result) {
            // alert(JSON.stringify(result));
            successFunc(result);
        },
        error: function (res) {
            // $("#h11").html(res);
            failureFunc(res);
        }
    });
}