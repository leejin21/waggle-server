# waggle-server

와글앱 서버 깃 레포지터리입니다.

## 폴더 구조

src
|_ app.js
|_ /api			// controller layer
|_ /config		// env 변수들
|_ /services    // service layer
|_ /models		// data access layer
|_ /scripts		// 기타 script
|_ /test		// test code


## END POINT

### api/

register POST

login POST

main GET
|_ video 썸네일 GET
|_ video 뭘 하트 눌렀는지도 GET

여기서 하트 유무는 비디오 화면으로 넘어가도록 하기

video object GET
|_ object storage에서 가져 온 파일 GET
|_ youtube 시, 고려하지 않아도 될 듯

menu GET
|_ 해당 비디오로 등록된 menu GET

구매 목록 POST
|_ 구매한 목록으로 

(미완성)



