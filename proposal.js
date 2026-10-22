const frame = document.querySelector('#preview-frame');
const status = document.querySelector('#view-status');
document.querySelectorAll('[data-view]').forEach(button => {
  button.addEventListener('click', () => {
    const mobile = button.dataset.view === 'mobile';
    frame.classList.toggle('mobile-view', mobile);
    document.querySelectorAll('[data-view]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    status.textContent = mobile ? 'Vista de telemóvel: 390 px, limitada pela largura disponível. Pode explorar as etapas dentro da demonstração.' : 'Vista adaptável à largura disponível. Pode explorar as etapas dentro da demonstração.';
  });
});
