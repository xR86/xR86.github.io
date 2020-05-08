/*
Also cover:
+ lens engine, relevant for:
  + video - unsmooth steps or even more exaggerated focus breathing than usual might be really bad for the end result
  + sound - forces use of hotshoe mic
  + macro - steps too big may need movement of the actual camera
 + ranking scores for chroma/geom abberations ?
*/

// json validated w https://jsonformatter.curiousconcept.com/
fetch('lenses.json')
.then(response => response.json())
.then(lenses => {
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
			console.log(lens);

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
});




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
