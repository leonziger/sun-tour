import $ from 'jquery';
import vex from 'vex-js';


$('[data-modal-toggle]').click(function (e) {
  e.preventDefault();

  const modalName = $(this).data('modal-toggle');
  const modal = $(`[data-modal=${modalName}]`);

  if (!modal.length) {
    return console.error('Modal is not exist!');
  }

  vex.open({
    unsafeContent: modal.html(),
    closeClassName: 'modal__close'
  });
});
