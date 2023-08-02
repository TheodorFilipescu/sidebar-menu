document.addEventListener('DOMContentLoaded', function () {
    let isInvarteDeschis = false;
  
    document.querySelector('.container-sidebar-el-btn-asp').addEventListener('click', function () {
      const totalContainer = document.querySelector('.container-side-total');
      isInvarteDeschis = !isInvarteDeschis;
  
      this.classList.toggle('invarte-deschis', isInvarteDeschis);
      this.classList.toggle('invarte-inchis', !isInvarteDeschis);
  
      totalContainer.classList.toggle('side-bar-deschis', isInvarteDeschis);
      totalContainer.classList.toggle('side-bar-inchis', !isInvarteDeschis);
    });
  });
  