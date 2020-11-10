/*
* EXPLANATION
* stamp 관련 tables에 대한 query문들
*/
//////////////////////////////////////////////////
// * IMPORT ZONE

//////////////////////////////////////////////////
// * Stamp SQLs

let Coupon = {};
let CouponMenu = {};

Coupon.getViewableCoupon = 'sql문';

Coupon.putViewableFalse = 'sql문';

Coupon.putUsedTrue = 'sql문';

Coupon.getUsed = 'sql문';
// 리뷰 작성 화면에서 해당 쿠폰이 사용된 게 맞는 지 확인 위해(프로세스 확인을 위함)

Coupon.insertCoupon = 'sql문';

CouponMenu.getCouponMenu = 'sql문';

CouponMenu.insertCouponMenu = 'sql문';

//////////////////////////////////////////////////
//* EXPORT ZONE
module.exports = {Coupon, CouponMenu}