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

++ front end에서 아직 덜한 부분들
* 공유하기(비디오 공유)
* 비디오 스크린
* 담은 메뉴 총합 계산하는 것하기
* 


### api/

register POST

login POST

profile edit PUT

main GET

video 썸네일 GET <메인 화면>
- video 뭘 하트 눌렀는지도 GET
- video timeline 관련해서도? GET  
: 여기서 하트 유무는 비디오 화면으로 넘어가도록 하기

video object GET <비디오 화면>
- object storage에서 가져 온 파일 GET
- youtube 시, 고려하지 않아도 될 듯

Menu GET <비디오 화면>
- 해당 비디오로 등록된 menu GET
- name, thumbnail(object storage?), price, type, 

Coupon POST <구매 완료 화면>
- DB: Coupon table, Cioupon-Menu table에서 데이터 instance 생성
- user-id, rest-id, due, used=False, issuedDate

Coupon PUT <쿠폰함 화면>
- params: coupon-id
- edit key: used, usedDate

Review POST <리뷰 화면>
- DB: Review tableㄴ
- key: rest-id, menu-id, starPoint, taste, amount, etc, postDate

Stamp POST <리뷰 화면>
- params: rest-id, user
- key: isFull, Full-couponID

Stamp GET <스탬프 화면>
- params: rest-id, user
- return [
    {id: 1, date: <날짜>},
    ...
]

++ frontend에서 배열로 return 들어온 response의 길이>=10일 때 isFull true로 처리해주는 게 더 나을 듯


++ ISSUE: db에서 stamp delete 언제할 지 생각하기

