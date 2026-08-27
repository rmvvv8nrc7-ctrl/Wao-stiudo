function toggleMenu(){
  document.getElementById('navLinks').classList.toggle('show');
}

document.querySelectorAll('#navLinks a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('show'));
});

document.getElementById('quoteForm').addEventListener('submit', function(e){
  e.preventDefault();

  const whatsappNumber = '218915123959'; // 00218915123959 
  const name = document.getElementById('name').value.trim();
  const service = document.getElementById('service').value;
  const details = document.getElementById('details').value.trim();

  const message =
`مرحباً، أريد طلب عرض سعر.

الاسم / الشركة: ${name}
الخدمة: ${service}
تفاصيل المشروع:
${details}`;

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
});
