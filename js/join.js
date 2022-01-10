$('form').on('submit',function(){
    // 아이디
    var idval = $('#id').val()
    var idcheck = /^[a-zA-Z0-9]+$/
    if (!idcheck.test(idval) || idval.length<5){
        alert('아이디는 5글자 이상이며 특수문자를 포함하지 않습니다.')
        idval.focus()
        console.log (idcheck)
        return false
    }

    // 비밀번호
    var pwvalcheck = /^(?=.*[^a-zA-Z0-9])(?=.*[0-9]).*$/
    var pwval = $('#password').val()
    var pwvalok = $('#password2').val()
    if( !pwvalcheck.test(pwval) ) {
        alert('비밀번호는 영문, 숫자, 특수문자 중 3가지 이상 조합해야합니다.')
        $('#password').focus()
        return false
    } else {
        if (pwvalok) {
            if (pwval !== pwvalok) {
                alert ('비밀번호가 맞지 않습니다')
                $('#password').focus()
                return false
            }
        } else {
            alert ('비밀번호확인을 입력해주세요.')
            $('#password2').focus()
            return false
        }
    }

    //이름
    var irumval = $('#irum').val()
    var irumvalcheck = /^[가-힣]+$/
    if (!irumvalcheck.test(irumval)) {
        alert ('이름은 한글만 입력해주세요.')
        $('#irum').focus()
        return false
    }

    // 성별
    if ( !$('male').prop('checked') && !$('#female').prop('checked') ) {
        alert ('성별을 선택해 주세요.')
        $('#male').focus()
        return false
    }

    //휴대폰번호
    var hp1val = $('#hp1').val()
    var hp2val = $('#hp2').val()
    var hp1valcheck = /^\d{3,4}$/
    var hp2valcheck = /^\d{4}$/
    if ( !hp1valcheck.test(hp1val) ) {
        alert('번호를 올바르게 입력해주세요.')
        $('#hp1').focus()
        return false
    }
    if ( !hp2valcheck.test(hp2val) ) {
        alert('번호를 올바르게 입력해주세요.')
        $('#hp2').focus()
        return false
    }

    // 이메일주소
    var emailval = $('#email').val()
    var emailvalcheck = /^[a-zA-Z0-9+-\_.]+$/
    if ( !emailvalcheck.test(emailval) ) {
        alert ('이메일 형식이 맞지 않습니다.')
        $('#email').focus()
        return false
    }

})

$('#domainlist').on('change',function(){
    var value = $(this).find('option:selected').val()
    if (value !== 'nul' && value !== 'self' ) {
        $('#email2').val(value).attr({disabled:true})
    } else if ( value === 'self' ) {
        $('#email2').attr({disabled:false}).val("")
    } else {
        $('#email2').attr({disabled:true}).val("")
    }
})


    //생년월일
    var optlist='';
    var now = new Date()
    var year = now.getFullYear()
    for (let i=year; i>=1900; i--) {
        optlist += `<option value="${i}">${i}</option>`
    }
    document.getElementById('birthyear').innerHTML = optlist

    var optmonth='';
    for (let i=1; i<=12; i++) {
        optmonth += `<option value="${i}">${i}</option>`
    }
    document.getElementById('birthmonth').innerHTML = optmonth

    var optday='';
    for (let i=1; i<=31; i++) {
        optday += `<option value="${i}">${i}</option>`
    }
    document.getElementById('birthday').innerHTML = optday