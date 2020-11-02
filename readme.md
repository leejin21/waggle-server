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


### api/

********************************************************
#### user/register 						POST
********************************************************
header = {}  
data = {e-mail: “<email>, pw: “<pw>”, phone: “<phone>”, sex: “<sex>”, birth: “<birth>”, ID: ”<ID>”}  
response = {token: “token”}  
********************************************************
SignupScreen
********************************************************

********************************************************
user/login 						POST
********************************************************
header = {}	// 빈 헤더  
data = {user_id: “<id>”, pw: “<pw>”}  
response = {token: “token”,   
	info: { name: “”, phone_num: “”}  
	// crypto-js로 암호화해 주기: 이게 얼마나 효과가 있는 지,,,  
}  
********************************************************
LoginScreen에서 state id, pw에 해당하는 데이터 주고  
refresh token 가져오기(maybe)  
********************************************************
********************************************************
user/profile 						GET
********************************************************
header = {token: “token”}	  
response = {  
	name: “<id>”,   
	email: “<email>”,  
	pw: “<pw length>”,  
	phone_num: “phon_num”,  
	birth: “<date>”,  
	sex: “<F/M>”,  
}
********************************************************
처음 EditIndoScreen 렌더할 때 조회할 수 있는 유저 정보에 해당.
********************************************************

********************************************************
user/profile 						PUT
********************************************************
header = {token: “token”}  
params = { change: “<id/email/pw/phone_num/birth/sex>”}  
data = {  
	// 바뀐 데이터만 집어넣기  
	}  
response = {token: “token”}  
********************************************************
EditInfoScreen에서 바뀐 유저 데이터 전송할 때. DB table에서는 token으로 찾은 user 테이블의 user instance의 정보 수정.
********************************************************

********************************************************
main/thumbnails 					GET
********************************************************
header = {token: “<token>”}  
data = {  
video_url: “<object storage get url? youtube url?>”,  
timeline: [	// 리스트  
	{subject: “”, time: “”},   
	{subject: “”, time: “”},  
	...  
	]  
}  
********************************************************
HomeMainScreen에서 imageDatas로 해당, 여기서 fetch 추가해서 쓸 예정  
********************************************************

********************************************************
main/menu/ 						GET
********************************************************
header = {}  
params = {  
	ordered: <true/false>,  
	// true: ReviewScreen에서의 http request, false: 장바구니 화면에서의 http request  
	rest_id: “rest-id”,  
 }  
response = [  
	{id: <순번>, menu_id: “<db: menu-id>”, name: “비빔밥”, photo: <object stroage url>, type: <main/side>},  
	{id: <순번>, menu_id: “<db: menu-id>”, name: “고기”, photo: <object stroage url>, type: <main/side>},  
	...  
]  
// response data 리스트로 주는 거 가능한 지 실험해 보기  
********************************************************
BasketScreen에서 main_menu, side_menu에,   
ReviewScreen에서 orderedMenuData에 해당.  
******************************************************** 
********************************************************
main/thumbnails 					GET
********************************************************
header = {token: “<token>”}	// 빈 헤더  
data = {name: “<rest-name>”, heart_filled: “<boolean>”, photo: <object storage get url?>}  
********************************************************
HomeMainScreen에서 imageDatas로 해당, 여기서 fetch 추가해서 쓸 예정  
********************************************************

********************************************************
event/coupon 						POST
********************************************************
header = {token: <token>}  
data = {  
	coupon: {id: <rest-id>, due: <date>, used: <price>, issuedDate: <date>, type: <type>},  
	coupon_menu: [   
		// 이전 Basket Screen에서 받은 menu_id 살려서  
		{ menu-id: <menu-id>, type: <main/side> }  
		{ menu-id: <menu-id>, type: <main/side> }  
	]  
********************************************************
OrderScreen에서 주문하기 버튼 눌렀을 때, 그리고  
StamptoCouponScreen에서 쿠폰 발급받기 버튼 눌렀을 때  
********************************************************
********************************************************
event/coupon						GET
********************************************************
header: {token: “user-token”}  
params: {}					// 빈 params  
response: [  
// 생각하기: 스탬프 완료쿠폰에서 review_able은?  
{  
	coupon_id: <db 내 coupon_id>,  
	rest-name: “<rest-name>”,  
	type: “<G/S>”,  
	// G: 일반(general), S: 스탬프(stamp)  
	content: [“menu1”, “menu2”, “menu3”],  
	// 객체 배열 아닌 str 배열도 전달 가능한 지 알아봐야 함  
	usable: <true/false>,  
	// 당연히 usable 다 true 여야 함  
	review_able: <true/false>,  
	useDate: <date>  
},  
...  
]
********************************************************
CouponsScreen에서 couponDatas에 해당.
********************************************************
********************************************************
event/coupon						PUT
********************************************************
header: {token: “user-token”}  
// 여기에 remove도 추가(쿠폰 우측상단의 X 표시)  
data: {  
	coupon_id: <coupon id>,  
	used: <true/false>,  
	usedDate: <date>  
}  
response: {  
	coupon: {  
		used: <true/false>,  
		usedDate: <date>,  
	},  
	// success 뭐 이런 걸 추가할 거면 하기  
}
********************************************************
OrderScreen에서 mainArray, sideArray에 해당
********************************************************
********************************************************
event/coupon/stamp						POST
********************************************************
header: {token: “user-token”}  
response: {  
	coupon_id: <coupon id>,  
	used: <true/false>,  
	usedDate: <date>  
}  
response: {  
	coupon: {  
		used: <true/false>,  
		usedDate: <date>,  
	},  
	// success 뭐 이런 걸 추가할 거면 하기  
}
********************************************************
OrderScreen에서 mainArray, sideArray에 해당
********************************************************
********************************************************
event/stamp 						POST
********************************************************
header: {token: “token”}  
data = {  
	rest-id: <rest-id>,  
	// rest-id랑 user-id(==token)으로 stbox-id 찾기  
	date: <stamp-date>  
}  
********************************************************
ReviewScreen에서 리뷰 제출 직후 stamp 추가.  
StampboxScreen에서 새로 추가된 스탬프 조회 가능하도록.
********************************************************
********************************************************
event/stamp/box 						GET
********************************************************
header: { token: <token> }  
response = [  
	{rest-id: “<rest-id>”, rest-name: “<rest-name>”, stbox-id: “stbox-id”, stamp-num: <stamp-num>},  
	{rest-id: “<rest-id>”, rest-name: “<rest-name>”, stbox-id: “stbox-id”, stamp-num: <stamp-num>}  
	…  
]
********************************************************
StampboxScreen에서 stamp box들 조회
********************************************************
********************************************************
event/stamp/detail 						GET
********************************************************
header= { token: <token> }  
params= { stbox-id: <stbox-id> }  
response = [  
	{date: <stamp-date>},  
	{date: <stamp-date>},  
	…  
]
********************************************************
StamptoCouponScreen에서 stamp들 조회
********************************************************
********************************************************
event/stamp/detail 						POST
********************************************************
header= { token: <token> }  
data = {}
********************************************************
StamptoCouponScreen? 에서 stamp들 조회
********************************************************
********************************************************
event/review 						POST
********************************************************
header = {token: “token”}  
data = [  
	{menu_id: <menu_id>, starPoint: <int형>, saltReview: <int형>, amountReview: <int형>, otherReview: <int형>, complete: <boolean형>},  
	{menu_id: <menu_id>, starPoint: <int형>, saltReview: <int형>, amountReview: <int형>, otherReview: <int형>, complete: <boolean형>},  
…  
]
********************************************************
ReviewScreen에서 bottom buttond에 해당하는 <눈송>슐랭 평가완료 버튼 누를 때 호출(onPress일 때)
********************************************************

++ ISSUE: 서버에서 stamp delete 언제할 지 생각하기

