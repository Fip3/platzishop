const $form = $('#suscribeForm');
const $formGroup = $form.find('.form-group');
const $formControl = $formGroup.find('.form-control');

$form.submit(function (ev){
  
  ev.preventDefault();

  const error = Math.random() > 0.5;
  $formGroup.removeClass().addClass('form-group');
  $formControl.removeClass().addClass('form-control');

  $formGroup.addClass( error ? 'has-danger' : 'has-success');
  $formControl.addClass( error ? 'form-control-danger' : 'form-control-success');

  $formGroup.find('.form-control-feedback').remove();


  var elemento;
  
  if (error) {
    elemento = $('<div>', {html: 'Ha ocurrido un error'});
  } else {
    elemento = $('<div>', {html: 'Te enviaremos las novedades a tu bandeja'});
  }

  elemento.addClass('form-control-feedback');

  $formGroup.append(elemento);

})