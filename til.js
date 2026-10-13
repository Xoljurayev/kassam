// Language switcher: Latin Uzbek (default), Cyrillic Uzbek, Russian.
// Elements carry data-t="key"; <html data-title="key"> names the page title.
// Choice is remembered per browser (optional, may be blocked) and can be forced with ?til=uz|kr|ru.
(function () {
  var T = {
    uz: {
      t_home: 'Kassam qo‘llanma', t_reg: 'Registratsiya — Kassam qo‘llanma', t_ham: 'Hamyon ochish — Kassam qo‘llanma',
      yoriq: 'Yo‘riqnoma', h1: 'Kassam qo‘llanma', lead: 'Kerakli bo‘limni tanlang va Kassam’dan foydalanishni oson o‘rganing.',
      reg: 'Registratsiya', reg_sub: 'Telefon raqam bilan ro‘yxatdan o‘tish', reg_bar: 'Ro‘yxatdan o‘tish',
      ham: 'Hamyon ochish', ham_sub: 'So‘m yoki dollar hamyon qo‘shish', ham_bar: 'So‘m yoki dollar hamyon',
      video: 'Video · 1:52', vcap: 'Video qo‘llanma ·', tez: 'Tez orada',
      kanal: 'Telegram kanal', admin: 'Adminga murojaat', orqaga: 'Orqaga'
    },
    kr: {
      t_home: 'Kassam қўлланма', t_reg: 'Рўйхатдан ўтиш — Kassam қўлланма', t_ham: 'Ҳамён очиш — Kassam қўлланма',
      yoriq: 'Йўриқнома', h1: 'Kassam қўлланма', lead: 'Керакли бўлимни танланг ва Kassam’дан фойдаланишни осон ўрганинг.',
      reg: 'Регистрация', reg_sub: 'Телефон рақам билан рўйхатдан ўтиш', reg_bar: 'Рўйхатдан ўтиш',
      ham: 'Ҳамён очиш', ham_sub: 'Сўм ёки доллар ҳамён қўшиш', ham_bar: 'Сўм ёки доллар ҳамён',
      video: 'Видео · 1:52', vcap: 'Видео қўлланма ·', tez: 'Тез орада',
      kanal: 'Телеграм канал', admin: 'Админга мурожаат', orqaga: 'Орқага'
    },
    ru: {
      t_home: 'Руководство Kassam', t_reg: 'Регистрация — руководство Kassam', t_ham: 'Открытие кошелька — руководство Kassam',
      yoriq: 'Инструкция', h1: 'Руководство Kassam', lead: 'Выберите нужный раздел и легко научитесь пользоваться Kassam.',
      reg: 'Регистрация', reg_sub: 'Регистрация по номеру телефона', reg_bar: 'Как зарегистрироваться',
      ham: 'Открытие кошелька', ham_sub: 'Кошелёк в сумах или долларах', ham_bar: 'Сумы или доллары',
      video: 'Видео · 1:52', vcap: 'Видеоинструкция ·', tez: 'Скоро',
      kanal: 'Telegram-канал', admin: 'Написать админу', orqaga: 'Назад'
    }
  };
  var HTML_LANG = { uz: 'uz', kr: 'uz-Cyrl', ru: 'ru' };

  function saved() {
    var q = (location.search.match(/[?&]til=(uz|kr|ru)\b/) || [])[1];
    if (q) { try { localStorage.setItem('kassam-til', q); } catch (e) {} return q; }
    try { var s = localStorage.getItem('kassam-til'); if (T[s]) return s; } catch (e) {}
    return 'uz';
  }

  function apply(lang) {
    var d = T[lang];
    document.documentElement.lang = HTML_LANG[lang];
    var tk = document.documentElement.getAttribute('data-title');
    if (tk && d[tk]) document.title = d[tk];
    var els = document.querySelectorAll('[data-t]');
    for (var i = 0; i < els.length; i++) {
      var v = d[els[i].getAttribute('data-t')];
      if (v != null) els[i].textContent = v;
    }
    var al = document.querySelectorAll('[data-t-aria]');
    for (var j = 0; j < al.length; j++) al[j].setAttribute('aria-label', d[al[j].getAttribute('data-t-aria')]);
    var bs = document.querySelectorAll('.til button');
    for (var k = 0; k < bs.length; k++) bs[k].setAttribute('aria-pressed', bs[k].getAttribute('data-til') === lang ? 'true' : 'false');
  }

  var til = document.querySelector('.til');
  if (til) til.addEventListener('click', function (e) {
    var b = e.target.closest('button[data-til]');
    if (!b) return;
    var lang = b.getAttribute('data-til');
    try { localStorage.setItem('kassam-til', lang); } catch (err) {}
    apply(lang);
  });
  apply(saved());
})();
