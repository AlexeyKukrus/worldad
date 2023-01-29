//КАРТА В INDEX-MAP
let center = [40.414146,49.860311];
function init() {
  let map = new ymaps.Map('map', {
		center: center,
		zoom: 16
  });

	let placemark = new ymaps.Placemark(center, {}, {
		iconLayout: 'default#image',
		iconImageHref: 'img/svg/map_point.svg',
		iconImageSize: [20, 20],
		iconImageOffset: [0, 0]
	});
  
  map.behaviors.disable('scrollZoom'); // отключаем скролл карты (опционально)
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable('multiTouch'); // — это отключает зум щипком, не очень нужно. 

  map.geoObjects.add(placemark);
};
ymaps.ready(init);