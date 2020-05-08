/*
Also cover:
+ lens engine, relevant for:
  + video - unsmooth steps or even more exaggerated focus breathing than usual might be really bad for the end result
  + sound - forces use of hotshoe mic
  + macro - steps too big may need movement of the actual camera
 + ranking scores for chroma/geom abberations ?
*/

// refactor to use: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
var lenses = [
{
	'name': 'Canon EF-S 18-55mm Obiectiv Foto DSLR F4-5.6 IS STM Whitebox',
	'priceRON': 500,
	'owned': true,
	'minFocal': 18,
	'maxFocal': 55,
	'apertureMinMinF': 4,
	'apertureMinMaxF': 5.6,
	'apertureMax': 32, //22-32
	'filterSize': 58,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/canon-ef-s-18-55mm-f4-5-6-is-stm--whitebox-/p'
},{
	'name': 'Canon EF 50mm Obiectiv Foto DSLR F1.8 STM',
	'priceRON': 600,
	'owned': true,
	'minFocal': 50,
	'maxFocal': 50,
	'apertureMinMinF': 1.8,
	'apertureMinMaxF': 1.8,
	'apertureMax': 22,
	'filterSize': 49,
	'autofocus': true,
	'lensType': 'prime',
	'link': 'https://www.f64.ro/canon-ef-50mm-f-1-8-stm/p'
},{
	'name': 'Canon EF-S 24mm Obiectiv Foto DSLR F2.8 STM',
	'priceRON': 800,
	'owned': false,
	'minFocal': 24,
	'maxFocal': 24,
	'apertureMinMinF': 2.8,
	'apertureMinMaxF': 2.8,
	'apertureMax': 22,
	'filterSize': 52,
	'autofocus': true,
	'lensType': 'prime',
	'link': 'https://www.f64.ro/canon-ef-s-24mm-f-2-8-stm/p'
},{
	'name': 'Tokina ATX 12-28mm f/4 Cinema Pro DX',
	'priceRON': 2400,
	'owned': false,
	'minFocal': 12,
	'maxFocal': 28,
	'apertureMinMinF': 4,
	'apertureMinMaxF': 4,
	'apertureMax': 22,
	'filterSize': 77,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/tokina-atx-12-28mm-f-4-cinema-pro-dx-canon/p'
},{
	'name': 'Tamron 18-200mm F/3.5-6.3 Di II VC',
	'priceRON': 1051,
	'owned': false,
	'minFocal': 18,
	'maxFocal': 200,
	'apertureMinMinF': 3.5,
	'apertureMinMaxF': 6.3,
	'apertureMax': 22,
	'filterSize': 77,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/tamron-18-200mm-f-3-5-6-3-di-ii-vc-montura-canon/p'
},{
	'name': 'Canon EF-S 10-18mm F/4.5-5.6 IS STM',
	'priceRON': 1150,
	'owned': false,
	'minFocal': 10,
	'maxFocal': 18,
	'apertureMinMinF': 4.5,
	'apertureMinMaxF': 5.6,
	'apertureMax': 29,
	'filterSize': 67,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/canon-ef-s-10-18mm-f-4-5-5-6-is-stm/p'
},{
	'name': 'Canon EF-S 55-250mm f/4-5.6 IS STM',
	'priceRON': 1500,
	'owned': false,
	'minFocal': 55,
	'maxFocal': 250,
	'apertureMinMinF': 4,
	'apertureMinMaxF': 5.6,
	'apertureMax': 32,
	'filterSize': 58,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/canon-ef-s-55-250mm-f-4-5-6-is-stm/p'
},{
	'name': 'Tamron 18-270mm F3.5-6.3 Di II',
	'priceRON': 1700,
	'owned': false,
	'minFocal': 18,
	'maxFocal': 270,
	'apertureMinMinF': 3.5,
	'apertureMinMaxF': 6.3,
	'apertureMax': 40,
	'filterSize': 62,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/tamron-18-270mm-f-3-5-6-3-di-ii-vc-pzd-ts-canon/p'
},{
	'name': 'Sigma 18-200mm F3.5-6.3 OS Contemporary',
	'priceRON': 1600,
	'owned': false,
	'minFocal': 18,
	'maxFocal': 200,
	'apertureMinMinF': 3.5,
	'apertureMinMaxF': 6.3,
	'apertureMax': 22,
	'filterSize': 62,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/sigma-18-200mm-f3-5-6-3-dc-macro-os-hsm-canon-ef-contemporary/p'
},{
	'name': 'Sigma 10-20mm F3.5 EX HSM',
	'priceRON': 1850,
	'owned': false,
	'minFocal': 10,
	'maxFocal': 20,
	'apertureMinMinF': 3.5,
	'apertureMinMaxF': 3.5,
	'apertureMax': 22,
	'filterSize': 67,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/sigma-10-20mm-f-3-5-ex-dc-hsm-canon-ef-s/p'
},{
	'name': 'Sigma 17-70mm F2.8-4 HSM OS',
	'priceRON': 2000,
	'owned': false,
	'minFocal': 17,
	'maxFocal': 70,
	'apertureMinMinF': 2.8,
	'apertureMinMaxF': 4,
	'apertureMax': 22,
	'filterSize': 72,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/sigma-17-70mm-f-2-8-4-dc-macro-os-hsm-canon-eos-contemporary/p'
},{
	'name': 'Sigma 18-300mm F3.5-6.3 Macro Contemporary',
	'priceRON': 2100,
	'owned': false,
	'minFocal': 18,
	'maxFocal': 300,
	'apertureMinMinF': 3.5,
	'apertureMinMaxF': 6.3,
	'apertureMax': 22,
	'filterSize': 72,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/sigma-18-300mm-f3-5-6-3-dc-macro-os-hsm-canon-c/p'
},{
	'name': 'Sigma 8-16mm Obiectiv Foto DSLR F4.5-5.6 HSM',
	'priceRON': 2582,
	'owned': false,
	'minFocal': 8,
	'maxFocal': 16,
	'apertureMinMinF': 4.5,
	'apertureMinMaxF': 5.6,
	'apertureMax': 22,
	'filterSize': 86,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/sigma-8-16mm-f-4-5-5-6-dc-hsm-canon-ef-s/p'
},{
	'name': 'Sigma 30mm F1.4 HSM Art',
	'priceRON': 2300,
	'owned': false,
	'minFocal': 30,
	'maxFocal': 30,
	'apertureMinMinF': 1.4,
	'apertureMinMaxF': 1.4,
	'apertureMax': 16,
	'filterSize': 62,
	'autofocus': true,
	'lensType': 'prime',
	'link': 'https://www.f64.ro/sigma-30mm-f-1-4-dc-hsm-art-canon-ef-s/p'
},{
	'name': 'Tokina ATX-I 11-16mm Obiectiv Foto DSLR F2.8 DX CF',
	'priceRON': 2300,
	'owned': false,
	'minFocal': 11,
	'maxFocal': 16,
	'apertureMinMinF': 2.8,
	'apertureMinMaxF': 2.8,
	'apertureMax': 22,
	'filterSize': 77,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/tokina-11-16mm-f2-8-atx-i-dx-cf-canon/p'
},{
	'name': 'Tokina 12-24mm f/4 AT-X124 PRO DX II',
	'priceRON': 2300,
	'owned': false,
	'minFocal': 12,
	'maxFocal': 24,
	'apertureMinMinF': 4,
	'apertureMinMaxF': 4,
	'apertureMax': 22,
	'filterSize': 77,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/tokina-12-24mm-f-4-at-x124-pro-dx-ii-canon/p'
},{
	'name': 'Tamron 10-24mm F/3.5-4.5 Di II VC HLD',
	'priceRON': 2400,
	'owned': false,
	'minFocal': 10,
	'maxFocal': 24,
	'apertureMinMinF': 3.5,
	'apertureMinMaxF': 4.5,
	'apertureMax': 29,
	'filterSize': 77,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/tamron-10-24mm-f-3-5-4-5-di-ii-vc-hld-canon/p'
},{
	'name': 'Canon EF-S 60mm f/2.8 Macro USM',
	'priceRON': 2400,
	'owned': false,
	'minFocal': 60,
	'maxFocal': 60,
	'apertureMinMinF': 2.8,
	'apertureMinMaxF': 2.8,
	'apertureMax': 32,
	'filterSize': 52,
	'autofocus': true,
	'lensType': 'prime',
	'link': 'https://www.f64.ro/canon-ef-s-60mm-f-2-8-macro-usm-1-1/p'
},{
	'name': 'Canon EF-S 18-135mm f/3.5-5.6 IS Nano USM',
	'priceRON': 2500,
	'owned': false,
	'minFocal': 18,
	'maxFocal': 135,
	'apertureMinMinF': 3.5,
	'apertureMinMaxF': 5.6,
	'apertureMax': 38,
	'filterSize': 67,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/canon-ef-s-18-135mm-f-3-5-5-6-is-nano-usm/p'
},{
	'name': 'Tokina 10-17mm f/3.5-4.5 ATX DX Fisheye',
	'priceRON': 2500,
	'owned': false,
	'minFocal': 10,
	'maxFocal': 17,
	'apertureMinMinF': 3.5,
	'apertureMinMaxF': 4.5,
	'apertureMax': 22,
	'filterSize': 68,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/tokina-10-17mm-f-3-5-4-5-atx-dx-fisheye-pentru-canon/p'
},{
	'name': 'Sigma 10mm F2.8 Fisheye',
	'priceRON': 2800,
	'owned': false,
	'minFocal': 10,
	'maxFocal': 10,
	'apertureMinMinF': 2.8,
	'apertureMinMaxF': 2.8,
	'apertureMax': 22,
	'filterSize': 0,
	'autofocus': true,
	'lensType': 'prime',
	'link': 'https://www.f64.ro/sigma-10mm-f-2-8-ex-dc-hsm-fisheye-canon-ef-s/p'
},{
	'name': 'Tokina AT-X 11-20mm f/2.8 PRO DX',
	'priceRON': 2800,
	'owned': false,
	'minFocal': 11,
	'maxFocal': 20,
	'apertureMinMinF': 2.8,
	'apertureMinMaxF': 2.8,
	'apertureMax': 22,
	'filterSize': 82,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/tokina-at-x-11-20mm-f-2-8-pro-dx-pentru-canon-af/p'
},{
	'name': 'Tokina 12-28mm f/4 ATX Pro DX',
	'priceRON': 2800,
	'owned': false,
	'minFocal': 12,
	'maxFocal': 28,
	'apertureMinMinF': 4,
	'apertureMinMaxF': 4,
	'apertureMax': 22,
	'filterSize': 77,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/tokina-atx-12-28mm-f-4-pro-dx-pentru-canon/p'
},{
	'name': 'Sigma 4.5mm F2.8 EX HSM Fisheye',
	'priceRON': 3071,
	'owned': false,
	'minFocal': 4.5,
	'maxFocal': 4.5,
	'apertureMinMinF': 2.8,
	'apertureMinMaxF': 2.8,
	'apertureMax': 22,
	'filterSize': 0,
	'autofocus': true,
	'lensType': 'prime',
	'link': 'https://www.f64.ro/sigma-4-5mm-f-2-8-ex-dc-fisheye-circular-canon-ef-s/p'
},{
	'name': 'Tokina 14-20mm F2.0 Pro DX Canon',
	'priceRON': 3590,
	'owned': false,
	'minFocal': 14,
	'maxFocal': 20,
	'apertureMinMinF': 2,
	'apertureMinMaxF': 2,
	'apertureMax': 22,
	'filterSize': 82,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/tokina-14-20mm-f2-0-pro-dx-canon/p'
},{
	'name': 'Sigma 50-100mm F1.8 HSM Art',
	'priceRON': 5400,
	'owned': false,
	'minFocal': 50,
	'maxFocal': 100,
	'apertureMinMinF': 1.8,
	'apertureMinMaxF': 1.8,
	'apertureMax': 16,
	'filterSize': 82,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/sigma-50-100mm-f1-8-dc-hsm-canon-a/p'
},{
	'name': 'Tamron 18-400mm Obiectiv Foto DSLR F/3.5-6.3 Di II VC HLD',
	'priceRON': 2990,
	'owned': false,
	'minFocal': 18,
	'maxFocal': 400,
	'apertureMinMinF': 3.5,
	'apertureMinMaxF': 6.3,
	'apertureMax': 40,
	'filterSize': 72,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/tamron-18-400mm-f-3-5-6-3-di-ii-vc-hld-montura-canon/p'
},{
	'name': 'Canon EF-S 35mm f/2.8 IS STM Macro',
	'priceRON': 2170,
	'owned': false,
	'minFocal': 35,
	'maxFocal': 35,
	'apertureMinMinF': 2.8,
	'apertureMinMaxF': 2.8,
	'apertureMax': 32,
	'filterSize': 49,
	'autofocus': true,
	'lensType': 'prime',
	'link': 'https://www.f64.ro/canon-ef-s-35mm-f-2-8-is-stm-macro/p'
},{
	'name': 'Samyang 10mm F2.8',
	'priceRON': 2100,
	'owned': false,
	'minFocal': 10,
	'maxFocal': 10,
	'apertureMinMinF': 2.8,
	'apertureMinMaxF': 2.8,
	'apertureMax': 22,
	'filterSize': 0,
	'autofocus': true,
	'lensType': 'prime',
	'link': 'https://www.f64.ro/samyang-10mm-f2-8-canon/p'
},{
	'name': 'Lensbaby 5.8mm Circular Fisheye',
	'priceRON': 1250,
	'owned': false,
	'minFocal': 5.8,
	'maxFocal': 5.8,
	'apertureMinMinF': 3.5,
	'apertureMinMaxF': 3.5,
	'apertureMax': 22,
	'filterSize': 0,
	'autofocus': true,
	'lensType': 'prime',
	'link': 'https://www.f64.ro/lensbaby-5-8mm-circular-fisheye-pentru-canon/p'
},{
	'name': 'Tamron 16-300 F/3.5-6.3 Di II VC PZD',
	'priceRON': 2200,
	'owned': false,
	'minFocal': 16,
	'maxFocal': 300,
	'apertureMinMinF': 3.5,
	'apertureMinMaxF': 6.3,
	'apertureMax': 40,
	'filterSize': 67,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/tamron-16-300mm-f-3-5-6-3-di-ii-vc-pzd-canon/p'
},{
	'name': 'Sigma 18-35mm F1.8 HSM Art',
	'priceRON': 3800,
	'owned': false,
	'minFocal': 18,
	'maxFocal': 35,
	'apertureMinMinF': 1.8,
	'apertureMinMaxF': 1.8,
	'apertureMax': 16,
	'filterSize': 72,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/sigma-18-35mm-f-1-8-dc-hsm-art-canon/p'
},{
	'name': 'Sigma 18-250mm F3.5-6.3 II OS',
	'priceRON': 1500,
	'owned': false,
	'minFocal': 18,
	'maxFocal': 250,
	'apertureMinMinF': 3.5,
	'apertureMinMaxF': 6.3,
	'apertureMax': 22,
	'filterSize': 62,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/sigma-18-250mm-f-3-5-6-3-dc-macro-os-hsm-tsc-canon-ef-s/p'
},{
	'name': 'Tokina ATX 11-16mm F/2.8 Pro DX II',
	'priceRON': 2000,
	'owned': false,
	'minFocal': 11,
	'maxFocal': 16,
	'apertureMinMinF': 2.8,
	'apertureMinMaxF': 2.8,
	'apertureMax': 22,
	'filterSize': 77,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/tokina-atx-11-16mm-f-2-8-pro-dx-ii-pentru-canon-af/p'
},{
	'name': 'Sigma 17-50mm Obiectiv Foto DSLR F2.8 EX HSM OS',
	'priceRON': 1760,
	'owned': false,
	'minFocal': 17,
	'maxFocal': 50,
	'apertureMinMinF': 2.8,
	'apertureMinMaxF': 2.8,
	'apertureMax': 22,
	'filterSize': 77,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/sigma-17-50mm-f-2-8-dc-ex-hsm-os-stabilizare-de-imagine-canon-ef-s/p'
},{
	'name': 'Tamron SP 17-50mm f/2.8 XR Di II VC LD Aspherical IF',
	'priceRON': 1800,
	'owned': false,
	'minFocal': 17,
	'maxFocal': 50,
	'apertureMinMinF': 2.8,
	'apertureMinMaxF': 2.8,
	'apertureMax': 32,
	'filterSize': 72,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/tamron-sp-17-50mm-f-2-8-xr-di-ii-vc-ld-aspherical-if-canon/p'
},{
	'name': 'Tamron SP 17-50mm f/2.8 XR Di II LD Aspherical IF',
	'priceRON': 1500,
	'owned': false,
	'minFocal': 17,
	'maxFocal': 50,
	'apertureMinMinF': 2.8,
	'apertureMinMaxF': 2.8,
	'apertureMax': 32,
	'filterSize': 67,
	'autofocus': true,
	'lensType': 'zoom',
	'link': 'https://www.f64.ro/tamron-sp-17-50mm-f-2-8-xr-di-ii-ld-aspherical-if-canon/p'
},{
	'name': 'Lensbaby Twist 60',
	'priceRON': 1250,
	'owned': false,
	'minFocal': 60,
	'maxFocal': 60,
	'apertureMinMinF': 2.5,
	'apertureMinMaxF': 2.5,
	'apertureMax': 22,
	'filterSize': 46,
	'autofocus': false,
	'lensType': 'prime',
	'link': 'https://www.f64.ro/lensbaby-twist-60-pentru-canon/p'
},{
	'name': 'Samyang 35mm T1.5 VDSLR II',
	'priceRON': 2500,
	'owned': false,
	'minFocal': 35,
	'maxFocal': 35,
	'apertureMinMinF': 1.5,
	'apertureMinMaxF': 1.5,
	'apertureMax': 22,
	'filterSize': 77,
	'autofocus': false,
	'lensType': 'prime',
	'link': 'https://www.f64.ro/samyang-35mm-t1-5-vdslr-ii-montura-canon-ef/p'
},{
	'name': 'Samyang 10mm T3.1 VDSLR II',
	'priceRON': 2340,
	'owned': false,
	'minFocal': 10,
	'maxFocal': 10,
	'apertureMinMinF': 3.1,
	'apertureMinMaxF': 3.1,
	'apertureMax': 22,
	'filterSize': 0,
	'autofocus': false,
	'lensType': 'prime',
	'link': 'https://www.f64.ro/samyang-10mm-t3-1-vdslr-ii-canon-ef/p'
},{
	'name': 'Samyang 85mm T1.5 AS IF UMC II',
	'priceRON': 1685,
	'owned': false,
	'minFocal': 85,
	'maxFocal': 85,
	'apertureMinMinF': 1.5,
	'apertureMinMaxF': 1.5,
	'apertureMax': 22,
	'filterSize': 72,
	'autofocus': false,
	'lensType': 'prime',
	'link': 'https://www.f64.ro/samyang-85mm-t1-5-as-if-umc-ii-cine-lens-canon/p'
},{
	'name': 'Samyang 24mm T1.5 VDSLR II',
	'priceRON': 3000,
	'owned': false,
	'minFocal': 24,
	'maxFocal': 24,
	'apertureMinMinF': 1.5,
	'apertureMinMaxF': 1.5,
	'apertureMax': 22,
	'filterSize': 77,
	'autofocus': false,
	'lensType': 'prime',
	'link': 'https://www.f64.ro/samyang-24mm-t1-5-vdslr-ii-cine-lens-canon/p'
}
];

const absFocalMin = 5;
const absFocalMax = 300;

$(`#rangeFilter`).ionRangeSlider({
	skin: "square", //flat|big|modern|sharp|round|square
	type: "double",
	min: absFocalMin,
	max: absFocalMax,
	from: absFocalMin,
	to: absFocalMax,
	grid: true,
	grid_num: 20,
	onChange: function (data) {
		rangeFilterHandler(data);
	}
});

function updateLensTable(lenses){
	document.querySelector('#lensContainer').innerHTML = '';
	
	var i = 0;
	var totalPrice = 0;
	
	lenses.forEach((lens) => {	
		const lensId = "lens-" + i;
		const lensRangeId = "lensRange-" + i;
		//console.log(lens);

		var lensApertureRange = `${ lens.apertureMinMinF } - ${ lens.apertureMinMaxF }`;

		$('#lensContainer').append(`<div class="row lens ${ lens.owned ? 'owned' : '' }">
			<div class="col-3 align-self-center">
				<span>${ lens.name } <a href="${ lens.link }" class="badge badge-warning" target="_blank">F64</a></span>
			</div>
			<div class="col-5 focal-range">
				<input type="text" id="${ lensRangeId }" name="" value="" />
			</div>
			<div class="col-1 align-self-center lens-af">${ lens.autofocus ? 'Yes': 'No' }
			</div>
			<div class="col-1  align-self-center">${ lens.apertureMinMinF == lens.apertureMinMaxF ? lens.apertureMinMinF : lensApertureRange }
			</div>
			<div class="col-2 align-self-center">
				<span class="lens-price">${ lens.priceRON } RON</span>
			</div>
		</div>`);

		$(`#${lensRangeId}`).ionRangeSlider({
			skin: "square", //flat|big|modern|sharp|round|square
			type: "double",
			min: absFocalMin,
			max: absFocalMax,
			from: lens.minFocal,
			to: lens.maxFocal,
			from_fixed: true,
			to_fixed: true,
			grid: true
		});

		i += 1;

		//console.log(lens.name);
		//console.log(lens.priceRON);

		if(lens.owned === false) {
			totalPrice += lens.priceRON;
		}

		if(i === lenses.length) {
			document.querySelector('#totalPrice').textContent = `${ totalPrice } RON Total`
			color_column();
		}
	});
}

updateLensTable(lenses);
// https://stackoverflow.com/questions/18983138/callback-after-all-asynchronous-foreach-callbacks-are-completed
function color_column() {
	document.querySelectorAll('.lens-af').forEach((afElem) => {
		if(afElem.textContent.trim() === 'Yes'){
			afElem.classList.add('criteria-ok');
		} else {
			afElem.classList.add('criteria-not-ok');
		}
	});
}


// Event listeners
document.querySelector('#lensFilter').addEventListener('input', function(){
	var filteredLenses = lenses.filter( element => element.name.toLowerCase().includes(this.value.toLowerCase()));
	updateLensTable(filteredLenses);
});

function rangeFilterHandler(data){
	console.log(data.from);
	console.log(data.to);
	
	var filteredLenses = lenses.filter( element => element.minFocal >= data.from);
	filteredLenses = filteredLenses.filter( element => element.maxFocal <= data.to);
	updateLensTable(filteredLenses);
}

document.querySelector('#autofocusFilter').addEventListener('input', function(){
	if(this.checked){
		var filteredLenses = lenses.filter( element => element.autofocus === true);
		updateLensTable(filteredLenses);
	} else { updateLensTable(lenses); }
});

// is ParseFloat safe from injection ?
document.querySelector('#apertureFilter').addEventListener('input', function(){
	if(this.value.trim()){
		var filteredLenses = lenses.filter( lens =>
			lens.apertureMinMinF == lens.apertureMinMaxF ? 
				lens.apertureMinMinF <= parseFloat(this.value.trim()) : 
				(lens.apertureMinMinF + lens.apertureMinMaxF ) / 2 <= parseFloat(this.value.trim())
		);
		updateLensTable(filteredLenses);
	} else { updateLensTable(lenses); }
});

document.querySelector('#priceFilter').addEventListener('input', function(){
	if(this.value.trim()){
		// https://www.joezimjs.com/javascript/great-mystery-of-the-tilde/
		// https://www.tutorialspoint.com/What-is-the-double-tilde-operator-in-JavaScript
		var filteredLenses = lenses.filter( lens => lens.priceRON <= ~~this.value.trim());
		updateLensTable(filteredLenses);
	} else { updateLensTable(lenses); }
});

// End event listeners

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/*
Used this:
>> http://ionden.com/a/plugins/ion.rangeSlider/api.html

Alternatives:
>> https://simeydotme.github.io/jQuery-ui-Slider-Pips/#example-steps-fivepercent
>> https://refreshless.com/nouislider/
>> https://seiyria.com/bootstrap-slider/#example-12

In case changes to skin required:
https://github.com/IonDen/ion.rangeSlider/blob/555e6ce9127758d860d4d900fc1dcb1c7e1d71e4/css/ion.rangeSlider.css

*/